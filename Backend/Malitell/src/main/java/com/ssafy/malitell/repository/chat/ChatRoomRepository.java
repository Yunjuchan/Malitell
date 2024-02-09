package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatRoomRepository {
    private final EntityManager entityManager;

    private final RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, ChatRoom> opsHashChatRoom;
    private static final String CHAT_ROOMS = "CHAT_ROOM";

    @Transactional
    public void save(ChatRoom chatRoom) {
        entityManager.persist(chatRoom);
    }

    // 최근 순으로 목록 조회
    public List<ChatRoom> findAllRoomByLastSpentTimeDesc() {
        return entityManager.createQuery("SELECT cr FROM ChatRoom cr ORDER BY lastSpentTime DESC", ChatRoom.class)
                .getResultList();
    }

    public ChatRoom findRoomByChatRoomSeq(String chatRoomSeq) {
        return entityManager.find(ChatRoom.class, chatRoomSeq);
    }

    public ChatRoom findRoomCounselorAndClient(int counselorSeq, int clientSeq) {
        return entityManager.createQuery("SELECT cr FROM ChatRoom cr WHERE cr.counselor.userSeq = :counselorSeq AND cr.client.userSeq = :clientSeq", ChatRoom.class)
                .setParameter("counselorSeq", counselorSeq)
                .setParameter("clientSeq", clientSeq)
                .getSingleResult();
    }

    public ChatRoom createChatRoom(User counselor, User client) {
        return ChatRoom.create(counselor, client);
    }

    public List<ChatMessageResponseDto> findAllMessageByChatRoomSeq(String chatRoomSeq) {
        List<ChatMessage> chatMessages = entityManager.createQuery("SELECT cm FROM ChatMessage cm WHERE cm.chatRoom.chatRoomSeq = :chatRoomSeq", ChatMessage.class)
                .setParameter("chatRoomSeq", chatRoomSeq)
                .getResultList();

        List<ChatMessageResponseDto> chatMessageResponseDtos = new ArrayList<>();

        for (ChatMessage chatMessage : chatMessages) {
            chatMessageResponseDtos.add(new ChatMessageResponseDto(chatMessage));
        }
        return chatMessageResponseDtos;
    }

//    @PostConstruct
//    private void init() {
//        opsHashChatRoom = redisTemplate.opsForHash();
//    }
//
//    public List<ChatRoom> findAllRoom() {
//        return opsHashChatRoom.values(CHAT_ROOMS);
//    }
//
//    public ChatRoom findRoomById(String id) {
//        return opsHashChatRoom.get(CHAT_ROOMS, id);
//    }
//
//    /**
//     * 채팅방 생성 : 서버간 채팅방 공유를 위해 redis hash에 저장한다.
//     */
//    public ChatRoom createChatRoom(User counselor, User client) {
//        ChatRoom chatRoom = ChatRoom.create(counselor, client);
//        opsHashChatRoom.put(CHAT_ROOMS, chatRoom.getChatRoomSeq(), chatRoom);
//        return chatRoom;
//    }
}
