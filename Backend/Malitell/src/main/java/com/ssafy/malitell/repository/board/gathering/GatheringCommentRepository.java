package com.ssafy.malitell.repository.board.gathering;

import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.comment.GatheringComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GatheringCommentRepository extends JpaRepository<GatheringComment, Integer> {
    public List<GatheringComment> findAllByGathering(Gathering gathering);

}
