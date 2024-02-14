package com.ssafy.malitell.domain.chat;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoom implements Serializable {
    private static final long serialVersionUID = 6494678977089006639L;
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
