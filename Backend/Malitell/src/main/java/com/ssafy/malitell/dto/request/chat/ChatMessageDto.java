package com.ssafy.malitell.dto.request.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.repository.chat.ChatMessageRepository;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ChatMessageDto {
    private String chatRoomSeq;
    private int userSeq;
    private String content;
    private LocalDateTime sendTime;
//    @ColumnDefault("false")
//    private boolean isRead;
    @ColumnDefault("true")
    private boolean read;

    public ChatMessageDto(ChatMessage chatMessage) {
        this.chatRoomSeq = chatMessage.getChatRoomSeq();
        this.userSeq = chatMessage.getUserSeq();
        this.content = chatMessage.getContent();
        this.sendTime = chatMessage.getSendTime();
        this.read = chatMessage.isRead();
    }

    @Override
    public String toString() {
        return "ChatMessageDto{" +
                "chatRoomSeq='" + chatRoomSeq + '\'' +
                ", userSeq=" + userSeq +
                ", content='" + content + '\'' +
                ", sendTime=" + sendTime +
                ", read=" + read +
                '}';
    }
}
