package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;

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

}
