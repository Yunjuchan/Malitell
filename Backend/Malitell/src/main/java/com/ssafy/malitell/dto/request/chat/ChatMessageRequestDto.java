package com.ssafy.malitell.dto.request.chat;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ChatMessageRequestDto {
    private int clientSeq;
    private int counselorSeq;
}
