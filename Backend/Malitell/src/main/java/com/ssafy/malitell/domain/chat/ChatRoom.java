package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoom implements Serializable {
    private static final long serialVersionUID = 6494678977089006639L;
    @Id
    private String chatRoomSeq;
    @ManyToOne(fetch = FetchType.LAZY)
    private User counselor;
    @ManyToOne(fetch = FetchType.LAZY)


    private User client;
    private Timestamp lastSpentTime;

    public static ChatRoom create(User counselor, User client) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.chatRoomSeq = UUID.randomUUID().toString();
        chatRoom.client = client;
        chatRoom.counselor = counselor;
        return chatRoom;
    }

    @Override
    public String toString() {
        return "ChatRoom{" +
                "chatRoomSeq='" + chatRoomSeq + '\'' +
                ", counselor=" + counselor +
                ", client=" + client +
                ", lastSpentTime=" + lastSpentTime +
                '}';
    }
}
