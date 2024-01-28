package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.chat.CounselingChatRoom;
import com.ssafy.malitell.repository.CounselingChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CounselingChatRoomService {

    private final CounselingChatRoomRepository counselingChatRoomRepository;

    public CounselingChatRoom createChatRoom(int counselingSeq) {
        CounselingChatRoom counselingChatRoom = new CounselingChatRoom();

        counselingChatRoom.setCounselingSeq(counselingSeq);

        return counselingChatRoomRepository.save(counselingChatRoom);
    }
}
