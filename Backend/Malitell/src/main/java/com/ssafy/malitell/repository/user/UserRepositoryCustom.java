package com.ssafy.malitell.repository.user;

import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.response.user.CounselorResponseDto;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositoryCustom {

    void updateRefreshToken(String userId, String refreshToken);

    String getRefreshTokenByUserId(String userId);

    ClientResponseDto findClientByUserId(String userId);

    CounselorResponseDto findCounselorByUserId(String userId);
}
