package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.CommunityComment;
import com.ssafy.malitell.dto.request.board.CommentRequestDto;
import com.ssafy.malitell.dto.response.board.CommentResponseDto;
import com.ssafy.malitell.repository.CommunityCommentRepository;
import com.ssafy.malitell.repository.CommunityRepository;
import com.ssafy.malitell.repository.GatheringCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommunityCommentService {
    private final CommunityCommentRepository communityCommentRepository;
    private final CommunityRepository communityRepository;


    public void register(CommentRequestDto commentRequestDto) {
        Optional<Community> optionalCommunity = communityRepository.findById(commentRequestDto.getBoardSeq());
        CommunityComment communityComment = new CommunityComment(commentRequestDto, optionalCommunity.get());
        communityCommentRepository.save(communityComment);
    }
}
