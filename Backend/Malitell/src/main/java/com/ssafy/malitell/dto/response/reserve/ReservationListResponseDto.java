package com.ssafy.malitell.dto.response.reserve;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@AllArgsConstructor
public class ReservationListResponseDto {

    private Timestamp counselingDate;
    private String name;

}
