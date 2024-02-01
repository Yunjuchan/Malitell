package com.ssafy.malitell.dto.response.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalTime;

@AllArgsConstructor
@Getter
public class ChatMessageResponseDto {
    private Long chatMessageSeq;
    private String chatRoomSeq;
    private int userSeq;
    private String messageContent;
    private LocalTime spentTime;
    private boolean isRead;

    public ChatMessageResponseDto(ChatMessage chatMessage) {
        this.chatMessageSeq = chatMessage.getChatMessageSeq();
        this.chatRoomSeq = chatMessage.getChatRoom().getChatRoomSeq();
        this.userSeq = chatMessage.getUser().getUserSeq();
        this.messageContent = chatMessage.getContent();
        this.spentTime = chatMessage.getSendTime();
        this.isRead = chatMessage.isRead();
    }
}
