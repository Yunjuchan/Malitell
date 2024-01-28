package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.CounselingChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessageSendingOperations messagingTemplate;

    /*
        /pub/chat/message   : 메시지 발행
        /sub
    */

    @MessageMapping("/chat/message")
    public void message(CounselingChatMessage message) {
        messagingTemplate.convertAndSend("/sub/chat/room/" + message.getChatRoomSeq(), message);
    }

}
