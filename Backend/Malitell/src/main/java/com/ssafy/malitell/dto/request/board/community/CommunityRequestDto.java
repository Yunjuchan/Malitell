package com.ssafy.malitell.dto.request.board.community;

import com.ssafy.malitell.domain.tag.WorryTag;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommunityRequestDto {
    // 게시물 제목
    private String title;

    // 게시물 내용
    private String content;

    // 태그
    private int worryTagSeq;
}