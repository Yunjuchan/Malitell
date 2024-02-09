package com.ssafy.malitell.dto.response.reserve;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingReview;
import com.ssafy.malitell.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
public class CounselorResponseDto {

    private int counselorSeq; // 상담자 식별키
    private String name; // 이름
    private String email; // 이메일
    private String phone; // 핸드폰 번호
    private int age; // 나이
    private String gender; // 성별
    private String profileImg; // 프로필 이미지
    private String professionalField; // 전문 분야
    private int careerPeriod; // 경력
    private double grade; // 평점
    private String comment; // 상담가 소개 멘트
    private List<CounselingReview> counselingReviewList; // 상담후기 목록

    public CounselorResponseDto(int seq, String name, String email, int age, String gender, String profileImg, String professionalField, int careerPeriod, double grade) {
        this.counselorSeq = seq;
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.profileImg = profileImg;
        this.professionalField = professionalField;
        this.careerPeriod = careerPeriod;
        this.grade = grade;
    }

    public CounselorResponseDto(User user) {
        this.counselorSeq = user.getUserSeq();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
        this.age = Integer.parseInt(sdf.format(date)) - Integer.parseInt(user.getBirth().substring(0, 4));

        this.gender = user.getGender();
        this.profileImg = user.getProfileImg();
        this.professionalField = user.getProfessionalField();
        this.careerPeriod = user.getCareerPeriod();
        this.grade = user.getGrade();
        this.comment = user.getComment();
    }

}
