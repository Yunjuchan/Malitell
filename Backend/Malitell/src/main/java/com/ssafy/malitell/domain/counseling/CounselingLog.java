package com.ssafy.malitell.domain.counseling;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CounselingLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingLogSeq;
    private String content;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counseling_seq")
    private Counseling counseling;

    public CounselingLog(String content, Counseling counseling) {
        this.content = content;
        this.counseling = counseling;
    }

    @Override
    public String toString() {
        return "CounselingLog{" +
                "counselingLogSeq=" + counselingLogSeq +
                ", content='" + content + '\'' +
                ", counseling=" + counseling +
                '}';
    }
}
