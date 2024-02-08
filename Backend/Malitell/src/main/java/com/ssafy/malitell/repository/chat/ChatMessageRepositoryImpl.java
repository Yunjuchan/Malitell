package com.ssafy.malitell.repository.chat;

import com.ssafy.malitell.domain.chat.ChatMessage;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatMessageRepositoryImpl {
    private final EntityManager entityManager;

    public void save(ChatMessage chatMessage) {
        entityManager.persist(chatMessage);
    }

    public List<ChatMessage> findAllByIsReadFalse(String chatRoomSeq) {
        return entityManager.createQuery("SELECT cm FROM ChatMessage cm WHERE chatRoom.chatRoomSeq = :chatRoomSeq and isRead = false", ChatMessage.class)
                .setParameter("chatRoomSeq", chatRoomSeq)
                .getResultList();
    }

}
