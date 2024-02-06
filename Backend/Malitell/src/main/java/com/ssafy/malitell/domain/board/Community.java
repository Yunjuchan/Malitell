package com.ssafy.malitell.domain.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.board.CommunityRequestDto;
import com.ssafy.malitell.dto.request.board.CommunityUpdateRequestDto;
import com.ssafy.malitell.dto.request.board.overcoming.OverComingRequestDto;
import com.ssafy.malitell.dto.request.board.overcoming.OverComingUpdateRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Community {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int communitySeq;

    // 작성자
    @ManyToOne
    private User user;

    // 게시물 제목
    private String title;

    // 게시물 내용
    private String content;

    // 게시물 작성 시간
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp time;

    // 게시물 조회수
    private int hit;

    public Community(User user, CommunityRequestDto communityRequestDto) {
        this.user = user;
        this.title = communityRequestDto.getTitle();
        this.content = communityRequestDto.getContent();
        this.hit = 0;
        this.time = new Timestamp(System.currentTimeMillis());
    }

    public void update(CommunityUpdateRequestDto communityUpdateRequestDto) {
        this.title = communityUpdateRequestDto.getTitle();
        this.content = communityUpdateRequestDto.getContent();
    }
}
