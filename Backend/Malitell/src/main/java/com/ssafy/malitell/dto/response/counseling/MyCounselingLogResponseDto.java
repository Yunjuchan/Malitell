package com.ssafy.malitell.dto.response.counseling;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MyCounselingLogResponseDto {

    // 나의 상담일지 목록
    private List<?> myCounselingLogList;

    // 상담자명 목록
    private List<String> counselorList;

}
