package com.ssafy.malitell.dto.response.board.comment;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.comment.CommunityComment;
import com.ssafy.malitell.domain.board.comment.GatheringComment;
import com.ssafy.malitell.domain.board.comment.OverComingComment;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    // 댓글 작성자
    private String username;

    // 댓글 내용
    private String content;

    // 댓글 작성 시간
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp time;

    public CommentResponseDto(CommunityComment community) {
        this.username = community.getUsername();
        this.content = community.getContent();
        this.time = community.getTime();
    }

    public CommentResponseDto(GatheringComment gathering) {
        this.username = gathering.getUsername();
        this.content = gathering.getContent();
        this.time = gathering.getTime();
    }

    public CommentResponseDto(OverComingComment overComing) {
        this.username = overComing.getUsername();
        this.content = overComing.getContent();
        this.time = overComing.getTime();
    }
}
