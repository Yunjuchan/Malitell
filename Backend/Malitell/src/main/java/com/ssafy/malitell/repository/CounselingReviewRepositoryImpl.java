package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.CounselingReview;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;

public class CounselingReviewRepositoryImpl implements CounselingReviewRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public CounselingReview findByCounselingSeq(int counselingSeq) {
        return entityManager.createQuery("SELECT cr FROM CounselingReview cr WHERE cr.counseling.counselingSeq = :counselingSeq", CounselingReview.class)
                .setParameter("counselingSeq", counselingSeq)
                .getSingleResult();
    }

}
