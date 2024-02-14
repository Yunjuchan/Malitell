package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatMessageMongoRepository extends MongoRepository<ChatMessage, Long> {
    List<ChatMessage> findTop100ByChatRoomChatRoomSeqOrderBySendTimeAsc(String roomId);

    ChatMessage findTopByRoomIdOrderBySendTimeDesc(String roomId);
}