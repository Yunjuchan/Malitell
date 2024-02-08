package com.ssafy.malitell.dto.response.counseling;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CounselorReviewResponseDto {

    private String counselorName; // 상담자 이름
    private String content; // 상담후기 내용
    private double grade; // 평점

}
