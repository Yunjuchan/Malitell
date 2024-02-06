package com.ssafy.malitell.dto.response.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.OverComing;

import java.sql.Timestamp;

public class CommunityResponseDto {

    private final String title;
    private final String content;
    private final String name;
    private final int hit;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private final Timestamp time;

    public CommunityResponseDto(Community community) {
        this.title = community.getTitle();
        this.content = community.getContent();
        this.name = community.getUser().getName();
        this.hit = community.getHit();
        this.time = community.getTime();
    }

}
