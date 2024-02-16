package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.ChatRoomDto;
import com.ssafy.malitell.dto.response.chat.ChatRoomResponseDto;
import com.ssafy.malitell.service.chat.RedisSubscriber;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.nio.channels.Channel;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
//@RequiredArgsConstructor
public interface ChatRoomRepository extends JpaRepository<ChatRoom, String> {
    ChatRoom findByCounselorAndClient(User counselor, User client);

    List<ChatRoom> findAllChatRoomByCounselorAndClient(User counselor, User client);

    List<ChatRoom> findAll();

    ChatRoom findRoomByChatRoomSeq(String chatRoomSeq);
//    private final RedisMessageListenerContainer redisMessageListenerContainer;
//
//    private final RedisSubscriber redisSubscriber;
//    private static final String CHAT_ROOMS = "CHAT_ROOM";
//
//    private final RedisTemplate<String, Object> redisTemplate;
//    private HashOperations<String, String, ChatRoomDto> opsHashChatRoom;
//
//    private Map<String, ChannelTopic> topics;
//
//    @PostConstruct
//    private void init() {
//        opsHashChatRoom = redisTemplate.opsForHash();
//        topics = new HashMap<>();
//    }
//
//    @Transactional
//    public List<ChatRoomDto> findAllRoom() {
//        return opsHashChatRoom.values(CHAT_ROOMS);
//    }
//
//    public ChatRoomDto findRoomById(String chatRoomSeq) {
//        return opsHashChatRoom.get(CHAT_ROOMS, chatRoomSeq);
//    }
//
//    public ChatRoomResponseDto createChatRoom(User counselor, User client) {
//        ChatRoom chatRoom = ChatRoom.create(counselor, client);
//        ChatRoomDto chatRoomDto = new ChatRoomDto(chatRoom);
//
//        opsHashChatRoom.put(CHAT_ROOMS, chatRoom.getChatRoomSeq(), chatRoomDto);
//        return new ChatRoomResponseDto(chatRoom);
//    }
}