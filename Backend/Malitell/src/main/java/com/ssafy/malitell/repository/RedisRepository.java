package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.chat.ChatMessage;
import org.springframework.data.repository.CrudRepository;

public interface RedisRepository extends CrudRepository<ChatMessage, Long> {
}
