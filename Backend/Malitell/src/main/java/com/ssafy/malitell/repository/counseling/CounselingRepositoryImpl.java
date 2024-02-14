package com.ssafy.malitell.repository.counseling;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.counseling.CounselingReview;
import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CounselingRepositoryImpl implements CounselingRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public List<Counseling> findAllBySeq(int userSeq) {
        return entityManager.createQuery("SELECT c FROM Counseling c WHERE c.clientSeq = :clientSeq or c.counselorSeq = :counselorSeq", Counseling.class)
                .setParameter("clientSeq", userSeq)
                .setParameter("counselorSeq", userSeq)
                .getResultList();
    }

    @Override
    public User findByUserId(String userId) {
        return entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class)
                .setParameter("userId", userId)
                .getSingleResult();
    }

    // 내담자
    @Override
    public List<CounselingLog> getCounselingLogListOrderByDate1(int loginUserSeq) {
        List<CounselingLog> counselingLogList = entityManager.createQuery("SELECT cl FROM CounselingLog cl JOIN FETCH cl.counseling " +
                        "WHERE cl.counseling.clientSeq = :loginUserSeq " +
                        "ORDER BY cl.counseling.counselingDate DESC", CounselingLog.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingLogList;
    }

    // 상담자
    @Override
    public List<CounselingLog> getCounselingLogListOrderByDate2(int loginUserSeq) {
        List<CounselingLog> counselingLogList = entityManager.createQuery("SELECT cl FROM CounselingLog cl JOIN FETCH cl.counseling " +
                        "WHERE cl.counseling.counselorSeq = :loginUserSeq " +
                        "ORDER BY cl.counseling.counselingDate DESC", CounselingLog.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingLogList;
    }

    // 내담자
    @Override
    public List<CounselingLog> getCounselingLogList1(int loginUserSeq) {
        List<CounselingLog> counselingLogList = entityManager.createQuery("SELECT cl FROM CounselingLog cl JOIN FETCH cl.counseling " +
                        "WHERE cl.counseling.clientSeq = :loginUserSeq", CounselingLog.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingLogList;
    }

    // 상담자
    @Override
    public List<CounselingLog> getCounselingLogList2(int loginUserSeq) {
        List<CounselingLog> counselingLogList = entityManager.createQuery("SELECT cl FROM CounselingLog cl JOIN FETCH cl.counseling " +
                        "WHERE cl.counseling.counselorSeq = :loginUserSeq", CounselingLog.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingLogList;
    }

    @Override
    public List<CounselingReview> counselorReviewList(int counselorSeq) {
        return entityManager.createQuery("SELECT cr FROM CounselingReview cr JOIN FETCH cr.counseling " +
                        "WHERE cr.counseling.counselorSeq = :counselorSeq", CounselingReview.class)
                .setParameter("counselorSeq", counselorSeq)
                .getResultList();
    }

    @Override
    public List<Counseling> findAllByCounselorSeq(int counselorSeq) {
        return entityManager.createQuery("SELECT c FROM Counseling c WHERE c.counselorSeq = :counselorSeq", Counseling.class)
                .setParameter("counselorSeq", counselorSeq)
                .getResultList();
    }

    @Override
    public List<CounselingReview> getCounselingReviewListOrderByDate(int loginUserSeq) {
        List<CounselingReview> counselingReviewList = entityManager.createQuery("SELECT cr FROM CounselingReview cr JOIN FETCH cr.counseling " +
                        "WHERE cr.counseling.clientSeq = :loginUserSeq " +
                        "ORDER BY cr.counseling.counselingDate DESC", CounselingReview.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingReviewList;
    }

    @Override
    public List<CounselingReview> getCounselingReviewList(int loginUserSeq) {
        List<CounselingReview> counselingReviewList = entityManager.createQuery("SELECT cr FROM CounselingReview cr JOIN FETCH cr.counseling WHERE cr.counseling.clientSeq = :loginUserSeq", CounselingReview.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingReviewList;
    }

    @Override
    public List<Counseling> findAllPreviousCounselingListByClientSeqAndCounselorSeq(int clientSeq, int counselorSeq, int counselingSeq) {
        return entityManager.createQuery("SELECT c FROM Counseling c WHERE c.clientSeq = :clientSeq AND c.counselorSeq = :counselorSeq AND c.counselingSeq < :counselingSeq", Counseling.class)
                .setParameter("clientSeq", clientSeq)
                .setParameter("counselorSeq", counselorSeq)
                .setParameter("counselingSeq", counselingSeq)
                .getResultList();
    }

    @Override
    public List<Counseling> findAllPreviousCounselingListByCounselorSeqAndClientSeq(int counselorSeq, int clientSeq, int counselingSeq) {
        return entityManager.createQuery("SELECT c FROM Counseling c WHERE c.counselorSeq = :counselorSeq AND c.clientSeq = :clientSeq AND c.counselingSeq < :counselingSeq", Counseling.class)
                .setParameter("clientSeq", clientSeq)
                .setParameter("counselorSeq", counselorSeq)
                .setParameter("counselingSeq", counselingSeq)
                .getResultList();
    }

}
