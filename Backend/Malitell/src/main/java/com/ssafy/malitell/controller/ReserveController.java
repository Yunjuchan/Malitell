package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.response.reserve.ReserveDto;
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
    }

}
