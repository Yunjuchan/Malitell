package com.ssafy.malitell.domain.counseling;

import jakarta.persistence.*;
import lombok.*;

import java.util.Optional;

@Entity
@Getter
@NoArgsConstructor
public class CounselingReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingReviewSeq; // 상담후기 식별키
    private String content; // 후기 내용
    private int grade; // 평점

    @OneToOne
    @JoinColumn(name = "counseling_seq")
    private Counseling counseling;

    public CounselingReview(Counseling counseling, String content, int grade) {
        this.counseling = counseling;
        this.content = content;
        this.grade = grade;
    }

}
