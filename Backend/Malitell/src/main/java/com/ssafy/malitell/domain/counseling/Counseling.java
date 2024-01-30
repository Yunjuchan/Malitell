package com.ssafy.malitell.domain.counseling;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Counseling {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingSeq; // 상담 식별키
    private int counselorSeq; // 회원 식별키 (상담자)
    private int clientSeq; // 회원 식별키 (내담자)
    private String counselingDate; // 상담 날짜
    private int round; // 회차
    private String reservationDate; // 상담 예약일
    private String counselingRoomUrl; // 상담방 url

}
