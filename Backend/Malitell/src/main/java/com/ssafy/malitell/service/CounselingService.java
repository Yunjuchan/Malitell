package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.counseling.CounselingLog;
import com.ssafy.malitell.domain.counseling.CounselingReview;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.request.counseling.CounselingLogRequestDto;
import com.ssafy.malitell.dto.request.counseling.CounselingReviewRequestDto;
import com.ssafy.malitell.dto.request.counseling.ReserveRequestDto;
import com.ssafy.malitell.dto.response.counseling.*;
import com.ssafy.malitell.repository.counseling.log.CounselingLogRepository;
import com.ssafy.malitell.repository.counseling.review.CounselingReviewRepository;
import com.ssafy.malitell.repository.counseling.CounselingRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor
public class CounselingService {

    private final CounselingRepository counselingRepository;
    private final UserRepository userRepository;
    private final CounselingLogRepository counselingLogRepository;
    private final CounselingReviewRepository counselingReviewRepository;

    public List<CounselorResponseDto> getCounselorList() {
        List<User> list = userRepository.findByRole("ROLE_COUNSELOR");

        List<CounselorResponseDto> counselorList = new ArrayList<>();
        for (User counselor : list) {
            CounselorResponseDto counselorDto = new CounselorResponseDto(counselor);
            counselorList.add(counselorDto);
        }

        return counselorList;
    }

    public CounselorResponseDto getCounselorInfo(int counselorSeq) {
        Optional<User> counselor = userRepository.findById(counselorSeq);

        if (counselor.isPresent()) {

            // 2. 상담자의 상담후기 목록 가져오기
            List<CounselingReview> counselingReviewList = counselingReviewRepository.getCounselorReviewList(counselorSeq);

            // CounselorResponseDto에 상담자 정보 및 상담후기 목록 세팅
            return new CounselorResponseDto(counselor.get(), counselingReviewList);

        } else {
            throw new NoSuchElementException();
        }
    }

    public int reserve(int counselorSeq, ReserveRequestDto reserveRequestDto, Principal principal) {
        // 로그인한 회원 정보 가져오기
        String clientId = principal.getName();
        User user = userRepository.findByUserId(clientId);

        // 상담자 식별키와 내담자 식별키로 상담 회차 조회
        int round;
        List<Counseling> counselingList = counselingRepository.findByCounselorSeqAndClientSeq(counselorSeq, user.getUserSeq());
        if (counselingList == null) {
            round = 1; // 첫 상담일 때 회차 설정
        } else {
            round = counselingList.size() + 1; // 첫 상담 이후 회차설정
        }

        Counseling counseling = new Counseling(counselorSeq, reserveRequestDto, user, round);
        System.out.println(counseling);
        counselingRepository.save(counseling);
        return counseling.getCounselingSeq();
    }

    public List<ReservationListResponseDto> getAllReservationLists(Principal principal) {
        String userId = principal.getName();
        User loginUser = userRepository.findByUserId(userId);
        int userSeq = loginUser.getUserSeq();

        // 상담자, 내담자 상관없이 내가 참여하는 상담 목록 모두 불러오기
        List<Counseling> list = counselingRepository.findAllBySeq(userSeq);

        List<ReservationListResponseDto> reservationList = new ArrayList<>();

        for (Counseling counseling : list) {

            int clientSeq = counseling.getClientSeq();
            int counselorSeq = counseling.getCounselorSeq();

            User cleint = userRepository.findByUserSeq(clientSeq);
            User counselor = userRepository.findByUserSeq(counselorSeq);

            reservationList.add(new ReservationListResponseDto(counseling, cleint.getName(), counselor.getName()));
        }
        return reservationList;
    }

