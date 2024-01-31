package com.ssafy.malitell.dto.request;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
public class ReserveRequestDto {
//    private String counselingDate; // 상담날짜
//    private String counselingTime; // 상담시간

    private Timestamp counselingDate; // 상담날짜+시간
}
