package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.chat.CounselingChatMessage;
import org.springframework.data.repository.CrudRepository;

public interface RedisRepository extends CrudRepository<CounselingChatMessage, Long> {
}
