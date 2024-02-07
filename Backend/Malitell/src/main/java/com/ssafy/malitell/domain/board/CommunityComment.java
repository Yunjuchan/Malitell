package com.ssafy.malitell.domain.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.board.CommentRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommunityComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int communityCommentSeq;

    private String username;

    @ManyToOne
    private Community community;

    // 댓글 내용
    private String content;

    // 댓글 작성 시간
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp time;

    public CommunityComment(CommentRequestDto commentRequestDto, Community community) {
        this.username = commentRequestDto.getUsername();
        this.community = community;
        this.content = commentRequestDto.getContent();
        this.time = new Timestamp(System.currentTimeMillis());
    }
}
