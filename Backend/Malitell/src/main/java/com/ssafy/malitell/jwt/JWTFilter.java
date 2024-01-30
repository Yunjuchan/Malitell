package com.ssafy.malitell.jwt;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.dto.CustomUserDetails;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

// JWT 검증 필터 구현
// OncePerRequestFilter : 요청에 대해서 한 번 만 동작하는 필터
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    public JWTFilter(JWTUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        // reqeust에서 Authorization 헤더를 찾음
        String accessToken = request.getHeader("Access_token");

        // accessToken 헤더 검증
        if(accessToken == null || !accessToken.startsWith("Bearer ")) {
            System.out.println("token null");
            filterChain.doFilter(request, response); // authorization 헤더에 토큰이 없으면 다음 필터로 request, response를 넘겨줌

            // 조건이 해당되면 메소드 종료(필수)
            return;
        }

        System.out.println("authorization now");
        // Bearer 부분 제거 후 순수 토큰만 획득
        String token = accessToken.split(" ")[1];
        System.out.println(token);

        // 토큰 소멸 시간 검증
        if(jwtUtil.isExpired(token)) {
            // 토큰 만료 되었으면 401 리턴
            response.setStatus(401);
            filterChain.doFilter(request, response);

            return;
        }

        // 토큰에서 userId와 role 획득
        String userId = jwtUtil.getUserId(token);
        String role = jwtUtil.getRole(token);

        // User 엔터티를 생성하여 값 set
        User user = new User();
        user.setUserId(userId);
//        user.setPassword("temp password");
        user.setRole(role);

        // UserDetails에 회원 정보 객체 담기
        CustomUserDetails customUserDetails = new CustomUserDetails(user);

        // 스프링 시큐리티 인증 토큰 생성
        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities()); // (principal, credentials, authorities)
        // 세션에 사용자 등록 (한번의 요청에 대해 일시적으로 세션 생성)
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);

    }
}
