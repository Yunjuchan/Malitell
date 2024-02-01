package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GatheringRepository extends JpaRepository<Gathering, Integer> {
}
