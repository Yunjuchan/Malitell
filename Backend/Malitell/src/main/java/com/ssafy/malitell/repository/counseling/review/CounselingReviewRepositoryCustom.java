package com.ssafy.malitell.repository.counseling.review;

import com.ssafy.malitell.domain.counseling.CounselingReview;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CounselingReviewRepositoryCustom {

    public CounselingReview findByCounselingSeq(int counselingSeq);

    public List<CounselingReview> getMyReviewList(int loginUserSeq);

    public List<CounselingReview> getCounselorReviewList(int loginUserSeq);

    public List<CounselingReview> getMyCounselingReviewList(int loginUserSeq);

}
