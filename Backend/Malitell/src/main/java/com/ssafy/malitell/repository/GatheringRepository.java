package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GatheringRepository extends JpaRepository<Gathering, Integer> {
    List<Gathering> findGatheringByUser(User user);
}
