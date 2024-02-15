package com.ssafy.malitell.config;

import com.ssafy.malitell.handler.StompHandler;
import com.ssafy.malitell.jwt.JWTFilter;
import com.ssafy.malitell.jwt.JWTUtil;
import com.ssafy.malitell.jwt.LoginFilter;
import com.ssafy.malitell.repository.user.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.io.IOException;
import java.util.List;

@Configurable
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final DefaultOAuth2UserService oAuth2UserService;
    private final AuthenticationConfiguration authenticationConfiguration;
    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;
    private final StompHandler stompHandler;


    // AuthenticationManager 등록
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        // csrf disable
        http.csrf(AbstractHttpConfigurer::disable);

        // Form 로그인 방식 disalbe
        http.formLogin(AbstractHttpConfigurer::disable);

        // http basic 인증 방식 disable
        http.httpBasic(AbstractHttpConfigurer::disable);

        // 경로별 인가 작업
        http.authorizeHttpRequests((auth) -> auth
                .requestMatchers("/api", "/api/user/join/**", "/login", "/api/auth/**", "/api/oauth2/**", "/api/user/reissue", "/api/user/exists/**", "/api/ws-stomp/**", "/api/getCounselorList", "/api/getCounselor/**", "/api/community/getBoardList/**", "/api/community/view/**", "/api/gathering/getBoardList/**", "/api/gathering/view/**", "/api/overComing/getBoardList/**", "/api/overComing/view/**", "/api/capsule/get", "/api/mindLetGo/list", "/api/mindLetGo/topic").permitAll()
                .requestMatchers("/api/reserve/**", "api/mypage/reserve/**", "/api/mypage/cancelReservation/**", "api/mypage/counselingLog/**", "/api/counseling/review/**", "/api/mypage/counselingReviewList/**", "/api/board", "/api/mypage/counselingReviewList/**").hasRole("CLIENT")
                .requestMatchers("api/mypage/reserve/**", "/api/counseling/saveCounselingLog/**", "/api/mypage/counselingLog/**", "api/myReview").hasRole("COUNSELOR")
                .anyRequest().authenticated());

        // OAuth2
        http.oauth2Login(oauth2 -> oauth2.authorizationEndpoint(endpoint -> endpoint.baseUri("/auth/oauth2")).redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*")).userInfoEndpoint(endpoint -> endpoint.userService(oAuth2UserService)));

        // JWT 검증 필터 등록 (LoginFilter 앞에)
        http.addFilterBefore(new JWTFilter(jwtUtil), LoginFilter.class);

        http.exceptionHandling(exceptionHandling -> exceptionHandling.authenticationEntryPoint(new FailedAuthenticationEntryPoint()));

        // 커스텀 필터 등록
        // (생성한 커스텀 필터, 필터를 넣을 위치)
        http.addFilterAt(new LoginFilter(authenticationManager(authenticationConfiguration), jwtUtil, userRepository), UsernamePasswordAuthenticationFilter.class);

        // 세션 설정 (가장 중요!)
        // JWT 방식에서는 세션을 항상 stateless 상태로 유지함
        http.sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    @Bean
    protected CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOriginPattern("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setExposedHeaders(List.of("*"));
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return source;
    }
}

class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        // {"code": "NP", "message" : "No Permission."}
        response.getWriter().write("{\"code\": \"NP\", \"message\" : \"No Permission.\"}");
    }
}
