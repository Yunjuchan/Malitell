package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.chatMessage.ChatMessage;
import org.springframework.data.repository.CrudRepository;

public interface RedisRepository extends CrudRepository<ChatMessage, Long> {
}
