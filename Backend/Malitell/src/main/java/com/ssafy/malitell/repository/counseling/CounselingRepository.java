package com.ssafy.malitell.repository.counseling;

import com.ssafy.malitell.domain.counseling.Counseling;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CounselingRepository extends JpaRepository<Counseling, Integer>, CounselingRepositoryCustom {

    // 상담 회차 조회
    public List<Counseling> findByCounselorSeqAndClientSeq(int counselorSeq, int clientSeq);

}
