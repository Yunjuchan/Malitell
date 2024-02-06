package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.CounselingReview;
import org.springframework.stereotype.Repository;

@Repository
public interface CounselingReviewRepositoryCustom {

    public CounselingReview findByCounselingSeq(int counselingSeq);

}
