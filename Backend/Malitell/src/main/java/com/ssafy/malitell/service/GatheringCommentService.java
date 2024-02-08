package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.comment.GatheringComment;
import com.ssafy.malitell.dto.request.board.comment.CommentRequestDto;
import com.ssafy.malitell.repository.board.gathering.GatheringCommentRepository;
import com.ssafy.malitell.repository.board.gathering.GatheringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GatheringCommentService {
    private final GatheringCommentRepository gatheringCommentRepository;
    private final GatheringRepository gatheringRepository;

    public void register(CommentRequestDto commentRequestDto) {
        Optional<Gathering> optionalGathering = gatheringRepository.findById(commentRequestDto.getBoardSeq());
        GatheringComment gatheringComment = new GatheringComment(commentRequestDto, optionalGathering.get());
        gatheringCommentRepository.save(gatheringComment);
    }
}
