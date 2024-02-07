package com.ssafy.malitell.dto.response.user;

import com.ssafy.malitell.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CounselorResponseDto {
    private String userId;
    private String name;
    private String email;
    private String phone;
    private String birth;
    private String gender;
    private String profileImg;
    private String professionalField;
    private int careerPeriod;
    private String comment;

    public CounselorResponseDto(User user) {
        this.userId = user.getUserId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.birth = user.getBirth();
        this.gender = user.getGender();
        this.profileImg = user.getProfileImg();
        this.professionalField = user.getProfessionalField();
        this.careerPeriod = user.getCareerPeriod();
        this.comment = user.getComment();
    }
}
