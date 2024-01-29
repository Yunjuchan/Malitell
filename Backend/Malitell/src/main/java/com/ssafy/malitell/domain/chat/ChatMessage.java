package com.ssafy.malitell.domain.chat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalTime;

@Getter
@RedisHash(value = "chat_message")
@AllArgsConstructor
public class ChatMessage {
    @Id
    private Long chatMessageSeq;
    private int chatRoomSeq;
    private int userSeq;
    private String messageContent;
    private LocalTime spentTime;
    private boolean isRead;
}
