package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.MessageRequestDto;
import com.ssafy.malitell.repository.chat.ChatRoomRepository;
import com.ssafy.malitell.service.ChatService;
import com.ssafy.malitell.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

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
    public void message(@RequestBody MessageRequestDto requestDto, Principal principal){

        log.info("message(message = {})", requestDto);
        System.out.println("0");
        System.out.println(requestDto);
        logger.info(requestDto.toString());
        String chatRoomSeq = requestDto.getChatRoomSeq();
        System.out.println("1");
        chatService.falseMessageList(chatRoomSeq, principal);
        System.out.println("2");

        ChatRoom chatRoom = chatService.findRoom(requestDto.getChatRoomSeq());
        User user = userService.findByUserSeq(requestDto.getUserSeq());

        ChatMessage chatMessage = new ChatMessage(requestDto, chatRoom, user);


        chatService.save(chatMessage);
        System.out.println("3");
        template.convertAndSend("/chat/room/" + chatMessage.getChatRoom().getChatRoomSeq(), chatMessage);

//        redisTemplate.convertAndSend(channelTopic.getTopic(), chatMessage);
    }


}
