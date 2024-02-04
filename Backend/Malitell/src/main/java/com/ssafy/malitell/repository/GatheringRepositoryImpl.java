package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class GatheringRepositoryImpl {
    private final EntityManager entityManager;

//    public List<Gathering> findUserScrapList(String userId) {
//        return entityManager.createQuery("SELECT g FROM Gathering g WHERE g." +
//                        "", Gathering.class)
//                .setParameter("userId", userId)
//                .getResultList();
//    }
}
