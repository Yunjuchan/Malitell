package com.ssafy.malitell.dto.response;

import com.ssafy.malitell.domain.board.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Optional;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class BoardListResponseDto {
    // 제목
    private String title;

    // 작성자 닉네임
    private String username;

    public BoardListResponseDto(Board board) {
        this.title = board.getTitle();
        this.username = board.getUser().getNickname();
    }
}
