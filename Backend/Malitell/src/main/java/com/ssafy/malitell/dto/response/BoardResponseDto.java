package com.ssafy.malitell.dto.response;

import com.ssafy.malitell.domain.board.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
public class BoardResponseDto {

    private String title;
    private String name;
    private String content;
    private int hit;
    private Timestamp time;

    public BoardResponseDto(Board board) {
        this.title = board.getTitle();
        this.name = board.getUser().getName();
        this.content = board.getContent();
        this.hit = board.getHit();
        this.time = board.getTime();
    }
}
