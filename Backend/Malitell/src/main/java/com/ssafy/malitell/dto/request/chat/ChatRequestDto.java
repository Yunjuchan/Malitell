package com.ssafy.malitell.dto.request.chat;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public class ChatRequestDto {
    @NotNull
    private int counselorSeq;

    @NotNull
    private int clientSeq;
}
