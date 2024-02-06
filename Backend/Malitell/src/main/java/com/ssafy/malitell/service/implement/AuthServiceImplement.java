package com.ssafy.malitell.service.implement;


import com.ssafy.malitell.common.CertificationNumber;
import com.ssafy.malitell.domain.auth.emailAuth;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.auth.*;
import com.ssafy.malitell.dto.response.ResponseDto;
import com.ssafy.malitell.dto.response.auth.*;
import com.ssafy.malitell.repository.CertificationRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import com.ssafy.malitell.service.AuthService;
import com.ssafy.malitell.util.EmailUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImplement implements AuthService {

    private final UserRepository userRepository;
    private final CertificationRepository certificationRepository;

    private final EmailUtil emailUtil;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public ResponseEntity<? super IdCheckResponseDto> idCheck(IdCheckRequestDto dto) {
        try {

            String userId = dto.getUserId();
            boolean isExistId = userRepository.existsByUserId(userId);

            if (isExistId) return IdCheckResponseDto.duplicated();


        } catch (Exception exception) {
            log.error(exception.getMessage());
            return ResponseDto.databaseError();
        }

        return IdCheckResponseDto.success();
    }

    @Override
    public ResponseEntity<? super EmailCertificationResponseDto> emailCertification(EmailCertificationRequestDto dto) {
        try {

            String userId = dto.getUserId();
            String email = dto.getEmail();
            boolean isExistId = userRepository.existsByUserId(userId);
            if (isExistId) return EmailCertificationResponseDto.duplicateId();

            String certificationNumber = CertificationNumber.getCertificationNumber();

            boolean isSuccessed = emailUtil.sendCertificationMail(email, certificationNumber);
            if (!isSuccessed) return EmailCertificationResponseDto.mailSendFail();

            emailAuth emailAuth = new emailAuth(userId, email, certificationNumber);
            certificationRepository.save(emailAuth);

        } catch (Exception exception) {
            log.error(exception.getMessage());
            return ResponseDto.databaseError();
        }

        return EmailCertificationResponseDto.success();
    }

    @Override
    public ResponseEntity<? super CheckCertificationResponseDto> checkCertification(CheckCertificationRequestDto dto) {
        try {

            String userId = dto.getUserId();
            String email = dto.getEmail();
            String certificationNumber = dto.getCertificationNumber();

            emailAuth emailAuth = certificationRepository.findByUserId(userId);
            if (emailAuth == null) {
                return CheckCertificationResponseDto.certificationFail();
            }

            boolean isMatched = emailAuth.getEmail().equals(email) && emailAuth.getCertificationNumber().equals(certificationNumber);
            if (!isMatched) return CheckCertificationResponseDto.certificationFail();

        } catch (Exception exception) {
            log.error(exception.getMessage());
            return ResponseDto.databaseError();
        }

        return CheckCertificationResponseDto.success();
    }

    @Override
    public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {
        try {
            String userId = dto.getUserId();
            boolean isExistId = userRepository.existsByUserId(userId);
            if (isExistId) {
                return SignUpResponseDto.duplicated();
            }

            String email = dto.getEmail();
            String certificationNumber = dto.getCertificationNumber();
            emailAuth emailAuth = certificationRepository.findByUserId(userId);
            boolean isMatched = emailAuth.getEmail().equals(email) && emailAuth.getCertificationNumber().equals(certificationNumber);
            if (!isMatched) {
                return SignUpResponseDto.certificationFail();
            }

            String password = dto.getPassword();
            String encodePassword = passwordEncoder.encode(password);
            dto.setPassword(encodePassword);
            User user = new User(dto);
            userRepository.save(user);

            certificationRepository.deleteByUserId(userId);

        } catch (Exception exception) {
            log.error(exception.getMessage());
            return ResponseDto.databaseError();
        }

        return SignUpResponseDto.success();
    }

    @Override
    public FindIdResponseDto findId(FindIdRequestDto findIdRequestDto) {
        String name = findIdRequestDto.getUserId();
        String email = findIdRequestDto.getEmail();
        String userId = userRepository.findIdByNameAndEmail(name, email).getUserId();

        FindIdResponseDto findIdResponseDto = new FindIdResponseDto();
        findIdResponseDto.setUserId(userId);
        return findIdResponseDto;
    }
}
