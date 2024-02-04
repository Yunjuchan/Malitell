package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GatheringRepository extends JpaRepository<Gathering, Integer> {
}
