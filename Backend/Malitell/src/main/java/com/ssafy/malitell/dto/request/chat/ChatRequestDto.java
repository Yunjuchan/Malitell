package com.ssafy.malitell.dto.request.chat;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.stereotype.Repository;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ChatRequestDto {
    @NotNull
    private int counselorSeq;

    @NotNull
    private int clientSeq;
}
