package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import com.ssafy.malitell.dto.request.gathering.GatheringCreateRequestDto;
import com.ssafy.malitell.dto.request.gathering.GatheringUpdateRequestDto;
import com.ssafy.malitell.dto.response.gathering.GatheringListResponseDto;
import com.ssafy.malitell.dto.response.gathering.GatheringResponseDto;
import com.ssafy.malitell.repository.GatheringRepository;
import com.ssafy.malitell.repository.SelfHelpGroupRepository;
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
public class GatheringService {

    private final GatheringRepository gatheringRepository;
    private final SelfHelpGroupRepository selfHelpGroupRepository;

    // 글 작성
    public int createBoard(GatheringCreateRequestDto requestDto, Principal principal) {
        String name = principal.getName();
        SelfHelpGroup selfHelpGroup = new SelfHelpGroup(requestDto);

        Gathering gathering = new Gathering(selfHelpGroup, name, requestDto.getTitle(), requestDto.getContent());

        selfHelpGroupRepository.save(selfHelpGroup);
        gatheringRepository.save(gathering);
        return gathering.getBoardSeq();
    }


    // 게시글 조회
    public GatheringResponseDto findOneBoard(int boardSeq) {
        Gathering gathering = gatheringRepository.findById(boardSeq).orElseThrow(
                () -> new IllegalArgumentException("조회 실패")
        );
        return new GatheringResponseDto(gathering);
    }

    // 게시글 수정
    @Transactional
    public int updateBoard(int boardSeq, GatheringUpdateRequestDto requestDto) {
        Gathering gathering = gatheringRepository.findById(boardSeq).orElseThrow(
                () -> new IllegalArgumentException("게시물이 존재하지 않습니다.")
        );
        gathering.update(requestDto);
        return gathering.getBoardSeq();
    }

    // 게시글 삭제
    @Transactional
    public int deleteBoard(int boardSeq) {
        gatheringRepository.deleteById(boardSeq);
        return boardSeq;
    }

        // 게시판 목록 가져오기
    public List<GatheringListResponseDto> findAllBoard() {
        try {
            List<Gathering> gatheringList = gatheringRepository.findAll();

            List<GatheringListResponseDto> responseDtoList = new ArrayList<>();

            for (Gathering gathering : gatheringList) {
                responseDtoList.add(
                        new GatheringListResponseDto(gathering)
                );
            }
            return responseDtoList;
        } catch (Exception exception) {
            log.error(exception.getMessage());
        }
        return null;
    }

}
