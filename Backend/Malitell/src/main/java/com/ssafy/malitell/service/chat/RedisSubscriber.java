package com.ssafy.malitell.service.chat;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.dto.request.chat.ChatMessageDto;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class RedisSubscriber implements MessageListener {

    private final ObjectMapper objectMapper;
    private final RedisTemplate redisTemplate;
    private final SimpMessageSendingOperations messagingTemplate;

    @Override
    public void onMessage(Message message, byte[] pattern) {
        try {
            // redis 에서 발행된 데이터를 받아 역직렬화
            String publishMessage = (String) redisTemplate.getStringSerializer().deserialize(message.getBody());

            // 4. 해당 객체를 MessageDto 객체로 맵핑
            ChatMessageDto roomMessage = objectMapper.readValue(publishMessage, ChatMessageDto.class);

            // 5. Websocket 구독자에게 채팅 메시지 전송
            messagingTemplate.convertAndSend("/sub/chat/room/" + roomMessage.getChatRoomSeq(), roomMessage);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }

    /**
     * Redis에서 메시지가 발행(publish)되면 대기하고 있던 Redis Subscriber가 해당 메시지를 받아 처리한다.
     */
    public void sendMessage(String publishMessage) {
        try {
            // ChatMessage 객채로 맵핑
            ChatMessageResponseDto chatMessageResponseDto = objectMapper.readValue(publishMessage, ChatMessageResponseDto.class);
            // 채팅방을 구독한 클라이언트에게 메시지 발송
            messagingTemplate.convertAndSend("/api/sub/chat/room/" + chatMessageResponseDto.getChatRoomSeq(), chatMessageResponseDto);
        } catch (Exception e) {
            log.error("Exception {}", e);
        }
    }
}