package com.ssafy.malitell.service;


import com.ssafy.malitell.dto.request.auth.*;
import com.ssafy.malitell.dto.response.auth.*;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseEntity<? super IdCheckResponseDto> idCheck(IdCheckRequestDto dto);

    ResponseEntity<? super EmailCertificationResponseDto> emailCertification(EmailCertificationRequestDto dto);

    ResponseEntity<? super CheckCertificationResponseDto> checkCertification(CheckCertificationRequestDto dto);

    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
}
