package com.ssafy.malitell.repository.counseling.review;

import com.ssafy.malitell.domain.counseling.CounselingReview;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CounselingReviewRepositoryImpl implements CounselingReviewRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public CounselingReview findByCounselingSeq(int counselingSeq) {
        return entityManager.createQuery("SELECT cr FROM CounselingReview cr WHERE cr.counseling.counselingSeq = :counselingSeq", CounselingReview.class)
                .setParameter("counselingSeq", counselingSeq)
                .getSingleResult();
    }

    @Override
    public List<CounselingReview> getCounselingReviewList(int counselorSeq) {
        return entityManager.createQuery("SELECT cr FROM CounselingReview cr JOIN FETCH cr.counseling WHERE cr.counseling.counselorSeq = :counselorSeq", CounselingReview.class)
                .setParameter("counselorSeq", counselorSeq)
                .getResultList();
    }

    @Override
    public List<CounselingReview> getMyCounselingReviewList(int loginUserSeq) {
        return entityManager.createQuery("SELECT cr FROM CounselingReview cr JOIN FETCH cr.counseling WHERE cr.counseling.clientSeq = :loginUserSeq", CounselingReview.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
    }

}
