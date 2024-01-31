package com.ssafy.malitell.dto.response.user;

import com.ssafy.malitell.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 아이디, 이름, 닉네임, 이메일, 휴대번호, 나이 표시
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClientResponseDto {
    private String userId;
    private String name;
    private String nickname;
    private String email;
    private String phone;
    private String birth;

    public ClientResponseDto(User user) {
        this.userId = user.getUserId();
        this.name = user.getName();
        this.nickname = user.getNickname();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.birth = user.getBirth();
    }
}
