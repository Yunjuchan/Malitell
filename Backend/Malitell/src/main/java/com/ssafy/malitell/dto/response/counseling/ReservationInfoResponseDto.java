package com.ssafy.malitell.dto.response.counseling;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationInfoResponseDto {

    private String counselingDate; // 상담 날짜
    private String counselingSubject; // 상담 주제
    private CounselorResponseDto counselorInfo; // 상담자 정보
    private ClientResponseDto clientInfo; // 내담자 정보
    private List<Counseling> previousCounselingList; // 이전 상담 기록
    private String questionList; // 내담자의 질문 리스트

    public ReservationInfoResponseDto(String counselingDate1, String counselingSubject, CounselorResponseDto counselorResponseDto, List<Counseling> previousCounselingList, String questionList) {
        this.counselingDate = counselingDate1;
        this.counselingSubject = counselingSubject;
        this.counselorInfo = counselorResponseDto;
        this.previousCounselingList = previousCounselingList;
        this.questionList = questionList;
    }

    public ReservationInfoResponseDto(String counselingDate1, String counselingSubject, ClientResponseDto clientResponseDto, List<Counseling> previousCounselingList, String questionList) {
        this.counselingDate = counselingDate1;
        this.counselingSubject = counselingSubject;
        this.clientInfo = clientResponseDto;
        this.previousCounselingList = previousCounselingList;
        this.questionList = questionList;
    }

}
