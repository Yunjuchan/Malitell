package com.ssafy.malitell.dto.response.board.overcoming;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.OverComing;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class OverComingResponseDto {

    private final String title;
    private final String content;
    private final String name;
    private final int hit;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private final Timestamp time;
    private final int userSeq;

    public OverComingResponseDto(OverComing overComing) {
        this.title = overComing.getTitle();
        this.content = overComing.getContent();
        this.name = overComing.getUser().getName();
        this.hit = overComing.getHit();
        this.time = overComing.getTime();
        this.userSeq = overComing.getUser().getUserSeq();
    }

}
