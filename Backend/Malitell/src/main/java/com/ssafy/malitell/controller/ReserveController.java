package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.ReserveRequestDto;
import com.ssafy.malitell.dto.response.ReservationListResponseDto;
import com.ssafy.malitell.service.ReserveService;
import jakarta.servlet.http.HttpServletRequest;
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

    // 내담자 - 상담 예약 조회 (마이페이지-나의예약)
    @GetMapping("/mypage/reserve")
    public ResponseEntity<List<ReservationListResponseDto>> getAllReservationLists(HttpServletRequest request, Principal principal) {
        List<ReservationListResponseDto> list = reserveService.getAllReservationLists(request, principal);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 상담자 - 상담 예약 조회 (마이페이지-나의예약)
//    @GetMapping("/mypage/reserve")
//    public ResponseEntity<List<ReservationListResponseDto>> getAllReservationLists(Principal principal) {
//        List<ReservationListResponseDto> list = reserveService.getAllReservationLists(principal);
//
//        return new ResponseEntity<>(list, HttpStatus.OK);
//    }

}
