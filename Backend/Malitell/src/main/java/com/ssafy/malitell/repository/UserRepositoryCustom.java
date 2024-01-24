package com.ssafy.malitell.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositoryCustom {

    void updateRefreshToken(String userId, String refreshToken);

    String getRefreshTokenByUserId(String userId);
}
