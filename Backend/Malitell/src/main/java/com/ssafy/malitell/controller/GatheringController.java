package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.board.gathering.GatheringCreateRequestDto;
import com.ssafy.malitell.dto.request.board.gathering.GatheringUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.gathering.GatheringListResponseDto;
import com.ssafy.malitell.dto.response.board.gathering.GatheringResponseDto;
import com.ssafy.malitell.service.GatheringService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/gathering")
public class GatheringController {
    private final GatheringService gatheringService;

    // 게시물 등록
    @PostMapping
    public ResponseEntity<Integer> createGathering(@RequestBody GatheringCreateRequestDto requestDto, Principal principal) {
        return new ResponseEntity<>(gatheringService.createGathering(requestDto, principal), HttpStatus.OK);
    }

    // 게시물 목록 조회
    @GetMapping("/getBoardList")
    public ResponseEntity<List<GatheringListResponseDto>> getAllGatherings() {
        return new ResponseEntity<>(gatheringService.findAllGathering(), HttpStatus.OK);
    }

    // 게시물 하나 조회
    @GetMapping("/{gatheringSeq}")
    public ResponseEntity<GatheringResponseDto> getOneGathering(@PathVariable int gatheringSeq) {
        return new ResponseEntity<>(gatheringService.findOneGathering(gatheringSeq), HttpStatus.OK);
    }

    // 게시물 삭제
    @DeleteMapping("/{gatheringSeq}")
    public ResponseEntity<Integer> deleteGathering(@PathVariable int gatheringSeq) {
        return new ResponseEntity<>(gatheringService.deleteGathering(gatheringSeq), HttpStatus.OK);
    }

    // 게시물 수정
    @PutMapping("/{gatheringSeq}")
    public ResponseEntity<Integer> updateGathering(@PathVariable int gatheringSeq, @RequestBody GatheringUpdateRequestDto requestDto) {
        return new ResponseEntity<>(gatheringService.updateGathering(gatheringSeq, requestDto), HttpStatus.OK);
    }
}
