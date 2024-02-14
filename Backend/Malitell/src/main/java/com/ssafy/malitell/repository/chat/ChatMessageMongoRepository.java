package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChatMessageMongoRepository extends MongoRepository<ChatMessage, Long> {
}