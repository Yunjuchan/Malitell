package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String chatRoomSeq;
    @ManyToOne
    private User counselor;
    @ManyToOne
    private User client;
    private Timestamp lastSpentTime;

    public static ChatRoom create(User counselor, User client) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.chatRoomSeq = UUID.randomUUID().toString();
        chatRoom.client = client;
        chatRoom.counselor = counselor;
        return chatRoom;
    }
}
