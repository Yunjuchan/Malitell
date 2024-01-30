package com.ssafy.malitell.domain;

import com.ssafy.malitell.dto.request.auth.SignUpRequestDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userSeq; // idx
    private String userId; // 아이디
    private String name; // 이름
    private String nickname; // 닉네임
    private String password; // 비밀번호
    private String email; // 이메일
    private String phone; // 핸드폰 번호
    private String birth; // 생년월일
    private String gender; // 성별
    private String role; // 권한 (counselor, client, admin)
    private String refreshToken; // refresh token
    private String profileImg; // 프로필 사진
    private String professionalField; // 전문분야
    private int careerPeriod; // 경력
    private double grade; // 평점
    private String type; // 타입 (kakao, naver)

    public User(SignUpRequestDto dto) {
        this.userId = dto.getId();
        this.password = dto.getPassword();
        this.email = dto.getEmail();
        this.type = "app";
        this.role = "ROLE_CLIENT";
    }

    public User(String userId, String name, String nickname, String email, String phone, String birth, String gender, String role, String type) {
        this.userId = userId;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.gender = gender;
        this.role = role;
        this.type = type;
        this.gender = gender;
    }
}
