package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.counseling.CounselingReview;
import com.ssafy.malitell.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReserveRepositoryCustom {

    public List<Counseling> findAllBySeq(int userSeq);

    public User findByUserId(String userId);

    public List<CounselingLog> getCounselingLogListOrderByDate1(int loginUserSeq);

    public List<CounselingLog> getCounselingLogListOrderByDate2(int loginUserSeq);

    public List<CounselingLog> getCounselingLogList1(int loginUserSeq);

    public List<CounselingLog> getCounselingLogList2(int loginUserSeq);

    public List<CounselingLog> getCounselingLogsForOne1(int loginUserSeq, int counselorSeq);

    public List<CounselingLog> getCounselingLogsForOne2(int loginUserSeq, int clientSeq);

    public List<CounselingReview> counselorReviewList(int counselorSeq);

    public List<Counseling> findAllByCounselorSeq(int counselorSeq);

    public List<CounselingReview> getCounselingReviewListOrderByDate(int loginUserSeq);

    public List<CounselingReview> getCounselingReviewList(int loginUserSeq);

}
