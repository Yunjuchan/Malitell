package com.ssafy.malitell.dto.request.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalTime;

@Getter
@AllArgsConstructor
@NotNull
public class MessageRequestDto {
    private String chatRoomSeq;
    private int userSeq;
    private String content;
}
