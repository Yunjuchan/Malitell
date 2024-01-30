package com.ssafy.malitell.dto;

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

    @Override
    public String toString() {
        return "JoinDTO{" +
                "userId='" + userId + '\'' +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", birth='" + birth + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
