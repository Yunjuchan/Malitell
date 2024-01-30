package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.User;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalTime;

@Getter
@AllArgsConstructor
public class CounselingChatMessage {
    @Id
    private Long chatMessageSeq;
    private int chatRoomSeq;
    @ManyToOne
    private User user;
    private String messageContent;
    private LocalTime spentTime;
    private boolean isRead;
}
