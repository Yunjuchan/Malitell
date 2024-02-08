package com.ssafy.malitell.dto.response.counseling;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MyCounselingReviewResponseDto {

    // 나의 상담후기 목록
    private List<CounselorReviewResponseDto> myCounselingReviewList;

    // 상담자명 목록
    private List<String> counselorList;

}
