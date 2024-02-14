package com.ssafy.malitell.dto.response.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.chat.ChatRoomDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@Getter
@AllArgsConstructor
public class ChatRoomResponseDto {
    private String chatRoomSeq;
    private int counselorSeq;
    private int clientSeq;

    public ChatRoomResponseDto(ChatRoomDto chatRoomDto) {
        this.chatRoomSeq = chatRoomDto.getChatRoomSeq();
        this.counselorSeq = chatRoomDto.getCounselorSeq();
        this.clientSeq = chatRoomDto.getClientSeq();
    }

    public ChatRoomResponseDto(ChatRoom chatRoom) {
        this.chatRoomSeq = chatRoom.getChatRoomSeq();
        this.counselorSeq = chatRoom.getCounselor().getUserSeq();
        this.clientSeq = chatRoom.getClient().getUserSeq();
    }

    public ChatRoomResponseDto(String chatRoomSeq) {
        this.chatRoomSeq = chatRoomSeq;
    }
}
