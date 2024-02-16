package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.board.community.CommunityRequestDto;
import com.ssafy.malitell.dto.request.board.community.CommunityUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.community.CommunityListResponseDto;
import com.ssafy.malitell.dto.response.board.community.CommunityResponseDto;
import com.ssafy.malitell.service.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/community")
public class CommunityController {
    private final CommunityService communityService;

    // 게시물 등록
    @PostMapping
    public ResponseEntity<Integer> createCommunity(@RequestBody CommunityRequestDto requestDto, Principal principal) {
        return new ResponseEntity<>(communityService.createCommunity(requestDto, principal), HttpStatus.OK);
    }

    // 게시물 목록 조회
    @GetMapping("/getBoardList")
    public ResponseEntity<List<CommunityListResponseDto>> getAllCommunities() {
        return new ResponseEntity<>(communityService.findAllCommunity(), HttpStatus.OK);
    }

    // 게시물 하나 조회
    @GetMapping("/view/{communitySeq}")
    public ResponseEntity<CommunityResponseDto> getOneCommunity(@PathVariable int communitySeq) {
        return new ResponseEntity<>(communityService.findOneCommunity(communitySeq), HttpStatus.OK);
    }

    // 게시물 삭제
    @DeleteMapping("/delete/{communitySeq}")
    public ResponseEntity<?> deleteCommunity(@PathVariable int communitySeq) {
        communityService.deleteCommunity(communitySeq);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 게시물 수정
    @PutMapping("/update/{communitySeq}")
    public ResponseEntity<?> updateCommunity(@PathVariable int communitySeq, @RequestBody CommunityUpdateRequestDto requestDto) {
        communityService.updateCommunity(communitySeq, requestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
