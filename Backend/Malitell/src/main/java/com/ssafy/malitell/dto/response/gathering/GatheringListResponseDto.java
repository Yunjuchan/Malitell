package com.ssafy.malitell.dto.response.gathering;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;


@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GatheringListResponseDto {
    // 제목
    private String title;

    // 작성자 닉네임
    private String username;
    private int hit;
    private Timestamp time;

    public GatheringListResponseDto(Gathering gathering) {
        this.title = gathering.getTitle();
        this.username = gathering.getName();
        this.hit = gathering.getHit();
        this.time = gathering.getTime();
    }
}
