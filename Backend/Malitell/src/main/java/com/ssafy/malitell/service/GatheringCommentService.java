package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.CommunityComment;
import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.GatheringComment;
import com.ssafy.malitell.dto.request.board.CommentRequestDto;
import com.ssafy.malitell.dto.response.board.CommentResponseDto;
import com.ssafy.malitell.repository.GatheringCommentRepository;
import com.ssafy.malitell.repository.GatheringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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
