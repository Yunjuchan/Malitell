package com.ssafy.malitell.repository;


import com.ssafy.malitell.domain.tag.WorryTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorryTagRepository extends JpaRepository<WorryTag, Integer> {
}
