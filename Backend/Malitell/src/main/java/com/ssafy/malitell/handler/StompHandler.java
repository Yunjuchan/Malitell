package com.ssafy.malitell.handler;

// import ... 생략

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.jwt.JWTUtil;
import com.ssafy.malitell.repository.chat.ChatRoomRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import com.ssafy.malitell.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class StompHandler implements ChannelInterceptor {

    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;

    // websocket을 통해 들어온 요청이 처리 되기전 실행된다.
    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        // websocket 연결시 헤더의 jwt token 검증
        if (StompCommand.CONNECT == accessor.getCommand()) { // websocket 연결 요청
            String jwtToken = accessor.getFirstNativeHeader("Access_Token");
            log.info("CONNECT {}", jwtToken);

            if (StringUtils.hasText(jwtToken) && jwtToken.startsWith("Bearer")) {
                jwtToken = jwtToken.substring(6, jwtToken.length());
            }
        }
        return message;
    }

    @Override
    public void postSend(Message message, MessageChannel channel, boolean sent) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        String sessionId = accessor.getSessionId();
        switch (accessor.getCommand()) {
            case CONNECT:
                // 유저가 Websocket으로 connect()를 한 뒤 호출됨
                break;
            case DISCONNECT:
                log.info("DISCONNECT");
                log.info("sessionId: {}",sessionId);
                log.info("channel:{}",channel);
                // 유저가 Websocket으로 disconnect() 를 한 뒤 호출됨 or 세션이 끊어졌을 때 발생함(페이지 이동~ 브라우저 닫기 등)
                break;
            default:
                break;
        }

    }
}