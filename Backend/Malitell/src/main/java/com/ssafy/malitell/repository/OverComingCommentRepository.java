package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.board.CommunityComment;
import com.ssafy.malitell.domain.board.GatheringComment;
import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.board.OverComingComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OverComingCommentRepository extends JpaRepository<OverComingComment, Integer> {
    public List<OverComingComment> findAllByOverComing(OverComing overComing);

}
