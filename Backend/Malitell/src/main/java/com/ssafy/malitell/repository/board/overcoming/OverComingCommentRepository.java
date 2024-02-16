package com.ssafy.malitell.repository.board.overcoming;

import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.board.comment.OverComingComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OverComingCommentRepository extends JpaRepository<OverComingComment, Integer> {
    public List<OverComingComment> findAllByOverComing(OverComing overComing);

}
