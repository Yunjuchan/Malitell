package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.gathering.GatheringCreateRequestDto;
import com.ssafy.malitell.dto.request.gathering.GatheringUpdateRequestDto;
import com.ssafy.malitell.dto.response.gathering.GatheringListResponseDto;
import com.ssafy.malitell.dto.response.gathering.GatheringResponseDto;
import com.ssafy.malitell.service.GatheringService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class GatheringController {
    private final GatheringService gatheringService;

    // 게시물 등록
    @PostMapping("/Gatherings")
    public ResponseEntity<Integer> createBoard(GatheringCreateRequestDto requestDto, Principal principal) {
        return new ResponseEntity<>(gatheringService.createBoard(requestDto, principal), HttpStatus.OK);
    }

    // 게시물 목록 조회
    @GetMapping("/Gatherings")
    public ResponseEntity<List<GatheringListResponseDto>> getAllBoards() {
        return new ResponseEntity<>(gatheringService.findAllBoard(), HttpStatus.OK);
    }

    // 게시물 하나 조회
    @GetMapping("/Gatherings/{boardSeq}")
    public ResponseEntity<GatheringResponseDto> getOneBoard(@PathVariable int boardSeq) {
        return new ResponseEntity<>(gatheringService.findOneBoard(boardSeq), HttpStatus.OK);
    }

    // 게시물 삭제
    @DeleteMapping("/Gatherings/{boardSeq}")
    public ResponseEntity<Integer> deleteBoard(@PathVariable int boardSeq) {
        return new ResponseEntity<>(gatheringService.deleteBoard(boardSeq), HttpStatus.OK);
    }

    // 게시물 수정
    @PutMapping("/Gatherings/{boardSeq}")
    public ResponseEntity<Integer> updateBoard(@PathVariable int boardSeq, GatheringUpdateRequestDto requestDto) {
        return new ResponseEntity<>(gatheringService.updateBoard(boardSeq, requestDto), HttpStatus.OK);
    }

}
