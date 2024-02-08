package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.comment.CommunityComment;
import com.ssafy.malitell.dto.request.board.comment.CommentRequestDto;
import com.ssafy.malitell.repository.board.community.CommunityCommentRepository;
import com.ssafy.malitell.repository.board.community.CommunityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