    public ReservationInfoResponseDto getOneReservationInfo(int counselingSeq, Principal principal) {
        ReservationInfoResponseDto dto = new ReservationInfoResponseDto();

        Optional<Counseling> counseling = counselingRepository.findById(counselingSeq);

        Timestamp counselingDate = counseling.get().getCounselingDate();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String counselingDate1 = sdf.format(counselingDate);

        String counselingSubject = counseling.get().getCounselingSubject();
        String questionList = counseling.get().getQuestionList();

        String loginUserId = principal.getName();
        User loginUser = userRepository.findByUserId(loginUserId);
        int loginUserSeq = loginUser.getUserSeq();
        String role = loginUser.getRole();
        User user = new User();
        ClientResponseDto clientResponseDto = new ClientResponseDto();
        CounselorResponseDto counselorResponseDto = new CounselorResponseDto();
        List<Counseling> previousCounselingList = new ArrayList<>();
        if (role.equals("ROLE_CLIENT")) {
            // 상담자 정보 불러오기
            user = userRepository.findById(counseling.get().getCounselorSeq()).get();
            counselorResponseDto = new CounselorResponseDto(user);

            // 이전 상담 목록 불러오기
            int counselorSeq = user.getUserSeq();
            previousCounselingList = counselingRepository.findAllPreviousCounselingListByClientSeqAndCounselorSeq(loginUserSeq, counselorSeq, counselingSeq);

            dto = new ReservationInfoResponseDto(counselingDate1, counselingSubject, counselorResponseDto, previousCounselingList, questionList);
            return dto;

        } else if (role.equals("ROLE_COUNSELOR")) {
            // 내담자 정보 불러오기
            user = userRepository.findById(counseling.get().getClientSeq()).get();
            clientResponseDto = new ClientResponseDto(user);

            // 이전 상담 목록 불러오기
            int clientSeq = user.getUserSeq();
            previousCounselingList = counselingRepository.findAllPreviousCounselingListByClientSeqAndCounselorSeq(loginUserSeq, clientSeq, counselingSeq);

            dto = new ReservationInfoResponseDto(counselingDate1, counselingSubject, clientResponseDto, previousCounselingList, questionList);
            return dto;

        } else {
            user = null;
            previousCounselingList = null;
            return dto;
        }
    }

    public void cancelReservation(int counselingSeq) {
        counselingRepository.deleteById(counselingSeq);
    }

    public void saveCounselingLog(int counselingSeq, CounselingLogRequestDto counselingLogRequestDto) {
        String content = counselingLogRequestDto.getContent();
        Optional<Counseling> counseling = counselingRepository.findById(counselingSeq);
        if (counseling.isPresent()) {
            CounselingLog counselingLog = new CounselingLog(content, counseling.get());
            counselingLogRepository.save(counselingLog);
        } else {
            throw new NoSuchElementException();
        }
    }

    public List<?> getCounselingLogList(Principal principal) {
        String loginUser = principal.getName();
        User user = counselingRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();
        String role = user.getRole();

        // 나의 상담일지 목록 가져오기
        List<CounselingLog> counselingLoglist = new ArrayList<>();
        if (role.equals("ROLE_CLIENT")) { // 내담자가 나의 상담일지 조회한 경우
            return getCounselingLogListByClient(loginUserSeq);
        } else if (role.equals("ROLE_COUNSELOR")) { // 상담자가 나의 상담일지 조회한 경우
            return getCounselingLogListByCounselor(loginUserSeq);
        } else {
            return null;
        }
    }

    // [내담자] 상담일지 목록 가져오기
    public List<CounselingLogOrderByDateResponseDto1> getCounselingLogListByClient(int loginUserSeq) {
        List<CounselingLogOrderByDateResponseDto1> counselingLogOrderByDateList = new ArrayList<>();

        List<CounselingLog> counselingLogListByClient = counselingRepository.getCounselingLogListOrderByDate1(loginUserSeq);
        for (CounselingLog log : counselingLogListByClient) {
            int counselingLogSeq = log.getCounselingLogSeq();
            int counselorSeq = log.getCounseling().getCounselorSeq();
            Optional<User> counselor = userRepository.findById(counselorSeq);
            String counselorName = counselor.get().getName();

            Timestamp counselingDate = log.getCounseling().getCounselingDate();
            int round = log.getCounseling().getRound();
            String content = log.getContent();

            CounselingLogOrderByDateResponseDto1 dto = new CounselingLogOrderByDateResponseDto1(counselingLogSeq, counselorName, counselingDate, round, content);

            counselingLogOrderByDateList.add(dto);
        }
        return counselingLogOrderByDateList;
    }

