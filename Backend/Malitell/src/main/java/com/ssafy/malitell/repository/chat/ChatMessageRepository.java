package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface ChatMessageRepository {

}

//public interface ChatMessageRepository extends MongoRepository<ChatMessage, Long> {
//
//}