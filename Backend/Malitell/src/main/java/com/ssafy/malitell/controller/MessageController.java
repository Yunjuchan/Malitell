package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    private final SimpMessagingTemplate template;

//    @MessageMapping(value = "/chat/enter")
//    public void enter(ChatMessageCreateDto message){
//        log.info("enter()");
//        message.setMessage(message.getLoginId() + "님이 채팅방에 참여하였습니다.");
//        template.convertAndSend("/sub/chat/room/" + message.getRoomId(), message);
//    }

    @MessageMapping(value = "/chat/message")
    public void message(@RequestBody ChatMessage message){
        log.info("message(message = {})", message);
        chatService.save(message);
        template.convertAndSend("/chat/room/" + message.getChatRoom().getChatRoomSeq(), message);
    }
}