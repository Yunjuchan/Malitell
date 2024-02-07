package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.reserve.CounselingLogRequestDto;
import com.ssafy.malitell.dto.request.reserve.CounselingReviewRequestDto;
import com.ssafy.malitell.dto.request.reserve.ReserveRequestDto;
import com.ssafy.malitell.dto.response.reserve.*;
import com.ssafy.malitell.service.ReserveService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<List<CounselorResponseDto>> getCounselorList() {
        List<CounselorResponseDto> list = reserveService.getCounselorList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 상담자 상세 조회
    @GetMapping("/getCounselor/{counselorSeq}")
    public ResponseEntity<CounselorResponseDto> getCounselorInfo(@PathVariable int counselorSeq) {
        CounselorResponseDto counselorResponseDto = reserveService.getCounselorInfo(counselorSeq);
        return new ResponseEntity<>(counselorResponseDto, HttpStatus.OK);
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

    // [내담자/상담자] 상담 예약 상세 조회


    // [내담자] 상담 예약 취소


    // [상담자] 상담일지 저장
    @PostMapping("/counseling/saveCounselingLog/{counselingSeq}")
    public ResponseEntity<Void> saveCounselingLog(@PathVariable int counselingSeq, @RequestBody CounselingLogRequestDto counselingLogRequestDto) {
        reserveService.saveCounselingLog(counselingSeq, counselingLogRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // [내담자/상담자] 마이페이지 - 나의 상담일지 목록 조회
    // 상담일지 목록이랑 상담자명 목록 DTO에 담아서 return
    @GetMapping("/mypage/counselingLog")
    public ResponseEntity<MyCounselingLogResponseDto> getCounselingLogListAndNameList(Principal principal) {
        List<?> counselingLogList = reserveService.getCounselingLogList(principal);
        List<String> nameList = reserveService.getNameList(principal);
        // dto에 담기
        MyCounselingLogResponseDto myCounselingLogResponseDto = new MyCounselingLogResponseDto(counselingLogList, nameList);
        return new ResponseEntity<>(myCounselingLogResponseDto, HttpStatus.OK);
    }

    // [내담자/상담자] 상담일지 상세조회
    @GetMapping("/mypage/counselingLog/{counselingLogSeq}")
    public ResponseEntity<CounselingLogResponseDto> getOneCounselingLog(@PathVariable int counselingLogSeq, Principal principal) {
        CounselingLogResponseDto counselingLogResponseDto = reserveService.getOneCounselingLog(counselingLogSeq, principal);
        return new ResponseEntity<>(counselingLogResponseDto, HttpStatus.OK);
    }

    // 상담후기 작성
    @PostMapping("/counseling/review/{counselingSeq}")
    public ResponseEntity<Void> writeCounselingReview(@PathVariable int counselingSeq, @RequestBody CounselingReviewRequestDto counselingReviewRequestDto) {
        reserveService.writeCounselingReview(counselingSeq, counselingReviewRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // [내담자] 마이페이지 - 나의 상담후기 조회
    // 상담후기 목록이랑 상담자명 목록 DTO에 담아서 return
    @GetMapping("/mypage/counselingReviewList")
    public ResponseEntity<MyCounselingReviewResponseDto> getCounselingReviewListAndCounselorList(Principal principal) {
        List<CounselorReviewResponseDto> counselingReviewList = reserveService.getCounselingReviewList(principal);
        List<String> counselorList = reserveService.getCounselorNameList(principal);
        // dto에 담기
        MyCounselingReviewResponseDto myCounselingReviewResponseDto = new MyCounselingReviewResponseDto(counselingReviewList, counselorList);
        return new ResponseEntity<>(myCounselingReviewResponseDto, HttpStatus.OK);
    }

    // 상담후기 삭제
    @DeleteMapping("/mypage/counselingReviewList/{counselingReviewSeq}")
    public ResponseEntity<Void> deleteCounselingReview(@PathVariable int counselingReviewSeq) {
        reserveService.deleteCounselingReview(counselingReviewSeq);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
