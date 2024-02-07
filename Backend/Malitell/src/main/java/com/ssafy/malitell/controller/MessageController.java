package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    private final SimpMessagingTemplate template;

    @MessageMapping("/chat/message")
    public void message(@RequestBody ChatMessage message, Principal principal){
        log.info("message(message = {})", message);
        String chatRoomSeq = message.getChatRoom().getChatRoomSeq();
        chatService.falseMessageList(chatRoomSeq, principal);
        chatService.save(message);
        template.convertAndSend("/chat/room/" + message.getChatRoom().getChatRoomSeq(), message);
    }
}
