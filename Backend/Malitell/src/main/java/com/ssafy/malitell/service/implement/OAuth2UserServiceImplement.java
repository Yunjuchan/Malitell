package com.ssafy.malitell.service.implement;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.malitell.domain.CustomOAuth2User;
import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class OAuth2UserServiceImplement extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest request) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(request);
        String oauthClientName = request.getClientRegistration().getClientName();

        try {
            System.out.println(new ObjectMapper().writeValueAsString(oAuth2User.getAttributes()));
        } catch (JsonProcessingException exception) {
            exception.printStackTrace();
        }

        User user = null;
        String userId = null;
        String name = null;
        String email = null;
        String nickname = null;
        String phone = null;
        String birth = null;
        String role = "ROLE_CLIENT";
        String gender = null;
        String type = null;

        if (oauthClientName.equals("kakao")) {
            Map<String, Object> maps = oAuth2User.getAttributes();
            userId = "kakao_" + maps.get("id");

            Map<Object, Object> kakaoAccount = (Map<Object, Object>) maps.get("kakao_account");
            name = kakaoAccount.get("name") + "";
            email = kakaoAccount.get("email") + "";
            phone =  "0" + ((String) kakaoAccount
                    .get("phone_number"))
                    .substring(4, 16)
                    .replace("-", "");

            birth = kakaoAccount.get("birthyear") + "" + kakaoAccount.get("birthday");
            gender = kakaoAccount.get("gender") + "";

            if (gender.equals("female")) gender = "F";
            else gender = "M";

            type = "kakao";
            user = new User(userId, name, nickname, email, phone, birth, gender, role, type);
            System.out.println("kakao 로그인");
        }

        if (oauthClientName.equals("naver")) {
            Map<String, String> responseMap = (Map<String, String>) oAuth2User.getAttributes().get("response");
            userId = "naver_" + responseMap.get("id");
            name = responseMap.get("name");
            email = responseMap.get("email");
            phone = responseMap.get("mobile").replace("-", "");
            gender = responseMap.get("gender");
            birth = responseMap.get("birthyear") + responseMap.get("birthday").substring(0, 2) + responseMap.get("birthday").substring(3, 5);
            type = "naver";
            user = new User(userId, name, nickname, email, phone, birth, gender, role, type);
            System.out.println("naver 로그인");
        }

        assert user != null;
        userRepository.save(user);
        return new CustomOAuth2User(userId);
    }
}
