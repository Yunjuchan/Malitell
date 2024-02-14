package com.ssafy.malitell.dto.request.user;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

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
    @NotNull
    private String comment;

    private List<String> statusTags;

    @Override
    public String toString() {
        return "CounselorUpdateRequestDto{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", profileImg='" + profileImg + '\'' +
                ", professionalField='" + professionalField + '\'' +
                ", careerPeriod=" + careerPeriod +
                ", comment='" + comment + '\'' +
                ", statusTags=" + statusTags +
                '}';
    }
}
