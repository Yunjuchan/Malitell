package com.ssafy.malitell.repository.user;

import com.ssafy.malitell.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer>, UserRepositoryCustom {
    Boolean existsByUserId(String userId);
    User findByUserId(String userId);
    User findByUserSeq(int userSeq);
    User findIdByNameAndEmail(String name, String email);
}
