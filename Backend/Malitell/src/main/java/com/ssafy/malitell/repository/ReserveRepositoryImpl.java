package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
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
    public List<CounselingLog> getCounselingLogListOrderByTime(String userId) {
//        entityManager.createQuery("SELECT c, cl FROM Counseling c JOIN c.counselingLog cl " +
//                "ON c.counselingSeq = cl.counselingSeq " +
//                "WHERE c.clientSeq = :userId " +
//                "ORDER BY c.counselingDate desc", Counseling.class);

//        System.out.println("@@@@@" + entityManager.createQuery("SELECT c FROM Counseling c JOIN c.counselingLog cl", Counseling.class)
//                .getResultList());

//        entityManager.createQuery("SELECT c FROM Counseling c JOIN c.counselingLog cl", Counseling.class)
//                .getResultList();


//        List<Counseling> counselingList = entityManager.createQuery("SELECT c FROM Counseling c WHERE c.clientSeq = :userId", Counseling.class)
//                .setParameter("userId", userId)
//                .getResultList();


        List<Counseling> cList = entityManager.createQuery("SELECT c FROM Counseling c", Counseling.class)
                .getResultList();
        System.out.println("상담 목록 : " + cList);

        List<CounselingLog> clList = entityManager.createQuery("SELECT cl FROM CounselingLog cl", CounselingLog.class)
                .getResultList();
        System.out.println("상담일지 목록 : " + clList);

        List<Counseling> counselingList = entityManager.createQuery("SELECT c FROM Counseling c JOIN FETCH c.counselingLog", Counseling.class)
                .getResultList();

        System.out.println("!!!!!!!!!!!!" + counselingList);


        List<CounselingLog> list = new ArrayList<>();
        return list;
    }

}
