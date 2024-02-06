package com.ssafy.malitell.domain.user;

import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroupUser;
import com.ssafy.malitell.domain.tag.StatusTag;
import com.ssafy.malitell.dto.request.auth.SignUpRequestDto;
import com.ssafy.malitell.dto.request.user.ClientUpdateRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorUpdateRequestDto;
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
    private String comment; // 소개 멘트
    private String type; // 타입 (kakao, naver)
//    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
//    List<Board> boards = new ArrayList<>();

    private String alramMessage;
    private int readCheck; // 안 읽었으면 1 , 읽었으면 0

    // 참가하고 있는 자조모임
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<SelfHelpGroupUser> selfHelpGroupUsers = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY)
    private List<StatusTag> statusTags = new ArrayList<>();

    public void addSelfHelpGroupUsers(SelfHelpGroupUser selfHelpGroupUser) {
        selfHelpGroupUsers.add(selfHelpGroupUser);
        selfHelpGroupUser.setUser(this);
    }

    public void removeSelfHelpGroupUsers(SelfHelpGroupUser selfHelpGroupUser) {
        selfHelpGroupUsers.remove(selfHelpGroupUser);
        selfHelpGroupUser.setUser(null);
    }

    public void addTag(List<StatusTag> statusTags) {
        this.statusTags = statusTags;
    }


    public User(SignUpRequestDto dto) {
        this.userId = dto.getUserId();
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

    public void updateClient(ClientUpdateRequestDto clientUpdateRequestDto) {
        this.name = clientUpdateRequestDto.getName();
        this.email = clientUpdateRequestDto.getEmail();
        this.phone = clientUpdateRequestDto.getPhone();
    }

    public void updateCounselor(CounselorUpdateRequestDto counselorUpdateRequestDto) {
        this.name = counselorUpdateRequestDto.getName();
        this.email = counselorUpdateRequestDto.getEmail();
        this.phone = counselorUpdateRequestDto.getPhone();
        this.careerPeriod = counselorUpdateRequestDto.getCareerPeriod();
    }
    public void updatePassword(String password) {
        this.password = password;
    }
}
