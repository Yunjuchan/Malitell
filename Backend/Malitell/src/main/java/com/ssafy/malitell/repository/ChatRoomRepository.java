package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ChatRoomRepository {
    @Autowired
    EntityManager entityManager;

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
}
