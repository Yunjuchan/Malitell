package com.ssafy.malitell.domain.board.comment;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.dto.request.board.comment.CommentRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OverComingComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int OverComingCommentSeq;

    private String username;

    // 댓글 작성자
    @ManyToOne(fetch = FetchType.LAZY)
    private OverComing overComing;

    // 댓글 내용
    private String content;

    // 댓글 작성 시간
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp time;

    public OverComingComment(CommentRequestDto commentRequestDto, OverComing overComing) {
        this.username = commentRequestDto.getUsername();
        this.overComing = overComing;
        this.content = commentRequestDto.getContent();
        this.time = new Timestamp(System.currentTimeMillis());
    }

}
