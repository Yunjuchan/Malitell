package com.ssafy.malitell.dto.response.reserve;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CounselorListResponseDto {

    private String name;
    private String email;
    private int age;
    private String gender;
    private String profileImg;
    private String professionalField;
    private int careerPeriod;
    private double grade;

}
