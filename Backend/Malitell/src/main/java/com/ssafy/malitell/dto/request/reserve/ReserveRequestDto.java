package com.ssafy.malitell.dto.request.reserve;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
public class ReserveRequestDto {
    private Timestamp counselingDate; // 상담날짜+시간
}
