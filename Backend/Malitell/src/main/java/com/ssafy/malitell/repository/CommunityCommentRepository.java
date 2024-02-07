package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.CommunityComment;
import com.ssafy.malitell.domain.board.GatheringComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityCommentRepository extends JpaRepository<CommunityComment, Integer> {
    public List<CommunityComment> findAllByCommunity(Community community);
}
