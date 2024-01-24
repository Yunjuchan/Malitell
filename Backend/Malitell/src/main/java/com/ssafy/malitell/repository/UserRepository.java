package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
    Boolean existsByUserId(String userId);
    User findByUserId(String userId);
}
