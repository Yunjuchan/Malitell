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
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class GatheringService {

    private final GatheringRepository gatheringRepository;
    private final SelfHelpGroupRepository selfHelpGroupRepository;

    // 글 작성
    public int createGathering(GatheringCreateRequestDto requestDto, Principal principal) {
        String name = principal.getName();
        SelfHelpGroup selfHelpGroup = new SelfHelpGroup(requestDto);

        Gathering gathering = new Gathering(selfHelpGroup, name, requestDto.getTitle(), requestDto.getContent());

        selfHelpGroupRepository.save(selfHelpGroup);
        gatheringRepository.save(gathering);
        return gathering.getGatheringSeq();
    }


    // 게시글 조회
    @Transactional
    public GatheringResponseDto findOneGathering(int gatheringSeq) {
        Gathering gathering = gatheringRepository.findById(gatheringSeq).orElseThrow(
                () -> new IllegalArgumentException("조회 실패")
        );
        gathering.hitCountUp();
        return new GatheringResponseDto(gathering);
    }

    // 게시글 수정
    @Transactional
    public int updateGathering(int gatheringSeq, GatheringUpdateRequestDto requestDto) {
        Gathering gathering = gatheringRepository.findById(gatheringSeq).orElseThrow(
                () -> new IllegalArgumentException("게시물이 존재하지 않습니다.")
        );
        gathering.update(requestDto);
        return gathering.getGatheringSeq();
    }

    // 게시글 삭제
    @Transactional
    public int deleteGathering(int gatheringSeq) {
        Optional<Gathering> findGathering = gatheringRepository.findById(gatheringSeq);
        if (findGathering.isPresent()) {
            int selfHelpGroupSeq = findGathering.get().getSelfHelpGroup().getSelfHelpGroupSeq();
            selfHelpGroupRepository.deleteById(selfHelpGroupSeq);
        }
        gatheringRepository.deleteById(gatheringSeq);
        return gatheringSeq;
    }

        // 게시판 목록 가져오기
    public List<GatheringListResponseDto> findAllGathering() {
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

//    public List<Gathering> userScrapList(String userId) {
//        return gatheringRepository.findUserScrapList(userId);
//    }
}
