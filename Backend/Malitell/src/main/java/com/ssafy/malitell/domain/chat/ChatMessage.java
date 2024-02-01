package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalTime;

@Entity
@Getter
//@RedisHash(value = "chat_message")
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatMessageSeq;
    private int chatRoomSeq;
    @ManyToOne
    private User user;
    private String messageContent;
    private LocalTime spentTime;
    private boolean isRead;
}
