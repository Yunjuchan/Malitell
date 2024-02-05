package com.ssafy.malitell.dto.request.scrap;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ScrapRequestDto {
    @NotNull
    private int gatheringSeq;
}
