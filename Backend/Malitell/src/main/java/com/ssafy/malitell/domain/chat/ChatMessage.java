package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

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
