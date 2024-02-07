package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.chat.ChatRequestDto;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import com.ssafy.malitell.dto.response.chat.ChatRoomResponseDto;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;

    // 채팅방 생성
    @PostMapping("/room")
    public ChatRoomResponseDto createRoom(@RequestBody ChatRequestDto chatRequestDto) throws Exception {
        return chatService.createChatRoom(chatRequestDto);
    }

    // 채팅방 목록 - 최근순
    @GetMapping("/rooms")
    public List<ChatRoom> rooms() {
        return chatService.chatRoomList();
    }

    // 채팅방 메세지 조회
    @GetMapping("/room/{chatRoomSeq}")
    public List<ChatMessageResponseDto> roomInfo(@PathVariable String chatRoomSeq) {
        return chatService.chatMessageList(chatRoomSeq);
    }
}
