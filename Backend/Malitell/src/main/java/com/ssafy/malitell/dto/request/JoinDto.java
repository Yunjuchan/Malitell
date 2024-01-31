package com.ssafy.malitell.dto.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class JoinDto {
    private String userId; // 아이디
    private String name; // 이름
    private String nickname; // 닉네임
    private String password; // 비밀번호
    private String email; // 이메일
    private String phone; // 핸드폰 번호
    private String birth; // 생년월일
    private String gender; // 성별
    private String role; // 권한 (counselor, client, admin)

    public JoinDto(String userId, String name, String nickname, String password, String email, String phone, String birth, String gender, String role) {
        this.userId = userId;
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.gender = gender;
        this.role = role;
    }
}
