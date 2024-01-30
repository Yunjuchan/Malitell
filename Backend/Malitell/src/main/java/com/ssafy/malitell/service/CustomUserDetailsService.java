package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.dto.CustomUserDetails;
import com.ssafy.malitell.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        User user = userRepository.findByUserId(userId);

        // 로그인한 사용자 검증
        if(user != null) {
            System.out.println("회원가입 되어있는 유저임");

            CustomUserDetails customUser = new CustomUserDetails(user);
            // System.out.println(customUser);
            return customUser;
        }
        return null;
    }
}
