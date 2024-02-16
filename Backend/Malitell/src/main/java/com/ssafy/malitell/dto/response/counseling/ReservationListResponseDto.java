package com.ssafy.malitell.dto.response.counseling;

import com.ssafy.malitell.domain.counseling.Counseling;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@AllArgsConstructor
public class ReservationListResponseDto {

    private String clientName;
    private String counselorName;
    private String counselingSubject;
    private Timestamp counselingDate;

    public ReservationListResponseDto(Counseling counseling, String clientName, String counselorName) {
        this.clientName = clientName;
        this.counselorName = counselorName;
        this.counselingSubject = counseling.getCounselingSubject();
        this.counselingDate = counseling.getCounselingDate();
    }
}
