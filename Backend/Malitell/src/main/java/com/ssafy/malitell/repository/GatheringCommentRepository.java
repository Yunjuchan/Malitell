package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.CommunityComment;
import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.GatheringComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GatheringCommentRepository extends JpaRepository<GatheringComment, Integer> {
    public List<GatheringComment> findAllByGathering(Gathering gathering);

}
