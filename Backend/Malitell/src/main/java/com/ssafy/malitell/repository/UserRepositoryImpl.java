package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.response.user.CounselorResponseDto;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
@Slf4j
public class UserRepositoryImpl implements UserRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public void updateRefreshToken(String userId, String refreshToken) {
        try {
            User findUser = entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class)
                    .setParameter("userId", userId)
                    .getSingleResult();

            // refreshtoken 값 업데이트
            findUser.setRefreshToken(refreshToken);

            // 엔터티 저장
            entityManager.persist(findUser);
        } catch (Exception exception) {
            log.error(exception.getMessage());
        }
    }

    @Override
    public String getRefreshTokenByUserId(String userId) {
        return entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class).
                setParameter("userId", userId)
                .getSingleResult()
                .getRefreshToken();
    }

    @Override
    public ClientResponseDto findClientByUserId(String userId) {
        User user = entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class)
                .setParameter("userId", userId)
                .getSingleResult();

        return new ClientResponseDto(user);
    }

    @Override
    public CounselorResponseDto findCounselorByUserId(String userId) {
        User user = entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class)
                .setParameter("userId", userId)
                .getSingleResult();
        return new CounselorResponseDto(user);
    }
}
