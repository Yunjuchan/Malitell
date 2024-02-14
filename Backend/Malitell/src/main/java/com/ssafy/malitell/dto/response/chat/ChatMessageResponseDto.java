package com.ssafy.malitell.dto.response.chat;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.malitell.domain.chat.ChatRoom;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ChatMessageResponseDto {
    private BigInteger chatMessageSeq;
    private String chatRoomSeq;
    private int userSeq;
    private String messageContent;
    private LocalDateTime sendTime;
    private boolean isRead;

    public ChatMessageResponseDto(ChatRoom chatRoom) {
        this.chatRoomSeq = chatRoom.getChatRoomSeq();
        this.userSeq = chatRoom.getClient().getUserSeq();
    }

    public ChatMessageResponseDto(String chatRoomSeq) {
        this.chatRoomSeq = chatRoomSeq;
    }
}
