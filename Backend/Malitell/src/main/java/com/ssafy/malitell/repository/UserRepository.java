package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
    Boolean existsByUserId(String userId);
    User findByUserId(String userId);

    User findByUserSeq(int userSeq);

}
