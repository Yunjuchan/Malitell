package com.ssafy.malitell.dto.response.board.overcoming;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.overcoming.OverComing;
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

    public OverComingResponseDto(OverComing overComing) {
        this.title = overComing.getTitle();
        this.content = overComing.getContent();
        this.name = overComing.getName();
        this.hit = overComing.getHit();
        this.time = overComing.getTime();
    }

}
