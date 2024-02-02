package com.ssafy.malitell.domain.counseling;

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.reserve.ReserveRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Counseling {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counselingSeq; // 상담 식별키
    private int counselorSeq; // 회원 식별키 (상담자)
    private int clientSeq; // 회원 식별키 (내담자)
    private Timestamp counselingDate; // 상담 날짜
    private int round; // 회차
    private Timestamp reservationDate; // 상담 예약일
    private String counselingRoomUrl; // 상담방 url

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "counselingSeq")
////    @OneToOne(mappedBy = "counselingLog")
////    @JoinColumn(name = "counselingSeq")
//    private CounselingLog counselingLog;

    public Counseling(int counselorSeq, ReserveRequestDto reserveRequestDto, User user, int round) {
        this.counselorSeq = counselorSeq;
        this.clientSeq = user.getUserSeq();
        this.counselingDate = reserveRequestDto.getCounselingDate();
        this.round = round;
        this.reservationDate = new Timestamp(System.currentTimeMillis());
    }

    @Override
    public String toString() {
        return "Counseling{" +
                
                "counselingSeq=" + counselingSeq +
                ", counselorSeq=" + counselorSeq +
                ", clientSeq=" + clientSeq +
                ", counselingDate=" + counselingDate +
                ", round=" + round +
                ", reservationDate=" + reservationDate +
                ", counselingRoomUrl='" + counselingRoomUrl + '\'' +
                '}';
    }
}
