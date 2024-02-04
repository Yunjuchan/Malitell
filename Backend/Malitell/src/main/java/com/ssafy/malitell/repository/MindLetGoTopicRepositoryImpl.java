package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class MindLetGoTopicRepositoryImpl {
    @Autowired
    EntityManager entityManager;

    @Transactional
    public void save(MindLetGoTopic mindLetGoTopic) {
        entityManager.persist(mindLetGoTopic);
    }

    public List<MindLetGoTopic> findAll() {
        return entityManager.createQuery("SELECT mlgt FROM MindLetGoTopic mlgt", MindLetGoTopic.class)
                .getResultList();
    }

    public MindLetGoTopic findTopic() {
        return entityManager.createQuery("SELECT mlgt FROM MindLetGoTopic mlgt WHERE isSelect = true", MindLetGoTopic.class)
                .getSingleResult();
    }

    @Transactional
    public void updateMindLetGoTopicSelectCancel() {
        entityManager.createQuery("UPDATE MindLetGoTopic mlgt SET mlgt.isSelect = false WHERE mlgt.isSelect = true")
                .executeUpdate();
    }

    @Transactional
    public void updateMindLetGoTopicSelect(int topicSeq) {
        entityManager.createQuery("UPDATE MindLetGoTopic mlgt SET mlgt.isSelect = true WHERE mlgt.mindLetGoTopicSeq = :topicSeq")
                .setParameter("topicSeq", topicSeq)
                .executeUpdate();
    }
}
