package com.ssafy.malitell.domain.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.dto.request.BoardRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Lazy;

import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Board {
    @Id
    @GeneratedValue
    private int boardSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    private String title;
    private String content;

    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss", timezone="Asia/Seoul")
    private Timestamp time;
    private int hit;

    @Convert(converter = BoardTypedConverter.class)
    @Enumerated(value = EnumType.STRING)
    private BoardType type;

    // 게시판 엔티티
    public Board(BoardRequestDto requestDto, BoardType type, User user) {
        this.user = user;
        this.title = requestDto.getTitle();
        this.content = requestDto.getContent();
        this.time = new Timestamp(System.currentTimeMillis());
        this.hit = 0;
        this.type = type;
    }

    public void update(BoardRequestDto requestDto) {
        this.title = requestDto.getTitle();
        this.content = requestDto.getContent();
        this.time = new Timestamp(System.currentTimeMillis());
    }
}
