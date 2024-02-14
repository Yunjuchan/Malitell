package com.ssafy.malitell.dto.response.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
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
    private String counselorName;
    private String clientName;
    private String counselorProfileImg;
    private String clientProfileImg;

    public ChatRoomResponseDto(ChatRoomDto chatRoomDto, User counselor, User client) {
        this.chatRoomSeq = chatRoomDto.getChatRoomSeq();
        this.counselorSeq = chatRoomDto.getCounselorSeq();
        this.clientSeq = chatRoomDto.getClientSeq();
        this.counselorName = counselor.getName();
        this.clientName = client.getName();
        this.counselorProfileImg = counselor.getProfileImg();
        this.clientProfileImg = client.getProfileImg();
    }

    public ChatRoomResponseDto(ChatRoom chatRoom, User counselor, User client) {
        this.chatRoomSeq = chatRoom.getChatRoomSeq();
        this.counselorSeq = chatRoom.getCounselor().getUserSeq();
        this.clientSeq = chatRoom.getClient().getUserSeq();
        this.counselorName = counselor.getName();
        this.clientName = client.getName();
        this.counselorProfileImg = counselor.getProfileImg();
        this.clientProfileImg = client.getProfileImg();
    }

    public ChatRoomResponseDto(String chatRoomSeq) {
        this.chatRoomSeq = chatRoomSeq;
    }
}
