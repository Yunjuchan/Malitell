package com.ssafy.malitell.dto.request.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CounselorJoinRequestDto {
    private String userId; // 아이디
    private String name; // 이름
    private String nickname; // 닉네임
    private String password; // 비밀번호
    private String email; // 이메일
    private String phone; // 핸드폰 번호
    private String birth; // 생년월일
    private String gender; // 성별
    private int careerPeriod; // 경력
    private String role; // 권한 (counselor, client, admin)
}
