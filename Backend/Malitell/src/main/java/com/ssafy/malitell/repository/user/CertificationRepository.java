package com.ssafy.malitell.repository.user;

import com.ssafy.malitell.domain.auth.emailAuth;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<emailAuth, String> {

    emailAuth findByUserId(String userId);

    @Transactional
    void deleteByUserId(String userId);
}
