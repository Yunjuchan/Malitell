package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.ChatMessageRequestDto;
import com.ssafy.malitell.dto.request.chat.ChatRoomDto;
import com.ssafy.malitell.dto.response.chat.ChatRoomResponseDto;
import com.ssafy.malitell.service.UserService;
import com.ssafy.malitell.service.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;
    private final UserService userService;

    // 채팅방 생성
    @PostMapping("/room")
    public ChatRoomResponseDto createRoom(@RequestBody ChatMessageRequestDto chatMessageRequestDto) throws Exception {
        return chatService.createChatRoom(chatMessageRequestDto);
    }

    // 채팅방 목록
    @GetMapping("/rooms")
    public List<ChatRoomResponseDto> findAllRooms() {
        List<ChatRoomDto> chatRoomList = chatService.findAllRooms();
        List<ChatRoomResponseDto> chatRoomDtos = new ArrayList<>();
        for (ChatRoomDto chatRoomDto : chatRoomList) {
            User counselor = userService.findByUserSeq(chatRoomDto.getCounselorSeq());
            User client = userService.findByUserSeq(chatRoomDto.getClientSeq());
            chatRoomDtos.add(new ChatRoomResponseDto(chatRoomDto, counselor, client));
        }
        return chatRoomDtos;
    }

    // 특정 채팅방 조회
    @GetMapping("/room/{chatRoomSeq}")
    public ResponseEntity<ChatRoomDto> roomInfo(@PathVariable String chatRoomSeq) {
        return ResponseEntity.ok(chatService.findRoom(chatRoomSeq));
    }
}
