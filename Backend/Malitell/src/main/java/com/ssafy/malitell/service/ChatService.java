package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.chat.ChatMessage;
import com.ssafy.malitell.domain.chat.ChatRoom;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.chat.ChatRequestDto;
import com.ssafy.malitell.dto.response.chat.ChatMessageResponseDto;
import com.ssafy.malitell.dto.response.chat.ChatRoomResponseDto;
import com.ssafy.malitell.repository.chat.ChatMessageRepositoryImpl;
import com.ssafy.malitell.repository.chat.ChatRoomRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepositoryImpl chatMessageRepositoryImpl;
    private final UserRepository userRepository;
    private final MongoTemplate mongoTemplate;

    public boolean isExists(User counselor, User client) {
        boolean result;

        try {
            result = chatRoomRepository.findRoomCounselorAndClient(counselor.getUserSeq(), client.getUserSeq()) != null;
            return result;
        } catch(Exception e) {
            return false;
        }
//        return chatRoomRepository.findRoomCounselorAndClient(counselor.getUserSeq(), client.getUserSeq()) != null;
    }

    public ChatRoomResponseDto createChatRoom(ChatRequestDto chatRequestDto) throws Exception {
        int counselorSeq = chatRequestDto.getCounselorSeq();
        int clientSeq = chatRequestDto.getClientSeq();

        User counselor = userRepository.findByUserSeq(counselorSeq);
        User client = userRepository.findByUserSeq(clientSeq);


        // counselor나 client가 존재하지 않을 경우
        if (counselor == null || client == null) {
            throw new Exception("counselor 혹은 client가 존재하지 않습니다.");
        }

        // 이미 존재하는 채팅방일 경우 해당 채팅방 return
//        if (isExists(counselor, client)) {
//            return chatRoomRepository.findRoomCounselorAndClient(counselor.getUserSeq(), client.getUserSeq());
//        }

        ChatRoom chatRoom = chatRoomRepository.createChatRoom(counselor, client);
        ChatRoomResponseDto chatRoomResponseDto = new ChatRoomResponseDto(chatRoom);

        chatRoomRepository.save(chatRoom);
        return chatRoomResponseDto;
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

    @Transactional
    public void save(ChatMessage chatMessage) {
        chatMessageRepositoryImpl.save(chatMessage);
    }

    public void falseMessageList(String chatRoomSeq, Principal principal) {
        String loginUserId = principal.getName();
        if (chatMessageRepositoryImpl.findAllByIsReadFalse(chatRoomSeq) != null) {
            for (ChatMessage chatMessage : chatMessageRepositoryImpl.findAllByIsReadFalse(chatRoomSeq)) {
                if (!chatMessage.getUser().getUserId().equals(loginUserId)) {
                    chatMessage.updateIsReadTrue();
                }
            }
        }
    }
}
