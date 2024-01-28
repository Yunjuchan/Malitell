package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.chat.CounselingChatRoom;
import com.ssafy.malitell.service.CounselingChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
public class ChatRoomController {

    private final CounselingChatRoomService counselingChatRoomService;

    // 채팅방 생성
//    @PostMapping("/room")
//    public String createCounselingRoom(int counselingSeq) {
//        counselingChatRoomService.createChatRoom(counselingSeq);
//
//        return "상담방 생성 성공";
//    }

    // 채팅방 입장
    @GetMapping("/room/enter/{counselingChatRoomSeq}")
    public String roomDetail(Model model, @PathVariable int counselingChatRoomSeq) {
        model.addAttribute("couselingChatRoomSeq", counselingChatRoomSeq);
        return "채팅방 입장";
    }
}
