package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.counseling.CounselingReview;
import com.ssafy.malitell.dto.request.reserve.CounselingReviewRequestDto;
import com.ssafy.malitell.dto.request.reserve.ReserveRequestDto;
import com.ssafy.malitell.dto.response.reserve.CounselingLogOrderByDateResponseDto1;
import com.ssafy.malitell.dto.response.reserve.CounselorListResponseDto;
import com.ssafy.malitell.dto.response.reserve.ReservationListResponseDto;
import com.ssafy.malitell.service.ReserveService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReserveController {

    private final ReserveService reserveService;

    // 상담자 프로필 목록 조회
    @GetMapping("/getCounselorList")
    public ResponseEntity<List<CounselorListResponseDto>> getCounselorList() {
        List<CounselorListResponseDto> list = reserveService.getCounselorList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 상담 예약 폼 조회
    @GetMapping("/reserve/{counselorSeq}")
    public ResponseEntity<Void> reserve(@PathVariable int counselorSeq) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 상담 예약
    @PostMapping("/reserve/{counselorSeq}")
    public ResponseEntity<Integer> reserve(@PathVariable int counselorSeq, @RequestBody ReserveRequestDto reserveRequestDtoDto, Principal principal) {
        int counselingSeq = reserveService.reserve(counselorSeq, reserveRequestDtoDto, principal);
        return new ResponseEntity<>(counselingSeq, HttpStatus.OK);
    }

    // [내담자/상담자] - 상담 예약 조회 (마이페이지-나의예약)
    @GetMapping("/mypage/reserve")
    public ResponseEntity<List<ReservationListResponseDto>> getAllReservationLists(Principal principal) {
        List<ReservationListResponseDto> list = reserveService.getAllReservationLists(principal);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // [내담자/상담자] 나의 상담일지 목록 조회
    // 마이페이지-나의상담일지 -> 디폴트는 최근순
    @GetMapping("/mypage/counselingLog/{filter}")
    public ResponseEntity<?> getCounselingLogList(@PathVariable String filter, Principal principal) {
        if(filter.equals("최근순")) {
            List<?> list = reserveService.getCounselingLogListOrderByDate(principal);
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else if( filter.equals("이름순")) {
            List<?> list = reserveService.getListOrderByName(principal);
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // [내담자/상담자] 나의 상담일지 - 이름순
    // 이름 클릭 시 상담일지 최근순으로 반환
    @GetMapping("/mypage/counselingLog/이름순/{userSeq}")
    public ResponseEntity<List<?>> getCounselingLogsForOne(@PathVariable int userSeq, Principal principal) {
        List<?> list = reserveService.getCounselingLogsForOne(userSeq, principal);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 상담일지 상세조회
//    @GetMapping("/mypage/counselingLog/{filter}/{counselingLogSeq}")
//    public ResponseEntity<?> getOneCounselingLog(@PathVariable int counselingLogSeq, Principal principal) {
//        reserveService.getOneCounselingLog(counselingLogSeq, principal);
//    }

    // 상담후기 작성
    @PostMapping("/counseling/review/{counselingSeq}")
    public ResponseEntity<Void> writeCounselingReview(@PathVariable int counselingSeq, @RequestBody CounselingReviewRequestDto counselingReviewRequestDto) {
        reserveService.writeCounselingReview(counselingSeq, counselingReviewRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 상담후기 조회
    @GetMapping("/getCounselorList/{counselorSeq}")
    public ResponseEntity<List<CounselingReview>> getCounselingReviewList(@PathVariable int counselorSeq) {
        List<CounselingReview> list = reserveService.getCounselingReviewList(counselorSeq);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 상담후기 삭제
//    @DeleteMapping()
//    public ResponseEntity<> deleteCounselingReview() {
//
//    }

}
