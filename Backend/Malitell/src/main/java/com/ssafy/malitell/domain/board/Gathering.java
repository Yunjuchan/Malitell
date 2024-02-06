package com.ssafy.malitell.domain.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.board.gathering.GatheringUpdateRequestDto;
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
public class Gathering {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gatheringSeq;

    // 어떤 자조모임 모집 게시글인지
    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JoinColumn(name = "selfHelpGroup_seq")
    private SelfHelpGroup selfHelpGroup;

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

    public Gathering(SelfHelpGroup selfHelpGroup, User user, String title, String content) {
        this.selfHelpGroup = selfHelpGroup;
        this.user = user;
        this.title = title;
        this.content = content;
        this.hit = 0;
        this.time = new Timestamp(System.currentTimeMillis());
    }

    public void update(GatheringUpdateRequestDto requestDto) {
        this.title = requestDto.getTitle();
        this.content = requestDto.getContent();
    }

    public void hitCountUp() {
        this.hit += 1;
    }
}
