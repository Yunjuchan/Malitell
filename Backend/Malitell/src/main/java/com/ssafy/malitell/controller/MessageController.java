package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    private final SimpMessagingTemplate template;

    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);


    @MessageMapping("/chat/message")
    public void message(@RequestBody ChatMessage message, Principal principal){

        log.info("message(message = {})", message);
        System.out.println("0");
        System.out.println(message);
        logger.info(message.toString());
        String chatRoomSeq = message.getChatRoom().getChatRoomSeq();
        System.out.println("1");
        chatService.falseMessageList(chatRoomSeq, principal);
        System.out.println("2");
        chatService.save(message);
        System.out.println("3");
        template.convertAndSend("/chat/room/" + message.getChatRoom().getChatRoomSeq(), message);
    }
}
