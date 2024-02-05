package com.ssafy.malitell.dto.response.reserve;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@AllArgsConstructor
public class CounselingLogOrderByDateResponseDto2 {

    private int counselingLogSeq; // 상담일지 식별키
    private String clientName; // 내담자 이름
    private Timestamp counselingDate; // 상담날짜
    private int round; // 회차
    private String content; // 상담일지 내용

}
