package com.ssafy.malitell.dto.request.counseling;

import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class ReserveRequestDto {
    private String counselingSubject; // 상담 주제 (ex. 우울, 불안, 공황, 자존감)
    private Timestamp counselingDate; // 상담날짜+시간
    private String questionList; // 질문 목록
}
