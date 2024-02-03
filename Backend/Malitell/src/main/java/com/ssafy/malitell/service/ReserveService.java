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

import javax.swing.text.html.Option;
import java.security.Principal;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ReserveService {

    private final ReserveRepository reserveRepository;
    private final UserRepository userRepository;

    public List<CounselorListResponseDto> getCounselorList() {
        List<User> list = userRepository.findByRole("ROLE_COUNSELOR");

        List<CounselorListResponseDto> counselorList = new ArrayList<>();
        for(User counselor : list) {
            int seq = counselor.getUserSeq();
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

            CounselorListResponseDto counselorDto = new CounselorListResponseDto(seq, name, email, age, gender, profileImg, professionalField, careerPeriod, grade);
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

    public List<CounselingLogOrderByDateResponseDto> getCounselingLogListOrderByDate(Principal principal) {
        String loginUser = principal.getName();

        User user = reserveRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        List<CounselingLog> counselingLoglist = reserveRepository.getCounselingLogListOrderByDate(loginUserSeq);

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

    public List<CounselorListResponseDto> getCounselorListOrderByName(Principal principal) {
        String loginUser = principal.getName();

        User user = reserveRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        // 나의 상담일지 목록 가져오기
        List<CounselingLog> counselingLoglist = reserveRepository.getCounselingLogList(loginUserSeq);

        Set<Integer> counselorSeqSet = new HashSet<>(); // 상담자 식별키 중복 제거
        for(CounselingLog log : counselingLoglist) {
            int counselorSeq = log.getCounseling().getCounselorSeq();
            counselorSeqSet.add(counselorSeq);
        }

        // 내 상담일지를 작성해준 상담자 목록
        List<CounselorListResponseDto> counselorList = new ArrayList<>();

        for(int counselorSeq : counselorSeqSet) {
            Optional<User> counselor = userRepository.findById(counselorSeq);
            String counselorName = counselor.get().getName();

            CounselorListResponseDto dto = new CounselorListResponseDto(counselorSeq, counselorName);
            counselorList.add(dto);
        }

        return  counselorList;
    }

    // counselorSeq에 해당하는 상담자가 작성해준 내 상담일지 최근순으로 가져오기
    public List<CounselingLogOrderByDateResponseDto> getCounselingLogByOne(int counselorSeq, Principal principal) {
        String loginUser = principal.getName();
        User user = userRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        // clientSeq는 나이고 counselorSeq는 내가 클릭한 상담자인 상담목록 가져오기
        List<CounselingLog> counselingLogList = reserveRepository.getCounselingLogByOne(loginUserSeq, counselorSeq);

        List<CounselingLogOrderByDateResponseDto> counselingLogOrderByDateList = new ArrayList<>();

        for(CounselingLog log : counselingLogList) {
            Optional<User> counselor = userRepository.findById(log.getCounseling().getCounselorSeq());
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
