package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatRoomRepository {
    private static final String CHAT_ROOMS = "CHAT_ROOM";
    private final RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, ChatRoom> opsHashChatRoom;

    @PostConstruct
    private void init() {
        opsHashChatRoom = redisTemplate.opsForHash();
    }

    public List<ChatRoom> findAllRoom() {
        return opsHashChatRoom.values(CHAT_ROOMS);
    }

    public ChatRoom findRoomById(String chatRoomSeq) {
        return opsHashChatRoom.get(CHAT_ROOMS, chatRoomSeq);
    }

    public ChatRoom createChatRoom(User counselor, User client) {
        ChatRoom chatRoom = ChatRoom.create(counselor, client);
        opsHashChatRoom.put(CHAT_ROOMS, chatRoom.getChatRoomSeq(), chatRoom);
        return chatRoom;
    }
}