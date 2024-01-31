package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.domain.board.Board;
import com.ssafy.malitell.domain.board.BoardType;
import com.ssafy.malitell.dto.request.board.BoardRequestDto;
import com.ssafy.malitell.dto.response.board.BoardListResponseDto;
import com.ssafy.malitell.dto.response.board.BoardResponseDto;
import com.ssafy.malitell.repository.BoardRepository;
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
public class BoardService {

    private final UserRepository userRepository;
    private final BoardRepository boardRepository;

    // 글 작성
    public int createBoard(BoardRequestDto requestDto, BoardType type, Principal principal) {
        String name = principal.getName();
        User findUser = userRepository.findByUserId(name);
        Board board = new Board(requestDto, type, findUser);
        boardRepository.save(board);
        return board.getBoardSeq();
    }

    // 게시판 목록 가져오기x
    public List<BoardListResponseDto> findAllBoard() {
        try {
            List<Board> boardList = boardRepository.findAll();

            List<BoardListResponseDto> responseDtoList = new ArrayList<>();

            for (Board board : boardList) {
                responseDtoList.add(
                        new BoardListResponseDto(board)
                );
            }
            return responseDtoList;
        } catch (Exception exception) {
            log.error(exception.getMessage());
        }
        return null;
    }

    // 게시글 조회
    public BoardResponseDto findOneBoard(int boardSeq) {
        Board board = boardRepository.findById(boardSeq).orElseThrow(
                () -> new IllegalArgumentException("조회 실패")
        );
        return new BoardResponseDto(board);
    }

    // 게시글 수정
    @Transactional
    public int updateBoard(int boardSeq, BoardRequestDto requestDto) {
        Board board = boardRepository.findById(boardSeq).orElseThrow(
                () -> new IllegalArgumentException("게시물이 존재하지 않습니다.")
        );
        board.update(requestDto);
        return board.getBoardSeq();
    }

    // 게시글 삭제
    @Transactional
    public int deleteBoard(int boardSeq) {
        boardRepository.deleteById(boardSeq);
        return boardSeq;
    }
}
