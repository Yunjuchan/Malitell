package com.ssafy.malitell.dto.response.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@AllArgsConstructor
public class ChatRoomResponseDto implements Serializable {
    private String chatRoomSeq;
    private int counselorSeq;
    private int clientSeq;

    public ChatRoomResponseDto(ChatRoom chatRoom) {
        this.chatRoomSeq = chatRoom.getChatRoomSeq();
        this.counselorSeq = chatRoom.getCounselor().getUserSeq();
        this.clientSeq = chatRoom.getClient().getUserSeq();
    }

    public ChatRoomResponseDto(String chatRoomSeq) {
        this.chatRoomSeq = chatRoomSeq;
    }
}
