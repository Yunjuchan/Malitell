package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.board.BoardType;
import com.ssafy.malitell.dto.request.board.BoardRequestDto;
import com.ssafy.malitell.dto.response.board.BoardListResponseDto;
import com.ssafy.malitell.dto.response.board.BoardResponseDto;
import com.ssafy.malitell.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    // 게시물 등록
    @PostMapping("/Gatherings")
    public ResponseEntity<Integer> createBoard(BoardRequestDto requestDto, Principal principal) {
        return new ResponseEntity<>(boardService.createBoard(requestDto, BoardType.Gathering, principal), HttpStatus.OK);
    }

    // 게시물 목록 조회
    @GetMapping("/Gatherings")
    public ResponseEntity<List<BoardListResponseDto>> getAllBoards() {
        return new ResponseEntity<>(boardService.findAllBoard(), HttpStatus.OK);
    }

    // 게시물 하나 조회
    @GetMapping("/Gatherings/{boardSeq}")
    public ResponseEntity<BoardResponseDto> getOneBoard(@PathVariable int boardSeq) {
        return new ResponseEntity<>(boardService.findOneBoard(boardSeq), HttpStatus.OK);
    }

    // 게시물 삭제
    @DeleteMapping("/Gatherings/{boardSeq}")
    public ResponseEntity<Integer> deleteBoard(@PathVariable int boardSeq) {
        return new ResponseEntity<>(boardService.deleteBoard(boardSeq), HttpStatus.OK);
    }

    // 게시물 수정
    @PutMapping("/Gatherings/{boardSeq}")
    public ResponseEntity<Integer> updateBoard(@PathVariable int boardSeq, BoardRequestDto requestDto) {
        return new ResponseEntity<>(boardService.updateBoard(boardSeq, requestDto), HttpStatus.OK);
    }
}
