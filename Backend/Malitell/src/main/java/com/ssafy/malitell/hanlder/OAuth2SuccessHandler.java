//package com.ssafy.malitell.hanlder;
//
//import com.ssafy.malitell.domain.user.CustomOAuth2User;
//import com.ssafy.malitell.jwt.JWTUtil;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//
//@Component
//@RequiredArgsConstructor
//public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
//
//    private final JWTUtil jwtUtil;
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        CustomOAuth2User oauth2User = (CustomOAuth2User) authentication.getPrincipal();
//
//        String userId = oauth2User.getName();
//        String token = jwtUtil.createJWT(userId);
//
//        response.sendRedirect("http://localhost:3000/auth/oauth-response/" + token + "/3600");
//    }
//
//}
