package com.ssafy.malitell.repository.board.community;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Integer> {
    List<Community> findCommunityByUser(User user);

}
