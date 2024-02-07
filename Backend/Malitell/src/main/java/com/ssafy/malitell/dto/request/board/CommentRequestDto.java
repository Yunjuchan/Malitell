package com.ssafy.malitell.dto.request.board;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentRequestDto {

    private int boardSeq;

    private String username;

    private String content;

    @Override
    public String toString() {
        return "CommentRequestDto{" +
                "boardSeq=" + boardSeq +
                ", username='" + username + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
