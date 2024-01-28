package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.chat.CounselingChatMessage;
import com.ssafy.malitell.domain.chat.CounselingChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CounselingChatRoomRepository extends JpaRepository<CounselingChatRoom, String> {

//    CounselingChatRoom createChatRoom();
//    CounselingChatRoom saveCounselingChatRoom();

}
