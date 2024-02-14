package com.ssafy.malitell.domain.chat;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.ChatMessageDto;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Document("chatMessage")
@Getter
@RedisHash(value = "chat_message")
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatMessageSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @Indexed
    private ChatRoom chatRoom;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    private String content;

    @JsonSerialize(using= LocalDateTimeSerializer.class)
    @JsonDeserialize(using= LocalDateTimeDeserializer.class)
    private LocalDateTime sendTime;

    @ColumnDefault("false")
    private boolean isRead;

    public ChatMessage(ChatMessageDto chatMessageDto, LocalDateTime sendTime, ChatRoom chatRoom, User user) {
        this.chatRoom = chatRoom;
        this.user = user;
        this.content = chatMessageDto.getContent();
        this.sendTime = sendTime;
    }
}
