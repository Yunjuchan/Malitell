package com.ssafy.malitell.dto.request.chat;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.io.Serial;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ChatRoomDto implements Serializable {
    private static final String serialVersionUID = UUID.randomUUID().toString();
    private String chatRoomSeq;
    private int counselorSeq;
    private int clientSeq;
    private Timestamp lastSpentTime;

    public static ChatRoomDto create(User counselor, User client) {
        ChatRoomDto chatRoomDto = new ChatRoomDto();
        chatRoomDto.chatRoomSeq = serialVersionUID;
        chatRoomDto.counselorSeq = counselor.getUserSeq();
        chatRoomDto.clientSeq = client.getUserSeq();
        return chatRoomDto;
    }

    public ChatRoomDto(ChatRoom chatRoom) {
        this.chatRoomSeq = chatRoom.getChatRoomSeq();
        this.counselorSeq = chatRoom.getCounselor().getUserSeq();
        this.clientSeq = chatRoom.getClient().getUserSeq();
    }
}
