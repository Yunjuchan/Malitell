package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ChatMessageController {
    private final SimpMessageSendingOperations sendingOperations;

    @MessageMapping("/chat/message")
    public String enter(ChatMessage chatMessage) {
        return "success";
    }
}
