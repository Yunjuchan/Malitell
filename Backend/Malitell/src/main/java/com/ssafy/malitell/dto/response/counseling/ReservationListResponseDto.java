package com.ssafy.malitell.dto.response.counseling;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@AllArgsConstructor
public class ReservationListResponseDto {

    private Timestamp counselingDate;
    private String name;

}
