package com.ssafy.malitell.domain;

import com.ssafy.malitell.domain.board.Board;
import com.ssafy.malitell.dto.request.auth.SignUpRequestDto;
import com.ssafy.malitell.dto.request.user.ClientRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorRequestDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userSeq; // idx
    @NotNull
    private String userId; // 아이디
    @NotNull
    private String name; // 이름
    private String nickname; // 닉네임
    private String password; // 비밀번호
    @NotNull
    private String email; // 이메일
    @NotNull
    private String phone; // 핸드폰 번호
    @NotNull
    private String birth; // 생년월일
    @NotNull
    private String gender; // 성별
    @NotNull
    private String role; // 권한 (counselor, client, admin)
    private String refreshToken; // refresh token
    private String profileImg; // 프로필 사진
    private String professionalField; // 전문분야
    private int careerPeriod; // 경력
    private double grade; // 평점
    private String type; // 타입 (kakao, naver)
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    List<Board> boards = new ArrayList<>();

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
        this.role = role;
        this.type = type;
        this.gender = gender;
    }

    public void updateClient(ClientRequestDto clientRequestDto) {
        this.name = clientRequestDto.getName();
        this.email = clientRequestDto.getEmail();
        this.phone = clientRequestDto.getPhone();
    }

    public void updateCounselor(CounselorRequestDto counselorRequestDto) {
        this.name = counselorRequestDto.getName();
        this.email = counselorRequestDto.getEmail();
        this.phone = counselorRequestDto.getPhone();
        this.careerPeriod = counselorRequestDto.getCareerPeriod();
    }
}
