package com.ssafy.malitell.service.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.ChatMessageDto;
import com.ssafy.malitell.dto.request.chat.ChatMessageRequestDto;
import com.ssafy.malitell.dto.request.chat.ChatRoomDto;
import com.ssafy.malitell.dto.response.chat.ChatRoomResponseDto;
import com.ssafy.malitell.repository.chat.ChatMessageRepository;
import com.ssafy.malitell.repository.chat.ChatRoomRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;
    private final UserRepository userRepository;
    private final RedisTemplate<String, ChatMessageDto> redisTemplateMessage;

    // 구독 처리 서비스
    private final RedisSubscriber redisSubscriber;

    private final RedisMessageListenerContainer redisMessageListenerContainer;
    private static final String CHAT_ROOMS = "CHAT_ROOM";

    private final RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, ChatRoomDto> opsHashChatRoom;

    private Map<String, ChannelTopic> topics;

    @PostConstruct
    private void init() {
        opsHashChatRoom = redisTemplate.opsForHash();
        topics = new HashMap<>();
    }

    @Transactional
    public List<ChatRoomDto> findAllRooms() {
        List<ChatRoom> chatRoomList = chatRoomRepository.findAll();
        List<ChatRoomDto> chatRoomDtos = new ArrayList<>();

        for (ChatRoom chatRoom : chatRoomList) {
            ChatRoomDto chatRoomDto = new ChatRoomDto(chatRoom);
            chatRoomDtos.add(chatRoomDto);
        }
        return chatRoomDtos;
    }

    @Transactional
    public ChatRoomResponseDto createChatRoom(ChatMessageRequestDto messageRequestDto) throws Exception {
        User counselor = userRepository.findByUserSeq(messageRequestDto.getCounselorSeq());
        User client = userRepository.findByUserSeq(messageRequestDto.getClientSeq());

        // counselor나 client가 존재하지 않을 경우
        if (counselor == null || client == null) {
            throw new Exception("counselor 혹은 client가 존재하지 않습니다.");
        }

        ChatRoom chatRoom = chatRoomRepository.findByCounselorAndClient(counselor, client);

        if (chatRoom == null) {
            ChatRoomDto chatRoomDto = ChatRoomDto.create(counselor, client);
            opsHashChatRoom.put(CHAT_ROOMS, chatRoomDto.getChatRoomSeq(), chatRoomDto);

            chatRoom = new ChatRoom(chatRoomDto.getChatRoomSeq(), counselor, client, null);
            chatRoomRepository.save(chatRoom);
            return new ChatRoomResponseDto(chatRoom, counselor, client);
            // 6. 이미 생성된 쪽지방인 경우
        } else {
            return new ChatRoomResponseDto(chatRoom.getChatRoomSeq());
        }
    }

    public ChatRoomDto findRoom(String chatRoomSeq) {
        return new ChatRoomDto(chatRoomRepository.findRoomByChatRoomSeq(chatRoomSeq));
    }

    // redis 채널에서 쪽지방 조회
    public ChannelTopic getTopic(String chatRoomSeq) {
        return topics.get(chatRoomSeq);
    }

    @Transactional
    public void saveMessage(ChatMessageDto chatMessageDto) {
        ChatRoomDto chatRoomDto = new ChatRoomDto(chatRoomRepository.findRoomByChatRoomSeq(chatMessageDto.getChatRoomSeq()));
        User client = userRepository.findByUserSeq(chatRoomDto.getClientSeq());
        User counselor = userRepository.findByUserSeq(chatRoomDto.getCounselorSeq());

        ChatRoom chatRoom = new ChatRoom().create(client, counselor);
        User user = userRepository.findByUserSeq(chatMessageDto.getUserSeq());
        LocalDateTime sendTime = LocalDateTime.now();

        ChatMessage chatMessage = new ChatMessage(chatMessageDto, sendTime, chatRoom, user);

        chatMessageRepository.save(chatMessage);

        // 1. 직렬화
        redisTemplateMessage.setValueSerializer(new Jackson2JsonRedisSerializer<>(ChatMessageDto.class));

        // 2. redis 저장
        redisTemplateMessage.opsForList().rightPush(chatMessageDto.getChatRoomSeq(), chatMessageDto);

        // 3. expire 을 이용해서, Key 를 만료시킬 수 있음
        redisTemplateMessage.expire(chatMessageDto.getChatRoomSeq(), 1, TimeUnit.MINUTES);
    }

    @Transactional
    public List<ChatMessageDto> loadMessage(String chatRoomSeq) {

        // Redis 에서 해당 채팅방의 메시지 100개 가져오기
        List<ChatMessageDto> redisMessageList = redisTemplateMessage.opsForList().range(chatRoomSeq, 0, 99);

        List<ChatMessageDto> messageList = new ArrayList<>(redisMessageList);

        // 4. Redis 에서 가져온 메시지가 없다면, DB 에서 메시지 100개 가져오기
        if (redisMessageList.isEmpty()) {
            // 5.
            List<ChatMessage> dbMessageList = chatMessageRepository.findTop100ByChatRoomChatRoomSeqOrderBySendTimeAsc(chatRoomSeq);

            for (ChatMessage message : dbMessageList) {
                ChatMessageDto messageDto = new ChatMessageDto(message);
                messageList.add(messageDto);
                redisTemplateMessage.setValueSerializer(new Jackson2JsonRedisSerializer<>(ChatMessage.class));      // 직렬화
                redisTemplateMessage.opsForList().rightPush(chatRoomSeq, messageDto);                                // redis 저장
            }
        } else {
            // 7.
            messageList.addAll(redisMessageList);
        }


        return messageList;
    }

    // 쪽지방 입장
    public void enterMessageRoom(String roomId) {
        ChannelTopic topic = topics.get(roomId);

        if (topic == null) {
            topic = new ChannelTopic(roomId);
            redisMessageListenerContainer.addMessageListener(redisSubscriber, topic);        // pub/sub 통신을 위해 리스너를 설정. 대화가 가능해진다
            topics.put(roomId, topic);
        }
    }
}
