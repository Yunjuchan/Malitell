package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.MessageRequestDto;
import com.ssafy.malitell.repository.chat.ChatRoomRepository;
import com.ssafy.malitell.service.ChatService;
import com.ssafy.malitell.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpRequest;
import java.security.Principal;
import java.time.LocalDateTime;
import java.time.LocalTime;

import org.slf4j.Logger;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    private final SimpMessagingTemplate template;

    private final UserService userService;

    private final RedisTemplate redisTemplate;

    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);


    @MessageMapping("/chat/message")
    public void message(@RequestBody MessageRequestDto requestDto, java.security.Principal principal) {
        ChatRoom chatRoom = chatService.findRoom(requestDto.getChatRoomSeq());
        User user = userService.findByUserSeq(requestDto.getUserSeq());
        LocalDateTime sendTime = LocalDateTime.now();

//        log.info("principal = {}", principal);

        ChatMessage chatMessage = new ChatMessage(requestDto, sendTime, chatRoom, user);
        log.info("charMessage = {}", chatMessage);

        chatService.save(chatMessage);
        template.convertAndSend("/sub/chat/room/" + chatMessage.getChatRoom().getChatRoomSeq(), chatMessage);

//        redisTemplate.convertAndSend(channelTopic.getTopic(), chatMessage);
    }


}
