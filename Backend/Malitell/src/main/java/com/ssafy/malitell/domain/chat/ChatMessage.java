package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalTime;

@Document("chatMessage")
@Entity
@Getter
//@RedisHash(value = "chat_message")
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    @Override
    public String toString() {
        return "ChatMessage{" +
                "content='" + content + '\'' +
                "roomSeq='" + chatRoom + '\'' +
                '}';
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatMessageSeq;
    @ManyToOne
    private ChatRoom chatRoom;
    @ManyToOne
    private User user;
    private String content;
    private LocalTime sendTime;
    @ColumnDefault("false")
    private boolean isRead;

    public void updateIsReadTrue() {
        this.isRead = true;
    }
}
