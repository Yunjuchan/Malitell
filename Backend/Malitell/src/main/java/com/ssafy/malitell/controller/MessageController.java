package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.chat.ChatMessageDto;
import com.ssafy.malitell.service.chat.ChatService;
import com.ssafy.malitell.service.chat.RedisPublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    private final RedisPublisher redisPublisher;

    private final ChannelTopic channelTopic;

    @MessageMapping("/api/chat/message")
    public void message(@RequestBody ChatMessageDto chatMessageDto) {
        chatService.enterMessageRoom(chatMessageDto.getChatRoomSeq());
        chatService.saveMessage(chatMessageDto);
        redisPublisher.publish(chatService.getTopic(chatMessageDto.getChatRoomSeq()), chatMessageDto);
    }

    @GetMapping("/api/room/{chatRoomSeq}/message")
    public ResponseEntity<List<ChatMessageDto>> loadMessage(@PathVariable String chatRoomSeq) {
        return ResponseEntity.ok(chatService.loadMessage(chatRoomSeq));
    }
}
