package com.ssafy.malitell.dto.request.counseling;

import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class ReserveRequestDto {
    private Timestamp counselingDate; // 상담날짜+시간
}