    // [상담자] 상담일지 목록 가져오기
    public List<CounselingLogOrderByDateResponseDto2> getCounselingLogListByCounselor(int loginUserSeq) {
        List<CounselingLogOrderByDateResponseDto2> counselingLogOrderByDateList = new ArrayList<>();

        List<CounselingLog> counselingLogListByCounselor = counselingRepository.getCounselingLogListOrderByDate2(loginUserSeq);
        for (CounselingLog log : counselingLogListByCounselor) {
            int counselingLogSeq = log.getCounselingLogSeq();
            int clientSeq = log.getCounseling().getClientSeq();
            Optional<User> client = userRepository.findById(clientSeq);
            String clientName = client.get().getName();

            Timestamp counselingDate = log.getCounseling().getCounselingDate();
            int round = log.getCounseling().getRound();
            String content = log.getContent();

            CounselingLogOrderByDateResponseDto2 dto = new CounselingLogOrderByDateResponseDto2(counselingLogSeq, clientName, counselingDate, round, content);

            counselingLogOrderByDateList.add(dto);
        }
        return counselingLogOrderByDateList;
    }

    public List<String> getNameList(Principal principal) {
        String loginUser = principal.getName();
        User user = counselingRepository.findByUserId(loginUser);
        int loginUserSeq = user.getUserSeq();
        String role = user.getRole();

        // 나의 상담일지 작성해준 상담자명 가져오기
        if (role.equals("ROLE_CLIENT")) {
            // 내담자의 상담일지 목록 가져오기
            List<CounselingLog> counselingLoglist = counselingRepository.getCounselingLogList1(loginUserSeq);

            // 상담자 식별키 중복 제거
            Set<Integer> counselorSeqSet = new HashSet<>();
            for (CounselingLog log : counselingLoglist) {
                int counselorSeq = log.getCounseling().getCounselorSeq();
                counselorSeqSet.add(counselorSeq);
            }

            // 내 상담일지를 작성해준 상담자 목록 (이름순)
            List<String> counselorList = new ArrayList<>();
            for (int counselorSeq : counselorSeqSet) {
                Optional<User> counselor = userRepository.findById(counselorSeq);
                String counselorName = counselor.get().getName();
                counselorList.add(counselorName);
            }
            Collections.sort(counselorList);
            return counselorList;
        }
        // 내가 상담일지 작성해준 내담자명 가져오기
        else if (role.equals("ROLE_COUNSELOR")) {
            // 상담자의 상담일지 목록 가져오기
            List<CounselingLog> counselingLoglist = counselingRepository.getCounselingLogList2(loginUserSeq);

            // 내담자 식별키 중복 제거
            Set<Integer> clientSeqSet = new HashSet<>();
            for (CounselingLog log : counselingLoglist) {
                int clinetSeq = log.getCounseling().getClientSeq();
                clientSeqSet.add(clinetSeq);
            }

            // 내가 상담일지를 작성해준 내담자 목록 (이름순)
            List<String> clientList = new ArrayList<>();
            for (int clientSeq : clientSeqSet) {
                Optional<User> client = userRepository.findById(clientSeq);
                String clientName = client.get().getName();
                clientList.add(clientName);
            }
            Collections.sort(clientList);
            return clientList;
        } else {
            return null;
        }
    }

    public CounselingLogResponseDto getOneCounselingLog(int counselingLogSeq, Principal principal) {
        Optional<CounselingLog> counselingLog = counselingLogRepository.findById(counselingLogSeq);
        if (counselingLog.isPresent()) {
            int counselingSeq = counselingLog.get().getCounseling().getCounselingSeq();

            String loginUserId = principal.getName();
            User user = userRepository.findByUserId(loginUserId);
            String role = user.getRole();
            String name = "";
            if (role.equals("ROLE_CLIENT")) { // 로그인한 유저가 내담자일 때 -> 상담자명 가져오기
                int counselorSeq = counselingLog.get().getCounseling().getCounselorSeq();
                Optional<User> counselor = userRepository.findById(counselorSeq);
                name = counselor.get().getName(); // 상담자명
            } else if (role.equals("ROLE_COUNSELOR")) {
                int clientSeq = counselingLog.get().getCounseling().getClientSeq();
                Optional<User> client = userRepository.findById(clientSeq);
                name = client.get().getName(); // 내담자명
            } else {
                name = "";
            }

            Timestamp counselingDate = counselingLog.get().getCounseling().getCounselingDate();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String counselingDate1 = sdf.format(counselingDate);
            int round = counselingLog.get().getCounseling().getRound();
            String content = counselingLog.get().getContent();

            CounselingLogResponseDto counselingLogResponseDto = new CounselingLogResponseDto(counselingLogSeq, counselingSeq, name, counselingDate1, round, content);
            return counselingLogResponseDto;
        } else {
            throw new NoSuchElementException();
        }
    }

