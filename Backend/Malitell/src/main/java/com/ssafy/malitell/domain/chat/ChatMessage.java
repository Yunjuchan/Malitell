package com.ssafy.malitell.domain.chat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.MessageRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.cglib.core.Local;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document("chatMessage")
@Entity
@Getter
//@RedisHash(value = "chat_message")
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatMessageSeq;
    @ManyToOne(fetch = FetchType.LAZY)
    private ChatRoom chatRoom;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
    private String content;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime sendTime;
    @ColumnDefault("false")
    private boolean isRead;

    public void updateIsReadTrue() {
        this.isRead = true;
    }

    public ChatMessage(MessageRequestDto messageRequestDto, LocalDateTime sendTime, ChatRoom chatRoom, User user) {
        this.chatRoom = chatRoom;
        this.user = user;
        this.content = messageRequestDto.getContent();
        this.sendTime = sendTime;
    }
}
