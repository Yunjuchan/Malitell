package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.repository.ChatRoomRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoom {
    @Id
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
