package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.capsule.Capsule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CapsuleRepository extends JpaRepository<Capsule, Integer> {
}
