package com.ssafy.malitell.dto.request.user;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CounselorUpdateRequestDto {
    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String phone;
    @NotNull
    private String profileImg;
    @NotNull
    private String professionalField;
    @NotNull
    private int careerPeriod;
}
