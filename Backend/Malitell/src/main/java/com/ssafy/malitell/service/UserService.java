package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.domain.tag.StatusTag;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.auth.PasswordRequestDto;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.dto.request.user.ClientUpdateRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorJoinRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorUpdateRequestDto;
import com.ssafy.malitell.dto.response.board.MyBoardListResponseDto;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.response.user.CounselorResponseDto;
import com.ssafy.malitell.dto.response.user.UserResponseDto;
import com.ssafy.malitell.repository.board.community.CommunityRepository;
import com.ssafy.malitell.repository.board.gathering.GatheringRepository;
import com.ssafy.malitell.repository.board.overcoming.OverComingRepository;
import com.ssafy.malitell.repository.counseling.CounselingRepository;
import com.ssafy.malitell.repository.tag.StatusTagRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final CounselingRepository counselingRepository;
    private final GatheringRepository gatheringRepository;
    private final CommunityRepository communityRepository;
    private final OverComingRepository overComingRepository;
    private final StatusTagRepository statusTagRepository;


    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Transactional
    public void joinClient(ClientJoinRequestDto clientJoinRequestDto) {
        String userId = clientJoinRequestDto.getUserId();

        Boolean isExist = userRepository.existsByUserId(userId);

        if (isExist) {
            return;
        }

        User user = new User();

        user.setUserId(clientJoinRequestDto.getUserId());
        user.setName(clientJoinRequestDto.getName());
        user.setNickname(clientJoinRequestDto.getNickname());
        // 회원가입 시 반드시 패스워드 암호화 처리할 것!
        // 스프링 시큐리티에서 로그인 검증 시 입력된 패스워드를 해시화를 통해 암호화한 후 비교하기 때문!!
        user.setPassword(bCryptPasswordEncoder.encode(clientJoinRequestDto.getPassword()));
        user.setEmail(clientJoinRequestDto.getEmail());
        user.setPhone(clientJoinRequestDto.getPhone());
        user.setBirth(clientJoinRequestDto.getBirth());
        user.setGender(clientJoinRequestDto.getGender());
        user.setRole(clientJoinRequestDto.getRole());

        userRepository.save(user);
    }

    @Transactional
    public void joinCounselor(CounselorJoinRequestDto counselorJoinRequestDto) {
        
        // 중복 검증
        String userId = counselorJoinRequestDto.getUserId();
        Boolean isExist = userRepository.existsByUserId(userId);

        if (isExist) {
            return;
        }
        User user = new User();
        user.setUserId(counselorJoinRequestDto.getUserId());
        user.setName(counselorJoinRequestDto.getName());
        user.setNickname(counselorJoinRequestDto.getNickname());
        // 회원가입 시 반드시 패스워드 암호화 처리할 것!
        // 스프링 시큐리티에서 로그인 검증 시 입력된 패스워드를 해시화를 통해 암호화한 후 비교하기 때문!!
        user.setPassword(bCryptPasswordEncoder.encode(counselorJoinRequestDto.getPassword()));
        user.setEmail(counselorJoinRequestDto.getEmail());
        user.setPhone(counselorJoinRequestDto.getPhone());
        user.setBirth(counselorJoinRequestDto.getBirth());
        user.setGender(counselorJoinRequestDto.getGender());
        user.setCareerPeriod(counselorJoinRequestDto.getCareerPeriod());
        user.setRole(counselorJoinRequestDto.getRole());

        userRepository.save(user);
    }

    public UserResponseDto findUserInfo(String userId) {
        User findUser = userRepository.findByUserId(userId);
        return new UserResponseDto(findUser);

    }

    public User findUser(String userId) {
        return userRepository.findByUserId(userId);
    }

    @Transactional(readOnly = true)
    public User findByUserSeq(int userSeq) {
        return userRepository.findByUserSeq(userSeq);
    }

    @Transactional
    public void updateClientInfo(String userId, ClientUpdateRequestDto clientUpdateRequestDto) {
        User user = userRepository.findByUserId(userId);
        List<StatusTag> statusTags = new ArrayList<>();
        List<Integer> statusTagSeqs = clientUpdateRequestDto.getStatusTags();
        for (int seq : statusTagSeqs) {
            statusTags.add(statusTagRepository.findById(seq).get());
        }
        user.updateClient(clientUpdateRequestDto, statusTags);
        user.updateProfileImg(clientUpdateRequestDto.getProfileImg());
    }

    @Transactional
    public void updateCounselorInfo(String userId, CounselorUpdateRequestDto counselorRequestDto) {
        User user = userRepository.findByUserId(userId);
        user.updateCounselor(counselorRequestDto);
    }

    @Transactional
    public void deleteUser(String userId) {
        User user = userRepository.findByUserId(userId);
        int userSeq = user.getUserSeq();
        userRepository.deleteById(userSeq);
    }

    public boolean checkIdDuplicate(String userId) {
        return userRepository.findByUserId(userId) != null;
    }

    @Transactional
    public void updatePassword(String userId, PasswordRequestDto passwordRequestDto) {
        User user = userRepository.findByUserId(userId);
        String password = passwordRequestDto.getPassword();
        String encodePassword = passwordEncoder.encode(password);
        user.updatePassword(encodePassword);
    }

    @Transactional
    public void sendAlarm() {
        List<Counseling> allCounseling = counselingRepository.findAll();
        for (Counseling counseling : allCounseling) {
            Timestamp counselingDate = counseling.getCounselingDate();
            LocalDateTime localDateTime = counselingDate.toLocalDateTime();
            LocalDate today = LocalDate.now();

            if (localDateTime.toLocalDate().equals(today)) {
                System.out.println("현재 Timestamp는 오늘 날짜입니다.");
                int clientSeq = counseling.getClientSeq();
                int counselorSeq = counseling.getCounselorSeq();

                User findClient = userRepository.findByUserSeq(clientSeq);
                User findCounselor = userRepository.findByUserSeq(counselorSeq);

                findClient.setAlramMessage("오늘 상담이 있는 날입니다.");
                findClient.setReadCheck(1);

                findCounselor.setAlramMessage("오늘 상담이 있는 날입니다.");
                findCounselor.setReadCheck(1);

            } else {
                System.out.println("현재 Timestamp는 오늘 날짜가 아닙니다.");
                return;
            }

        }
    }

    @Transactional
    public String readMemo(String userId) {
        User findUser = userRepository.findByUserId(userId);
        findUser.setReadCheck(0);
        return findUser.getAlramMessage();
    }

    public ResponseEntity<?> getAllBoards(String userId) {
        User findUser = userRepository.findByUserId(userId);

        List<Gathering> gatheringByUser = gatheringRepository.findGatheringByUser(findUser);
        List<OverComing> overComingByUser = overComingRepository.findOverComingByUser(findUser);
        List<Community> communityByUser = communityRepository.findCommunityByUser(findUser);

        return new ResponseEntity<>(new MyBoardListResponseDto(gatheringByUser, overComingByUser, communityByUser), HttpStatus.OK);
    }

    public String getProfileImg(String userId) {
        User findUser = userRepository.findByUserId(userId);
        System.out.println(findUser);
        return findUser.getProfileImg();
    }
}
