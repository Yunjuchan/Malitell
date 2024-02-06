package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.auth.PasswordRequestDto;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.dto.request.user.ClientUpdateRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorJoinRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorUpdateRequestDto;
import com.ssafy.malitell.jwt.JWTUtil;
import com.ssafy.malitell.repository.user.UserRepository;
import com.ssafy.malitell.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final JWTUtil jwtUtil;

    public UserController(UserService userService, UserRepository userRepository, JWTUtil jwtUtil) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    // 상담자 회원가입
    @PostMapping("/user/join/counselor")
    public ResponseEntity<?> joinCounselor(@RequestBody CounselorJoinRequestDto counselorJoinRequestDto) {
        userService.joinCounselor(counselorJoinRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 내담자 회원가입
    @PostMapping("/user/join/client")
    public ResponseEntity<?> joinClient(@RequestBody ClientJoinRequestDto clientJoinRequestDto) {
        userService.joinClient(clientJoinRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 아이디 중복 검증
    @GetMapping("/user/exists/{userId}")
    public ResponseEntity<Boolean> checkIdDuplicate(@PathVariable String userId) {
        return new ResponseEntity<>(userService.checkIdDuplicate(userId), HttpStatus.OK);
    }

    // token 검증
    @PostMapping("/user/reissue")
    public String token(String refreshToken) throws Exception {

        refreshToken = refreshToken.split(" ")[1];

        //만료된 refresh token 에러
        if (jwtUtil.isExpired(refreshToken)) {
            throw new Exception("refreshToken 만료 // 로그인 다시 ");
        }

        // AccessToken에서 Username 가져오기
        String userId = jwtUtil.getUserId(refreshToken);

        // user pk로 유저 검색 / repository에 저장된 refreshToken이 없음
        User findUser = userRepository.findByUserId(userId);
        if (findUser == null) {
            throw new Exception("유저가 없음 // 다시 로그인");
        }
        String refreshTokenByUserId = userRepository.getRefreshTokenByUserId(userId);
        if (refreshTokenByUserId == null) {
            throw new Exception("리프레쉬 토큰이 없음 // 다시 로그인");
        }

        // refreshToken 불일치 에러
        if (!refreshTokenByUserId.equals(refreshToken)) {
            throw new Exception("리프레쉬 토큰이 다름 // 다시 로그인");
        }

        //AccessToken, RefreshToken 토큰 재발급, 리프레쉬 토큰 저장
        String role = jwtUtil.getRole(refreshToken);
        return jwtUtil.createAccessToken(userId, role);
    }

    // 회원 정보 조회
    @GetMapping("/mypage/user")
    public ResponseEntity<?> userInfo(Principal principal) {
        String userId = principal.getName();
        User user = userService.findUser(userId);

        if (user.getRole().equals("ROLE_CLIENT")) {
            return new ResponseEntity<>(userService.findClientInfo(principal), HttpStatus.OK);
        } else if (user.getRole().equals("ROLE_COUNSELOR")) {
            return new ResponseEntity<>(userService.findCounselorInfo(principal), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // 관리자나 비회원일 경우
        }
    }

    // 내담자 정보 수정
    @PutMapping("/mypage/user/client")
    public ResponseEntity<?> updateClientInfo(Principal principal, ClientUpdateRequestDto clientUpdateRequestDto) {
        String userId = principal.getName();
        if (userService.findUser(userId).getRole().equals("ROLE_CLIENT")) {
            userService.updateClientInfo(userId, clientUpdateRequestDto);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // CLIENT가 아닐 경우
        }
    }

    // 상담자 정보 수정
    @PutMapping("/mypage/user/counselor")
    public ResponseEntity<?> updateCounselorInfo(Principal principal, CounselorUpdateRequestDto counselorRequestDto) {
        String userId = principal.getName();
        if (userService.findUser(userId).getRole().equals("ROLE_COUNSELOR")) {
            userService.updateCounselorInfo(userId, counselorRequestDto);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // COUNSELOR가 아닐 경우
        }
    }

    // 회원 탈퇴
    @DeleteMapping("/mypage/user")
    public ResponseEntity<?> deleteUser(Principal principal) {
        userService.deleteUser(principal.getName());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 회원 비밀번호 변경
    @PutMapping("/mypage/user/updatePassword")
    public ResponseEntity<?> updatePassword(Principal principal, @RequestBody PasswordRequestDto passwordRequestDto) {
        String userId = principal.getName();
        userService.updatePassword(userId, passwordRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 유저 쪽지 기능
    @GetMapping("/getMemo")
    public ResponseEntity<?> getMemo(Principal principal) {
        String name = principal.getName();
        String message = userService.readMemo(name);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
