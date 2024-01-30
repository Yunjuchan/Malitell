package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.ReserveDto;
import com.ssafy.malitell.service.ReserveService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ReserveController {

    private final ReserveService reserveService;

    @GetMapping("/reserve")
    public String goReservePage() {
        return "counseling reserve";
    }

    @PostMapping("/reserve")
    public void reserve(@RequestBody ReserveDto reserveDto) {
        reserveService.reserve(reserveDto);

//        if(flag) {
//            System.out.println("[상담 예약 완료]");
//            return "상담 예약 완료";
//        } else {
//            System.out.println("[상담 예약 실패]");
//            return "상담 예약 실패";
//        }
    }

}
