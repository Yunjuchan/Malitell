package com.ssafy.malitell.repository.board.overcoming;


import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OverComingRepository extends JpaRepository<OverComing, Integer> {
    List<OverComing> findOverComingByUser(User user);
}
