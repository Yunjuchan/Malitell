package com.ssafy.malitell.dto.request.board.community;

import com.ssafy.malitell.domain.tag.WorryTag;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommunityUpdateRequestDto {
    // 제목
    private String title;

    // 내용
    private String content;

    // 태그
    private int worryTagSeq;
}