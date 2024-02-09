package com.ssafy.malitell.repository.counseling.review;

import com.ssafy.malitell.domain.counseling.CounselingReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounselingReviewRepository extends JpaRepository<CounselingReview, Integer>, CounselingReviewRepositoryCustom {

}
