package com.ssafy.malitell.domain.counseling;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class CounselingLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingLogSeq;

//    @JoinColumn(name = "counselingSeq")
    private int counselingSeq;

    private String content;

    @Override
    public String toString() {
        return "CounselingLog{" +
                "counselingLogSeq=" + counselingLogSeq +
                ", counselingSeq=" + counselingSeq +
                ", content=" + content + '\'' +
                '}';
    }
}
