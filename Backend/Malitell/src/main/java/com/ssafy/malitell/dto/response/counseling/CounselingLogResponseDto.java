package com.ssafy.malitell.dto.response.counseling;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CounselingLogResponseDto {

    private int counselingLogSeq; // 상담일지 식별키
    private int counselingSeq; // 상담 식별키
    private String name; // 상담자/내담자 이름
    private String counselingDate; // 상담날짜
    private int round; // 회차
    private String content; // 상담일지 내용

}
