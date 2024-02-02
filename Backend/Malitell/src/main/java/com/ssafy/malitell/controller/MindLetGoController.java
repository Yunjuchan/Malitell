package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import com.ssafy.malitell.dto.response.mindletgo.MindLetGoResponseDto;
import com.ssafy.malitell.service.MindLetGoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mindLetGo")
@RequiredArgsConstructor
public class MindLetGoController {
    private final MindLetGoService mindLetGoService;

    // MindLetGo 작성
//    @PostMapping("/")
//    public ResponseEntity<Integer> createMindLetGo(@RequestBody MindLetGoRequestDto mindLetGoRequestDto) {
//        return new ResponseEntity<>(mindLetGoService.createMindLetGo(mindLetGoRequestDto), HttpStatus.OK);
//    }

    // MindLetGo 목록
    @GetMapping("/")
    public ResponseEntity<List<MindLetGoResponseDto>> getAllMindLetGos() {
        return new ResponseEntity<>(mindLetGoService.findAll(), HttpStatus.OK);
    }
}
