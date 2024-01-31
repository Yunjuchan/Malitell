package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.chat.ChatRequestDto;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;
    private final SimpMessageSendingOperations sendingOperations;

//    @MessageMapping("/message")
//    public void enter(ChatMessage chatMessage) {
//        sendingOperations.convertAndSend("/topic/chat/room/"+chatMessage.getChatRoomSeq(),chatMessage);
//    }

    // 채팅방 생성
    @PostMapping("/room")
    public ChatRoom createRoom(@RequestBody ChatRequestDto chatRequestDto) {
        return chatService.createChatRoom(chatRequestDto);
    }

    // 채팅방 목록 - 최근순
    @GetMapping("/rooms")
    public List<ChatRoom> rooms() {
        return chatService.chatRoomList();
    }


    // 특정 채팅방 조회
    @GetMapping("/room/{chatRoomSeq}")
    public ChatRoom roomInfo(@PathVariable String chatRoomSeq) {
        return chatService.findRoom(chatRoomSeq);
    }
}
