package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.dto.ReserveDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReserveRepository extends JpaRepository<Counseling, Integer> {

    // 상담 회차 조회
    public Counseling findByCounselorSeqAndClientSeq(int counselorSeq, int clientSeq);

}
