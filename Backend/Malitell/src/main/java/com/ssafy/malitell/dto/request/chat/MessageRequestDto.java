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
public class MessageRequestDto {
    @NotNull
    private Long chatMessageSeq;
    @NotNull
    private ChatRoom chatRoom;
    private User user;
    private String content;
    private LocalTime sendTime;
    private boolean isRead;
}
