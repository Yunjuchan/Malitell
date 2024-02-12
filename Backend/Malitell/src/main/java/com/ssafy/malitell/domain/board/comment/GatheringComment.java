package com.ssafy.malitell.domain.board.comment;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.Gathering;
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
public class GatheringComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int GatheringCommentSeq;

    private String username;

    // 댓글 작성자
    @ManyToOne(fetch = FetchType.LAZY)
    private Gathering gathering;

    // 댓글 내용
    private String content;

    // 댓글 작성 시간
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp time;

    public GatheringComment(CommentRequestDto commentRequestDto, Gathering gathering) {
        this.username = commentRequestDto.getUsername();
        this.gathering = gathering;
        this.content = commentRequestDto.getContent();
        this.time = new Timestamp(System.currentTimeMillis());
    }

}