    @Transactional
    public void writeCounselingReview(CounselingReviewRequestDto counselingReviewRequestDto, Principal principal) {
        String clientId = principal.getName();
        User client = counselingRepository.findByUserId(clientId);
        int clientSeq = client.getUserSeq();
        int counselorSeq = counselingReviewRequestDto.getCounselorSeq();
        String content = counselingReviewRequestDto.getContent();
        int grade = counselingReviewRequestDto.getGrade();

        CounselingReview counselingReview = new CounselingReview(clientSeq, counselorSeq, content, grade);
        counselingReviewRepository.save(counselingReview);

        // 상담자 평점 업데이트
        List<CounselingReview> counselorReviewList = counselingRepository.counselorReviewList(counselorSeq);

        int sum = 0;
        for (CounselingReview review : counselorReviewList) {
            sum += review.getGrade();
        }
        double avg = Double.parseDouble(String.format("%.1f", (double) sum / counselorReviewList.size()));

        Optional<User> counselor = userRepository.findById(counselorSeq);
        if (counselor.isPresent()) {
            counselor.get().setGrade(avg);
        } else {
            throw new NoSuchElementException();
        }
    }

    // [내담자] 내가 작성한 상담후기 목록 가져오기
    public List<CounselorReviewResponseDto> getCounselingReviewList(Principal principal) {
        List<CounselorReviewResponseDto> counselingReviewList = new ArrayList<>();

        String loginUserId = principal.getName();
        User user = userRepository.findByUserId(loginUserId);
        int loginUserSeq = user.getUserSeq();

        List<CounselingReview> myCounselingReviewList = counselingReviewRepository.getMyReviewList(loginUserSeq);
        for (CounselingReview review : myCounselingReviewList) {
            int counselorSeq = review.getCounselorSeq();
            Optional<User> client = userRepository.findById(counselorSeq);
            String counselorName = client.get().getName();

            String content = review.getContent();
            double grade = review.getGrade();

            CounselorReviewResponseDto dto = new CounselorReviewResponseDto(counselorName, content, grade);
            counselingReviewList.add(dto);
        }
        return counselingReviewList;
    }

    // 내가 상담후기를 작성한 상담자명 가져오기
    public List<String> getCounselorNameList(Principal principal) {
        String loginUserId = principal.getName();
        User user = userRepository.findByUserId(loginUserId);
        int loginUserSeq = user.getUserSeq();

        // 상담자 이름 중복 제거
        Set<String> counselorNameSet = new HashSet<>();
        List<CounselingReview> myCounselingReviewList = counselingReviewRepository.getMyCounselingReviewList(loginUserSeq);
        for (CounselingReview review : myCounselingReviewList) {
            int counselorSeq = review.getCounselorSeq();
            Optional<User> counselor = userRepository.findById(counselorSeq);
            String counselorName = counselor.get().getName();
            counselorNameSet.add(counselorName);
        }

        // 내가 상담후기를 작성한 상담자명 목록 (이름순)
        List<String> counselorNameList = new ArrayList<>();
        for (String counselorName : counselorNameSet) {
            counselorNameList.add(counselorName);
        }
        Collections.sort(counselorNameList);
        return counselorNameList;
    }

    public void deleteCounselingReview(int counselingReviewSeq) {
        counselingReviewRepository.deleteById(counselingReviewSeq);
    }

}
