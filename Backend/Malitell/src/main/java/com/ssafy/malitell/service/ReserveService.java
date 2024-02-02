package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.reserve.ReserveRequestDto;
import com.ssafy.malitell.dto.response.reserve.CounselingLogOrderByDateResponseDto;
import com.ssafy.malitell.dto.response.reserve.CounselorListResponseDto;
import com.ssafy.malitell.dto.response.reserve.ReservationListResponseDto;
import com.ssafy.malitell.repository.ReserveRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReserveService {

    private final ReserveRepository reserveRepository;
    private final UserRepository userRepository;

    public List<CounselorListResponseDto> getCounselorList() {
        List<User> list = userRepository.findByRole("ROLE_COUNSELOR");

        List<CounselorListResponseDto> counselorList = new ArrayList<>();
        for(User counselor : list) {
            String name = counselor.getName();
            String email = counselor.getEmail();

            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
            int age = Integer.parseInt(sdf.format(date)) - Integer.parseInt(counselor.getBirth().substring(0, 4));

            String gender = counselor.getGender();
            String profileImg = counselor.getProfileImg();
            String professionalField = counselor.getProfessionalField();
            int careerPeriod = counselor.getCareerPeriod();
            double grade = counselor.getGrade();

            CounselorListResponseDto counselorDto = new CounselorListResponseDto(name, email, age, gender, profileImg, professionalField, careerPeriod, grade);
            counselorList.add(counselorDto);
        }

        return counselorList;
    }

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

    public List<ReservationListResponseDto> getAllReservationLists(Principal principal) {
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

    public List<CounselingLogOrderByDateResponseDto> getCounselingLogListOrderByTime(Principal principal) {
        String loginUser = principal.getName();

        User user = reserveRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        List<CounselingLog> counselingLoglist = reserveRepository.getCounselingLogListOrderByTime(loginUserSeq);

        List<CounselingLogOrderByDateResponseDto> counselingLogOrderByDateList = new ArrayList<>();

        for(CounselingLog log : counselingLoglist) {
            int counselorSeq = log.getCounseling().getCounselorSeq();
            Optional<User> counselor = userRepository.findById(counselorSeq);
            String counselorName = counselor.get().getName();

            Timestamp counselingDate = log.getCounseling().getCounselingDate();
            int round = log.getCounseling().getRound();
            String content = log.getContent();

            CounselingLogOrderByDateResponseDto dto = new CounselingLogOrderByDateResponseDto(counselorName, counselingDate, round, content);

            counselingLogOrderByDateList.add(dto);
        }

        return counselingLogOrderByDateList;
    }

}
