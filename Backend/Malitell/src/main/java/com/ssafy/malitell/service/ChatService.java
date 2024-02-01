package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.chat.ChatRequestDto;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import com.ssafy.malitell.repository.ChatMessageRepository;
import com.ssafy.malitell.repository.ChatRoomRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;
    private final UserRepository userRepository;

    public ChatRoom createChatRoom(ChatRequestDto chatRequestDto) {
        int counselorSeq = chatRequestDto.getCounselorSeq();
        int clientSeq = chatRequestDto.getClientSeq();

        User counselor = userRepository.findByUserSeq(counselorSeq);
        User client = userRepository.findByUserSeq(clientSeq);

        ChatRoom chatRoom = chatRoomRepository.createChatRoom(counselor, client);

        chatRoomRepository.save(chatRoom);
        return chatRoom;
    }

    public List<ChatRoom> chatRoomList() {
        return chatRoomRepository.findAllRoomByLastSpentTimeDesc();
    }

    public ChatRoom findRoom(String chatRoomSeq) {
        return chatRoomRepository.findRoomByChatRoomSeq(chatRoomSeq);
    }

    public List<ChatMessageResponseDto> chatMessageList(String chatRoomSeq) {
        return chatRoomRepository.findAllMessageByChatRoomSeq(chatRoomSeq);
    }

    public ChatMessage save(ChatMessage chatMessage) {
        return chatMessageRepository.save(chatMessage);
    }
}
