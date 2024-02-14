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
    private int clientSeq; // 내담자 식별키
    private int counselorSeq; // 상담자 식별키
    private String content; // 후기 내용
    private int grade; // 평점

    public CounselingReview(int clientSeq, int counselorSeq, String content, int grade) {
        this.clientSeq = clientSeq;
        this.counselorSeq = counselorSeq;
        this.content = content;
        this.grade = grade;
    }

}
