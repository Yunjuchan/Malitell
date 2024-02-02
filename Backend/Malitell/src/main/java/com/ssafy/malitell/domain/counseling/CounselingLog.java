package com.ssafy.malitell.domain.counseling;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class CounselingLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingLogSeq;
    private String content;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counseling_seq")
    private Counseling counseling;

    @Override
    public String toString() {
        return "CounselingLog{" +
                "counselingLogSeq=" + counselingLogSeq +
                ", content='" + content + '\'' +
                ", counseling=" + counseling +
                '}';
    }
}
