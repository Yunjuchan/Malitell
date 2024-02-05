package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.auth.PasswordRequestDto;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.dto.request.user.ClientUpdateRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorJoinRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorUpdateRequestDto;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.response.user.CounselorResponseDto;
import com.ssafy.malitell.repository.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void joinClient(ClientJoinRequestDto clientJoinRequestDto) {
        String userId = clientJoinRequestDto.getUserId();

        Boolean isExist = userRepository.existsByUserId(userId);

        if(isExist) {
            return;
        }

        User user = new User();

        user.setUserId(clientJoinRequestDto.getUserId());
        user.setName(clientJoinRequestDto.getName());
        user.setNickname(clientJoinRequestDto.getNickname());
        // 회원가입 시 반드시 패스워드 암호화 처리할 것!
        // 스프링 시큐리티에서 로그인 검증 시 입력된 패스워드를 해시화를 통해 암호화한 후 비교하기 때문!!
        user.setPassword(bCryptPasswordEncoder.encode(clientJoinRequestDto.getPassword()));
        user.setEmail(clientJoinRequestDto.getEmail());
        user.setPhone(clientJoinRequestDto.getPhone());
        user.setBirth(clientJoinRequestDto.getBirth());
        user.setGender(clientJoinRequestDto.getGender());
        user.setRole(clientJoinRequestDto.getRole());

        userRepository.save(user);
    }

    public void joinCounselor(CounselorJoinRequestDto counselorJoinRequestDto) {
        User user = new User();
        user.setUserId(counselorJoinRequestDto.getUserId());
        user.setName(counselorJoinRequestDto.getName());
        user.setNickname(counselorJoinRequestDto.getNickname());
        // 회원가입 시 반드시 패스워드 암호화 처리할 것!
        // 스프링 시큐리티에서 로그인 검증 시 입력된 패스워드를 해시화를 통해 암호화한 후 비교하기 때문!!
        user.setPassword(bCryptPasswordEncoder.encode(counselorJoinRequestDto.getPassword()));
        user.setEmail(counselorJoinRequestDto.getEmail());
        user.setPhone(counselorJoinRequestDto.getPhone());
        user.setBirth(counselorJoinRequestDto.getBirth());
        user.setGender(counselorJoinRequestDto.getGender());
        user.setCareerPeriod(counselorJoinRequestDto.getCareerPeriod());
        user.setRole(counselorJoinRequestDto.getRole());

        userRepository.save(user);
    }

    public ClientResponseDto findClientInfo(Principal principal) {
        return userRepository.findClientByUserId(principal.getName());
    }

    public CounselorResponseDto findCounselorInfo(Principal principal) {
        return userRepository.findCounselorByUserId(principal.getName());
    }

    public User findUser(String userId) {
        return userRepository.findByUserId(userId);
    }

    @Transactional
    public void updateClientInfo(String userId, ClientUpdateRequestDto clientUpdateRequestDto) {
        User user = userRepository.findByUserId(userId);
        user.updateClient(clientUpdateRequestDto);
    }

    @Transactional
    public void updateCounselorInfo(String userId, CounselorUpdateRequestDto counselorRequestDto) {
        User user = userRepository.findByUserId(userId);
        user.updateCounselor(counselorRequestDto);
    }

    @Transactional
    public void deleteUser(String userId) {
        User user = userRepository.findByUserId(userId);
        int userSeq = user.getUserSeq();
        userRepository.deleteById(userSeq);
    }

    public boolean checkIdDuplicate(String userId) {
        return userRepository.findByUserId(userId) != null;
    }

    @Transactional
    public void updatePassword(String userId, PasswordRequestDto passwordRequestDto) {
        User user = userRepository.findByUserId(userId);
        String password = passwordRequestDto.getPassword();
        String encodePassword = passwordEncoder.encode(password);
        user.updatePassword(encodePassword);
    }
}
