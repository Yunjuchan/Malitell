package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.dto.request.JoinDto;
import com.ssafy.malitell.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void join(JoinDto joinDTO) {
        String userId = joinDTO.getUserId();
        String name = joinDTO.getName();
        String nickname = joinDTO.getNickname();
        String password = joinDTO.getPassword();
        String email = joinDTO.getEmail();
        String phone = joinDTO.getPhone();
        String birth = joinDTO.getBirth();
        String gender = joinDTO.getGender();
        String role = joinDTO.getRole();

        Boolean isExist = userRepository.existsByUserId(userId);

        if(isExist) {
            return;
        }

        User user = new User();

        user.setUserId(userId);
        user.setName(name);
        user.setNickname(nickname);
        // 회원가입 시 반드시 패스워드 암호화 처리할 것!
        // 스프링 시큐리티에서 로그인 검증 시 입력된 패스워드를 해시화를 통해 암호화한 후 비교하기 때문!!
        user.setPassword(bCryptPasswordEncoder.encode(password));
        user.setEmail(email);
        user.setPhone(phone);
        user.setBirth(birth);
        user.setGender(gender);
        user.setRole(role);
        user.setGender(gender);

        userRepository.save(user);
    }

    public User findUserInfo(Principal principal) {
        String name = principal.getName();
        return userRepository.findByUserId(name);
    }
}
