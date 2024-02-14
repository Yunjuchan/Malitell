package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.MessageRequestDto;
import com.ssafy.malitell.service.UserService;
import com.ssafy.malitell.service.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    private final RedisTemplate redisTemplate;

    private final UserService userService;

    private final ChannelTopic channelTopic;

    @MessageMapping("/chat/message")
    public void message(@RequestBody MessageRequestDto requestDto) {
        ChatRoom chatRoom = chatService.findRoom(requestDto.getChatRoomSeq());
        User user = userService.findByUserSeq(requestDto.getUserSeq());
        LocalDateTime sendTime = LocalDateTime.now();

        ChatMessage chatMessage = new ChatMessage(requestDto, sendTime, chatRoom, user);
        redisTemplate.convertAndSend(channelTopic.getTopic(), chatMessage);
    }
}
