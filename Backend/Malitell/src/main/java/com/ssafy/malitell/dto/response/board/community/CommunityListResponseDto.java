package com.ssafy.malitell.dto.response.board.community;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.tag.WorryTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CommunityListResponseDto {
    // 제목
    private String title;

    // 작성자 닉네임
    private String username;
    private int hit;
    private Timestamp time;

    private int boardSeq;

    // 태그
    private WorryTag worryTag;

    public CommunityListResponseDto(Community community) {
        this.title = community.getTitle();
        this.username = community.getUser().getName();
        this.hit = community.getHit();
        this.time = community.getTime();
        this.boardSeq = community.getCommunitySeq();
        this.worryTag = community.getWorryTag();
    }
}

