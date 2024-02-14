package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends MongoRepository<ChatMessage, Long> {
    List<ChatMessage> findTop100ByChatRoomChatRoomSeqOrderBySendTimeAsc(String roomId);

    ChatMessage findTopByChatRoomChatRoomSeqOrderBySendTimeDesc(String chatRoomSeq);

//    private final RedisTemplate<String, ChatMessageDto> redisTemplateMessage;
//
//    private final MongoTemplate mongoTemplate;
//
//    private final ChatMessageMongoRepository chatMessageMongoRepository;
//
//    private final ChatRoomRepository chatRoomRepository;
//
//    // 대화 저장
//    public void saveMessage(ChatMessage chatMessage) {
//        mongoTemplate.save(chatMessage);
//
//        // 1. 직렬화
//        redisTemplateMessage.setValueSerializer(new Jackson2JsonRedisSerializer<>(ChatMessage.class));
//
//        // 2. redis 저장
//        redisTemplateMessage.opsForList().rightPush(chatMessage.getChatRoom().getChatRoomSeq(), chatMessage);
//
//        // 3. expire 을 이용해서, Key 를 만료시킬 수 있음
//        redisTemplateMessage.expire(chatMessage.getChatRoom().getChatRoomSeq(), 1, TimeUnit.MINUTES);
//    }
//
//    @Transactional
//    // 대화 조회 - Redis & DB
//    public List<ChatMessageDto> loadMessage(String chatRoomSeq) {
//        List<ChatMessageDto> messageList = new ArrayList<>();
//
//        // Redis 에서 해당 채팅방의 메시지 100개 가져오기
//        List<ChatMessageDto> redisMessageList = redisTemplateMessage.opsForList().range(chatRoomSeq, 0, 99);
//
//        // 4. Redis 에서 가져온 메시지가 없다면, DB 에서 메시지 100개 가져오기
//        if (redisMessageList == null || redisMessageList.isEmpty()) {
//            // 5.
//            List<ChatMessage> dbMessageList = chatMessageMongoRepository.findTop100ByChatRoomChatRoomSeqOrderBySendTimeAsc(chatRoomSeq);
//
//            for (ChatMessage chatMessage : dbMessageList) {
//                ChatMessageDto chatMessageDto = new ChatMessageDto(chatMessage);
//                messageList.add(chatMessageDto);
//                redisTemplateMessage.setValueSerializer(new Jackson2JsonRedisSerializer<>(Message.class));      // 직렬화
//                redisTemplateMessage.opsForList().rightPush(chatRoomSeq, chatMessageDto);                                // redis 저장
//            }
//        } else {
//            // 7.
//            messageList.addAll(redisMessageList);
//        }
//        return messageList;
//    }
}
