package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.*;
import com.ssafy.malitell.domain.board.comment.OverComingComment;
import com.ssafy.malitell.dto.request.board.comment.CommentRequestDto;
import com.ssafy.malitell.repository.board.overcoming.OverComingCommentRepository;
import com.ssafy.malitell.repository.board.overcoming.OverComingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OverComingCommentService {
    private final OverComingCommentRepository overComingCommentRepository;
    private final OverComingRepository overComingRepository;

    public void register(CommentRequestDto commentRequestDto) {
        Optional<OverComing> optionalOverComing = overComingRepository.findById(commentRequestDto.getBoardSeq());
        OverComingComment overComingComment = new OverComingComment(commentRequestDto, optionalOverComing.get());
        overComingCommentRepository.save(overComingComment);
    }
}
