package com.ssafy.malitell.dto.request.board.gathering;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GatheringUpdateRequestDto {

    private String title;

    private String content;

}
