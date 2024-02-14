package com.ssafy.malitell.dto.request.counseling;

import lombok.Getter;

@Getter
public class CounselingReviewRequestDto {
    private int counselorSeq; // 상담가seq
    private String content; // 상담후기 내용
    private int grade; // 평점

}
