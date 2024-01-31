package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.dto.request.ReserveRequestDto;
import com.ssafy.malitell.dto.response.ReservationListResponseDto;
import com.ssafy.malitell.repository.ReserveRepository;
import com.ssafy.malitell.repository.UserRepository;
import io.lettuce.core.output.ListSubscriber;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReserveService {

    private final ReserveRepository reserveRepository;
    private final UserRepository userRepository;

    public int reserve(int counselorSeq, ReserveRequestDto reserveRequestDto, Principal principal) {
        // 로그인한 회원 정보 가져오기
        String clientId = principal.getName();
        User user = userRepository.findByUserId(clientId);

        // 상담자 식별키와 내담자 식별키로 상담 회차 조회
        int round;
        List<Counseling> counselingList = reserveRepository.findByCounselorSeqAndClientSeq(counselorSeq, user.getUserSeq());
        if(counselingList == null) {
            round = 1; // 첫 상담일 때 회차 설정
        } else {
            round = counselingList.size() + 1; // 첫 상담 이후 회차설정
        }

        Counseling counseling = new Counseling(counselorSeq, reserveRequestDto, user, round);
        System.out.println(counseling);
        reserveRepository.save(counseling);
        return counseling.getCounselingSeq();
    }

//    public List<ReservationListResponseDto> getAllReservationLists(Principal principal) {
//        String clientId = principal.getName();
//        User user = userRepository.findByUserId(clientId);
//        int clientSeq = user.getUserSeq();
//
//        List<Counseling> list = reserveRepository.findAllBySeq(clientSeq);
//        List<ReservationListResponseDto> reservationList = new ArrayList<>();
//
//        for(Counseling counseling : list) {
//            Timestamp counselingDate = counseling.getCounselingDate();
//            User counselor = userRepository.findByUserSeq(counseling.getCounselorSeq());
//
//            reservationList.add(new ReservationListResponseDto(counselingDate, counselor.getName()));
//        }
//        return reservationList;
//    }

    public List<ReservationListResponseDto> getAllReservationLists(HttpServletRequest request, Principal principal) {
        String userId = principal.getName();
        User loginUser = userRepository.findByUserId(userId);
        int userSeq = loginUser.getUserSeq();
        String role = loginUser.getRole();

        // 상담자, 내담자 상관없이 내가 참여하는 상담 목록 모두 불러오기
        List<Counseling> list = reserveRepository.findAllBySeq(userSeq);

        List<ReservationListResponseDto> reservationList = new ArrayList<>();

        for(Counseling counseling : list) {
            Timestamp counselingDate = counseling.getCounselingDate();
            String name = "";

            if(role.equals("ROLE_CLIENT")) {
                User counselor = userRepository.findByUserSeq(counseling.getCounselorSeq());
                name = counselor.getName();
            } else if(role.equals("ROLE_COUNSELOR")) {
                User client = userRepository.findByUserSeq(counseling.getClientSeq());
                name = client.getName();
            }
            reservationList.add(new ReservationListResponseDto(counselingDate, name));
        }

        return reservationList;
    }

}
