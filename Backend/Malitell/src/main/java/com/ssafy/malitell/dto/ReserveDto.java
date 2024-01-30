package com.ssafy.malitell.dto;

import lombok.Getter;

@Getter
public class ReserveDto {
    private int counselorSeq; // 상담자 식별키
    private int clientSeq; // 내담자 식별키
    private String counselingDate; // 상담날짜
    private String counselingTime; // 상담시간
}
