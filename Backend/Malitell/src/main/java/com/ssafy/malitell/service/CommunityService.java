package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.board.CommunityRequestDto;
import com.ssafy.malitell.dto.request.board.CommunityUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.CommunityListResponseDto;
import com.ssafy.malitell.dto.response.board.CommunityResponseDto;
import com.ssafy.malitell.dto.response.board.overcoming.OverComingListResponseDto;
import com.ssafy.malitell.repository.CommunityRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import jakarta.transaction.Transactional;
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
    private final UserRepository userRepository;

    // 게시글 작성
    public int createCommunity(CommunityRequestDto requestDto, Principal principal) {
        String userId = principal.getName();
        User findUser = userRepository.findByUserId(userId);
        Community community = new Community(findUser, requestDto);

        communityRepository.save(community);
        return community.getCommunitySeq();
    }

    // 게시글 조회
    public CommunityResponseDto findOneCommunity(int communitySeq) {
        Community community = communityRepository.findById(communitySeq).orElseThrow(
                () -> new IllegalArgumentException("조회 실패")
        );
        return new CommunityResponseDto(community);
    }

    // 게시글 수정
    @Transactional
    public void updateCommunity(int communitySeq, CommunityUpdateRequestDto requestDto) {
        Community community = communityRepository.findById(communitySeq).orElseThrow(
                () -> new IllegalArgumentException("게시물이 존재하지 않습니다.")
        );
        community.update(requestDto);
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
