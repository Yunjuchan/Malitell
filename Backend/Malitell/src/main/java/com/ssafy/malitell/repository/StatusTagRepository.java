package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.tag.StatusTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusTagRepository extends JpaRepository<StatusTag, Integer> {
}