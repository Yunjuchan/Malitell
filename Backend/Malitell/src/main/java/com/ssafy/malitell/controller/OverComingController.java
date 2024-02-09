package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.board.overcoming.OverComingRequestDto;
import com.ssafy.malitell.dto.request.board.overcoming.OverComingUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.overcoming.OverComingListResponseDto;
import com.ssafy.malitell.dto.response.board.overcoming.OverComingResponseDto;
import com.ssafy.malitell.service.OverComingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/overComing")
public class OverComingController {
    private final OverComingService overComingService;

    // 게시물 등록
    @PostMapping
    public ResponseEntity<?> createOverComing(@RequestBody OverComingRequestDto requestDto, Principal principal) {
        overComingService.createOverComing(requestDto, principal);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 게시물 목록 조회
    @GetMapping("/getBoardList")
    public ResponseEntity<List<OverComingListResponseDto>> getAllOverComings() {
        return new ResponseEntity<>(overComingService.findAllOverComing(), HttpStatus.OK);
    }

    // 게시물 하나 조회
    @GetMapping("/view/{overComingSeq}")
    public ResponseEntity<OverComingResponseDto> getOneOverComing(@PathVariable int overComingSeq) {
        return new ResponseEntity<>(overComingService.findOneOverComing(overComingSeq), HttpStatus.OK);
    }

    // 게시물 삭제
    @DeleteMapping("/delete/{overComingSeq}")
    public ResponseEntity<?> deleteOverComing(@PathVariable int overComingSeq) {
        overComingService.deleteOverComing(overComingSeq);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 게시물 수정
    @PutMapping("/update/{overComingSeq}")
    public ResponseEntity<?> updateOverComing(@PathVariable int overComingSeq, @RequestBody OverComingUpdateRequestDto requestDto) {
        overComingService.updateOverComing(overComingSeq, requestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
