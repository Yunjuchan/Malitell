package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.response.auth.*;
import com.ssafy.malitell.dto.request.auth.*;

import com.ssafy.malitell.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/email-certification")
    public ResponseEntity<? super EmailCertificationResponseDto> emailCertification(@RequestBody @Valid EmailCertificationRequestDto requestBody) {
        return authService.emailCertification(requestBody);
    }

    @PostMapping("/check-certification")
    public ResponseEntity<? super CheckCertificationResponseDto> checkCertification(@RequestBody @Valid CheckCertificationRequestDto requestBody) {
        return authService.checkCertification(requestBody);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<? super SignUpResponseDto> signUp(@RequestBody @Valid SignUpRequestDto requestBody) {
        return authService.signUp(requestBody);
    }

    @PostMapping("/find-id")
    public FindIdResponseDto findId(@RequestBody @Valid FindIdRequestDto findIdRequestDto) {
        return authService.findId(findIdRequestDto);
    }
}
