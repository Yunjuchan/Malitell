package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReserveRepository extends JpaRepository<Counseling, Integer>, ReserveRepositoryCustom {

    // 상담 회차 조회
    public List<Counseling> findByCounselorSeqAndClientSeq(int counselorSeq, int clientSeq);

}
