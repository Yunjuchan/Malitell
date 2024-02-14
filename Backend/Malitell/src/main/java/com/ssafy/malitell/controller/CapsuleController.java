package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.response.capsule.CapsuleResponseDto;
import com.ssafy.malitell.service.CapsuleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/capsule")
@RequiredArgsConstructor
public class CapsuleController {

    private final CapsuleService capsuleService;

    @GetMapping("/get")
    public ResponseEntity<CapsuleResponseDto> getCapsule() {
        return new ResponseEntity<>(capsuleService.getContent(), HttpStatus.OK);
    }
}
