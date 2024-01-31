package com.ssafy.malitell;


import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.domain.board.Board;
import com.ssafy.malitell.domain.board.BoardType;
import com.ssafy.malitell.dto.request.BoardRequestDto;
import com.ssafy.malitell.dto.request.JoinDto;
import com.ssafy.malitell.repository.BoardRepository;
import com.ssafy.malitell.repository.UserRepository;
import com.ssafy.malitell.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Initializer implements ApplicationRunner {

    private final UserService userService;
    private final BoardRepository boardRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // 유저 더미데이터 추가
        JoinDto joinDto1 = new JoinDto("hanjaehyeon", "한재현", "짱재현", "1234", "hjaehyeon98@gmail.com", "010-5705-6540", "19980228", "M", "ROLE_CLIENT");
        JoinDto joinDto2 = new JoinDto("tpwls101", "유세진", "짱세진", "1234", "tpwls101@naver.com", "010-6604-1442", "19980210", "F", "ROLE_CLIENT");

        userService.join(joinDto1);
        userService.join(joinDto2);

        //게시물 더미 데이터 추가
        BoardRequestDto boardRequestDto1 = new BoardRequestDto("한재현입니다", "나는야한재현");
        Board board1 = new Board(boardRequestDto1, BoardType.Gathering, userService.findUser("hanjaehyeon"));

        BoardRequestDto boardRequestDto2 = new BoardRequestDto("유세진입니다", "나는야유세진");
        Board board2 = new Board(boardRequestDto2, BoardType.Gathering, userService.findUser("tpwls101"));

        boardRepository.save(board1);
        boardRepository.save(board2);
    }
}
