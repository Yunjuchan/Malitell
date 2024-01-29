package com.ssafy.malitell.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChatRequestDto {
    @NotNull
    private int counselorSeq;

    @NotNull
    private int clientSeq;
}
