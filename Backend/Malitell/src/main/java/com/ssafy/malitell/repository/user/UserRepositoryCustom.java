package com.ssafy.malitell.repository.user;

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.response.reserve.CounselorListResponseDto;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.response.user.CounselorResponseDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepositoryCustom {

    void updateRefreshToken(String userId, String refreshToken);

    String getRefreshTokenByUserId(String userId);

    ClientResponseDto findClientByUserId(String userId);

    CounselorResponseDto findCounselorByUserId(String userId);

    List<User> findByRole(String role);
}
