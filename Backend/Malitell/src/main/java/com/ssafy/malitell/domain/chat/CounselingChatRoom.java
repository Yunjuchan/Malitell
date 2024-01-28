package com.ssafy.malitell.domain.chat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class CounselingChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingChatRoomSeq;
    private int counselingSeq;
}
