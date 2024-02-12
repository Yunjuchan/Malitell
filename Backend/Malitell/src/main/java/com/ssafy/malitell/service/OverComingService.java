package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.board.comment.OverComingComment;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.board.overcoming.OverComingRequestDto;
import com.ssafy.malitell.dto.request.board.overcoming.OverComingUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.overcoming.OverComingListResponseDto;
import com.ssafy.malitell.dto.response.board.overcoming.OverComingResponseDto;
import com.ssafy.malitell.repository.board.overcoming.OverComingCommentRepository;
import com.ssafy.malitell.repository.board.overcoming.OverComingRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OverComingService {
    private final OverComingRepository overComingRepository;
    private final OverComingCommentRepository overComingCommentRepository;
    private final UserRepository userRepository;

    // 게시글 작성
    public void createOverComing(OverComingRequestDto requestDto, Principal principal) {
        String userId = principal.getName();
        User findUser = userRepository.findByUserId(userId);
        OverComing overComing = new OverComing(findUser, requestDto);

        overComingRepository.save(overComing);
    }

    // 게시글 단건 조회
    public OverComingResponseDto findOneOverComing(int overComingSeq) {
        OverComing overComing = overComingRepository.findById(overComingSeq).orElseThrow(
                () -> new IllegalArgumentException("조회 실패")
        );
        List<OverComingComment> allByOverComing = overComingCommentRepository.findAllByOverComing(overComing);
        return new OverComingResponseDto(overComing, allByOverComing);
    }

    // 게시글 수정
    @Transactional
    public void updateOverComing(int overComingSeq, OverComingUpdateRequestDto requestDto) {
        OverComing overComing = overComingRepository.findById(overComingSeq).orElseThrow(
                () -> new IllegalArgumentException("게시물이 존재하지 않습니다.")
        );
        overComing.update(requestDto);
    }

    // 게시글 삭제
    @Transactional
    public void deleteOverComing(int overComingSeq) {
        overComingRepository.deleteById(overComingSeq);
    }

    // 게시판 목록 가져오기
    public List<OverComingListResponseDto> findAllOverComing() {
        try {
            List<OverComing> overComingList = overComingRepository.findAll();

            List<OverComingListResponseDto> responseDtoList = new ArrayList<>();

            for (OverComing overComing : overComingList) {
                responseDtoList.add(new OverComingListResponseDto(overComing));
            }
            return responseDtoList;
        } catch (Exception exception) {
            log.error(exception.getMessage());
        }
        return null;
    }
}
