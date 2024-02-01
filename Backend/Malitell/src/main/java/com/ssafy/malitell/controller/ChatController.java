package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.chat.ChatRequestDto;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;
    private final SimpMessageSendingOperations sendingOperations;

    // 채팅방 생성
    @PostMapping("/chat/room")
    public ChatRoom createRoom(@RequestBody ChatRequestDto chatRequestDto) {
        return chatService.createChatRoom(chatRequestDto);
    }

    // 채팅방 목록 - 최근순
    @GetMapping("/chat/rooms")
    public List<ChatRoom> rooms() {
        return chatService.chatRoomList();
    }

    // 채팅방 메세지 조회
    @GetMapping("/chat/room/{chatRoomSeq}")
    public List<ChatMessageResponseDto> roomInfo(@PathVariable String chatRoomSeq) {
        return chatService.chatMessageList(chatRoomSeq);
    }
}
