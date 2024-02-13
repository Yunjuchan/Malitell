package com.ssafy.malitell.dto.response.user;

import com.ssafy.malitell.domain.user.User;
import lombok.Getter;

@Getter
public class UserResponseDto {
    private final int userSeq; // idx
    private final String userId; // 아이디
    private final String name; // 이름
    private final String nickname; // 닉네임
    private final String password; // 비밀번호
    private final String email; // 이메일
    private final String phone; // 핸드폰 번호
    private final String birth; // 생년월일
    private final String gender; // 성별
    private final String role; // 권한 (counselor, client, admin)
    private final String refreshToken; // refresh token
    private final String profileImg; // 프로필 사진
    private final String professionalField; // 전문분야
    private final int careerPeriod; // 경력
    private final double grade; // 평점
    private final String comment; // 소개 멘트
    private final String type; // 타입 (kakao, naver)

    public UserResponseDto(User user) {
        this.userSeq = user.getUserSeq();
        this.userId = user.getUserId();
        this.name = user.getName();
        this.nickname = user.getNickname();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.birth = user.getBirth();
        this.gender = user.getGender();
        this.role = user.getRole();
        this.refreshToken = user.getRefreshToken();
        this.profileImg = user.getProfileImg();
        this.professionalField = user.getProfessionalField();
        this.careerPeriod = user.getCareerPeriod();
        this.grade = user.getGrade();
        this.comment = user.getComment();
        this.type = user.getType();
    }
}
