package com.ssafy.malitell.dto.response.board.overcoming;

import com.ssafy.malitell.domain.board.overcoming.OverComing;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;


@NoArgsConstructor
@AllArgsConstructor
@Getter
public class OverComingListResponseDto {
    // 제목
    private String title;

    // 작성자 닉네임
    private String username;
    private int hit;
    private Timestamp time;

    public OverComingListResponseDto(OverComing overComing) {
        this.title = overComing.getTitle();
        this.username = overComing.getName();
        this.hit = overComing.getHit();
        this.time = overComing.getTime();
    }
}
