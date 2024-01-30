package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.ChatRequestDto;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;

    // 채팅방 목록 - 최근순
    @GetMapping("/rooms")
    public List<ChatRoom> rooms() {
        return chatService.chatRoomList();
    }

    // 채팅방 생성
    @PostMapping("/room")
    public ChatRoom createRoom(@RequestBody ChatRequestDto chatRequestDto) {
        return chatService.createChatRoom(chatRequestDto);
    }

    // 특정 채팅방 조회
    @GetMapping("/room/{chatRoomSeq}")
    public ChatRoom roomInfo(@PathVariable String chatRoomSeq) {
        return chatService.findRoom(chatRoomSeq);
    }
}
