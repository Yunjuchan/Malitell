package com.ssafy.malitell.service.chat;

import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.ChatRequestDto;
import com.ssafy.malitell.dto.response.chat.ChatRoomResponseDto;
import com.ssafy.malitell.repository.chat.ChatMessageMongoRepository;
import com.ssafy.malitell.repository.chat.ChatRoomRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageMongoRepository chatMessageMongoRepository;
    private final UserRepository userRepository;
    private final MongoTemplate mongoTemplate;

    public ChatRoomResponseDto createChatRoom(ChatRequestDto chatRequestDto) throws Exception {
        int counselorSeq = chatRequestDto.getCounselorSeq();
        int clientSeq = chatRequestDto.getClientSeq();

        User counselor = userRepository.findByUserSeq(counselorSeq);
        User client = userRepository.findByUserSeq(clientSeq);


        // counselor나 client가 존재하지 않을 경우
        if (counselor == null || client == null) {
            throw new Exception("counselor 혹은 client가 존재하지 않습니다.");
        }

        ChatRoom chatRoom = chatRoomRepository.createChatRoom(counselor, client);
        ChatRoomResponseDto chatRoomResponseDto = new ChatRoomResponseDto(chatRoom);

        return chatRoomResponseDto;
    }

    @Transactional(readOnly = true)
    public List<ChatRoom> chatRoomList() {
        return chatRoomRepository.findAllRoom();
    }

    @Transactional(readOnly = true)
    public ChatRoom findRoom(String chatRoomSeq) {
        return chatRoomRepository.findRoomById(chatRoomSeq);
    }
}
