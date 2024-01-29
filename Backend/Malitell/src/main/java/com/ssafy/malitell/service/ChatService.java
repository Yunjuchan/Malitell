package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.dto.request.ChatRequestDto;
import com.ssafy.malitell.repository.ChatRoomRepository;
import com.ssafy.malitell.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository userRepository;

    public void createChatRoom(ChatRequestDto chatRequestDto) {
        int counselorSeq = chatRequestDto.getCounselorSeq();
        int clientSeq = chatRequestDto.getClientSeq();

        User counselor = userRepository.findByUserSeq(counselorSeq);
        User client = userRepository.findByUserSeq(clientSeq);

        ChatRoom chatRoom = chatRoomRepository.findRoomCounselorAndClient(counselor, client);

        if (chatRoom == null) {
            chatRoom = chatRoomRepository.createChatRoom(counselor, client);
            chatRoomRepository.save(chatRoom);
        } else {
            return;
        }
    }
}
