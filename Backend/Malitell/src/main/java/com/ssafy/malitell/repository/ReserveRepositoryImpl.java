package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class ReserveRepositoryImpl implements ReserveRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public List<Counseling> findAllBySeq(int userSeq) {
        return entityManager.createQuery("SELECT c FROM Counseling c WHERE c.clientSeq = :clientSeq", Counseling.class)
                .setParameter("clientSeq", userSeq)
                .getResultList();
    }

    @Override
    public User findByUserId(String userId) {
        return entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class)
                .setParameter("userId", userId)
                .getSingleResult();
    }

    @Override
    public List<CounselingLog> getCounselingLogListOrderByDate(int loginUserSeq) {
        List<CounselingLog> counselingLogList = entityManager.createQuery("SELECT cl FROM CounselingLog cl JOIN FETCH cl.counseling " +
                        "WHERE cl.counseling.clientSeq = :loginUserSeq " +
                        "ORDER BY cl.counseling.counselingDate DESC", CounselingLog.class)
                .setParameter("loginUserSeq", loginUserSeq)
                .getResultList();
        return counselingLogList;
    }

}
