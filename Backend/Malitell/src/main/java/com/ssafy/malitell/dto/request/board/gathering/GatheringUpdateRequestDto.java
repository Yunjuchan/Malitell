package com.ssafy.malitell.dto.request.board.gathering;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GatheringUpdateRequestDto {
    // 제목
    private String title;

    // 내용
    private String content;

    // 태그
    private int worryTagSeq;
}

