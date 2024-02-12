package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.comment.CommunityComment;
import com.ssafy.malitell.domain.tag.WorryTag;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.board.community.CommunityRequestDto;
import com.ssafy.malitell.dto.request.board.community.CommunityUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.community.CommunityListResponseDto;
import com.ssafy.malitell.dto.response.board.community.CommunityResponseDto;
import com.ssafy.malitell.repository.board.community.CommunityCommentRepository;
import com.ssafy.malitell.repository.board.community.CommunityRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityCommentRepository communityCommentRepository;
    private final UserRepository userRepository;

    // 게시글 작성
    public int createCommunity(CommunityRequestDto requestDto, Principal principal) {
        String userId = principal.getName();
        User findUser = userRepository.findByUserId(userId);

        WorryTag worryTag = requestDto.getWorryTag();
        Community community = new Community(findUser, requestDto, worryTag);

        communityRepository.save(community);
        return community.getCommunitySeq();
    }

    // 게시글 단건 조회
    public CommunityResponseDto findOneCommunity(int communitySeq) {
        Community community = communityRepository.findById(communitySeq).orElseThrow(
                () -> new IllegalArgumentException("조회 실패")
        );
        List<CommunityComment> allByCommunity = communityCommentRepository.findAllByCommunity(community);
        return new CommunityResponseDto(community, allByCommunity);
    }

    // 게시글 수정
    @Transactional
    public void updateCommunity(int communitySeq, CommunityUpdateRequestDto requestDto) {
        Community community = communityRepository.findById(communitySeq).orElseThrow(
                () -> new IllegalArgumentException("게시물이 존재하지 않습니다.")
        );
        WorryTag worryTag = requestDto.getWorryTag();
        community.update(requestDto, worryTag);
    }

    // 게시글 삭제
    @Transactional
    public void deleteCommunity(int communitySeq) {
        communityRepository.deleteById(communitySeq);
    }

    // 게시판 목록 가져오기
    public List<CommunityListResponseDto> findAllCommunity() {
        try {
            List<Community> communityList = communityRepository.findAll();

            List<CommunityListResponseDto> responseDtoList = new ArrayList<>();

            for (Community community : communityList) {
                responseDtoList.add(new CommunityListResponseDto(community));
            }
            return responseDtoList;
        } catch (Exception exception) {
            log.error(exception.getMessage());
        }
        return null;
    }
}
