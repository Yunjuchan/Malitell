package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.reserve.ReserveRequestDto;
import com.ssafy.malitell.dto.response.reserve.*;
import com.ssafy.malitell.repository.ReserveRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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

    public List<?> getCounselingLogListOrderByDate(Principal principal) {
        String loginUser = principal.getName();

        User user = reserveRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        List<CounselingLog> counselingLoglist = new ArrayList<>();

        String role = user.getRole();
        System.out.println("권한 : " + role);
        if(role.equals("ROLE_CLIENT")) { // 내담자가 상담일지(최근순)을 조회한 경우

            counselingLoglist = reserveRepository.getCounselingLogListOrderByDate1(loginUserSeq);

            List<CounselingLogOrderByDateResponseDto1> counselingLogOrderByDateList1 = new ArrayList<>();

            for(CounselingLog log : counselingLoglist) {
                int counselorSeq = log.getCounseling().getCounselorSeq();
                Optional<User> counselor = userRepository.findById(counselorSeq);
                String counselorName = counselor.get().getName();

                Timestamp counselingDate = log.getCounseling().getCounselingDate();
                int round = log.getCounseling().getRound();
                String content = log.getContent();

                CounselingLogOrderByDateResponseDto1 dto = new CounselingLogOrderByDateResponseDto1(counselorName, counselingDate, round, content);

                counselingLogOrderByDateList1.add(dto);
            }

            return counselingLogOrderByDateList1;

        } else if(role.equals("ROLE_COUNSELOR")) { // 상담자가 상담일지(최근순)을 조회한 경우

            counselingLoglist = reserveRepository.getCounselingLogListOrderByDate2(loginUserSeq);
            System.out.println("[상담자] 상담일지 조회(최근순) : " + counselingLoglist);

            List<CounselingLogOrderByDateResponseDto2> counselingLogOrderByDateList2 = new ArrayList<>();

            for(CounselingLog log : counselingLoglist) {
                int clientSeq = log.getCounseling().getClientSeq();
                Optional<User> client = userRepository.findById(clientSeq);
                String clientName = client.get().getName();

                Timestamp counselingDate = log.getCounseling().getCounselingDate();
                int round = log.getCounseling().getRound();
                String content = log.getContent();

                CounselingLogOrderByDateResponseDto2 dto = new CounselingLogOrderByDateResponseDto2(clientName, counselingDate, round, content);

                counselingLogOrderByDateList2.add(dto);
            }

            return counselingLogOrderByDateList2;

        } else {
            System.out.println("상담일지가 없습니다.");
            return null;
        }
    }

    public List<?> getListOrderByName(Principal principal) {
        String loginUser = principal.getName();

        User user = reserveRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        String role = user.getRole();
        if(role.equals("ROLE_CLIENT")) {

            // 내담자의 상담일지 목록 가져오기
            List<CounselingLog> counselingLoglist = reserveRepository.getCounselingLogList1(loginUserSeq);

            // 상담자 식별키 중복 제거
            Set<Integer> counselorSeqSet = new HashSet<>();
            for(CounselingLog log : counselingLoglist) {
                int counselorSeq = log.getCounseling().getCounselorSeq();
                counselorSeqSet.add(counselorSeq);
            }

            // 내 상담일지를 작성해준 상담자 목록 (이름순)
            List<String> counselorList = new ArrayList<>();

            for(int counselorSeq : counselorSeqSet) {
                Optional<User> counselor = userRepository.findById(counselorSeq);
                String counselorName = counselor.get().getName();
                counselorList.add(counselorName);
            }

            Collections.sort(counselorList);
            return counselorList;

        } else if(role.equals("ROLE_COUNSELOR")) {

            // 상담자의 상담일지 목록 가져오기
            List<CounselingLog> counselingLoglist = reserveRepository.getCounselingLogList2(loginUserSeq);

            // 내담자 식별키 중복 제거
            Set<Integer> clientSeqSet = new HashSet<>();
            for(CounselingLog log : counselingLoglist) {
                int clinetSeq = log.getCounseling().getClientSeq();
                clientSeqSet.add(clinetSeq);
            }

            // 내가 상담일지를 작성해준 내담자 목록 (이름순)
            List<String> clientList = new ArrayList<>();

            for(int clientSeq : clientSeqSet) {
                Optional<User> client = userRepository.findById(clientSeq);
                String clientName = client.get().getName();
                clientList.add(clientName);
            }

            Collections.sort(clientList);
            return clientList;

        } else {
            System.out.println("상담일지가 없습니다.");
            return null;
        }
    }

    // [내담자] userSeq에 해당하는 상담자가 작성해준 내 상담일지 최근순으로 가져오기
    // [상담자] userSeq에 해당하는 내담자의 상담일지 최근순으로 가져오기
    public List<?> getCounselingLogsForOne(int userSeq, Principal principal) {
        String loginUser = principal.getName();
        User user = userRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();

        String role = user.getRole();
        if(role.equals("ROLE_CLIENT")) {

            // 내담자가 클릭한 상담자의 상담목록 가져오기
            List<CounselingLog> counselingLogList = reserveRepository.getCounselingLogsForOne1(loginUserSeq, userSeq); // (내담자Seq, 상담자Seq)

            List<CounselingLogOrderByDateResponseDto1> counselingLogOrderByDateList = new ArrayList<>();

            for(CounselingLog log : counselingLogList) {
                Optional<User> counselor = userRepository.findById(log.getCounseling().getCounselorSeq());
                String counselorName = counselor.get().getName();

                Timestamp counselingDate = log.getCounseling().getCounselingDate();
                int round = log.getCounseling().getRound();
                String content = log.getContent();

                CounselingLogOrderByDateResponseDto1 dto = new CounselingLogOrderByDateResponseDto1(counselorName, counselingDate, round, content);
                counselingLogOrderByDateList.add(dto);
            }

            return counselingLogOrderByDateList;

        } else if(role.equals("ROLE_COUNSELOR")) {

            // 상담자가 클릭한 내담자의 상담목록 가져오기
            List<CounselingLog> counselingLogList = reserveRepository.getCounselingLogsForOne2(loginUserSeq, userSeq); // (상담자Seq, 내담자Seq)

            List<CounselingLogOrderByDateResponseDto2> counselingLogOrderByDateList = new ArrayList<>();

            for(CounselingLog log : counselingLogList) {
                Optional<User> client = userRepository.findById(log.getCounseling().getClientSeq());
                String clientName = client.get().getName();

                Timestamp counselingDate = log.getCounseling().getCounselingDate();
                int round = log.getCounseling().getRound();
                String content = log.getContent();

                CounselingLogOrderByDateResponseDto2 dto = new CounselingLogOrderByDateResponseDto2(clientName, counselingDate, round, content);
                counselingLogOrderByDateList.add(dto);
            }

            return counselingLogOrderByDateList;

        } else {
            System.out.println("상담일지가 없습니다.");
            return null;
        }

//        // clientSeq는 나이고 counselorSeq는 내가 클릭한 상담자인 상담목록 가져오기
//        List<CounselingLog> counselingLogList = reserveRepository.getCounselingLogByOne(loginUserSeq, counselorSeq);
//
//        List<CounselingLogOrderByDateResponseDto1> counselingLogOrderByDateList = new ArrayList<>();
//
//        for(CounselingLog log : counselingLogList) {
//            Optional<User> counselor = userRepository.findById(log.getCounseling().getCounselorSeq());
//            String counselorName = counselor.get().getName();
//
//            Timestamp counselingDate = log.getCounseling().getCounselingDate();
//            int round = log.getCounseling().getRound();
//            String content = log.getContent();
//
//            CounselingLogOrderByDateResponseDto1 dto = new CounselingLogOrderByDateResponseDto1(counselorName, counselingDate, round, content);
//
//            counselingLogOrderByDateList.add(dto);
//        }
//
//        return counselingLogOrderByDateList;
    }

}
