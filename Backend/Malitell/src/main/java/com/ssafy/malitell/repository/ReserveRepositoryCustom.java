package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReserveRepositoryCustom {

    public List<Counseling> findAllBySeq(int userSeq);

    public User findByUserId(String userId);

    public List<CounselingLog> getCounselingLogListOrderByDate(int loginUserSeq);

}
