package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import com.ssafy.malitell.dto.response.mindletgo.MindLetGoListDto;
import com.ssafy.malitell.service.MindLetGoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/mindLetGo")
@RequiredArgsConstructor
public class MindLetGoController {
    private final MindLetGoService mindLetGoService;

    // MindLetGo 작성
    @PostMapping
    public ResponseEntity<?> createMindLetGo(@RequestBody MindLetGoRequestDto mindLetGoRequestDto, Principal principal) {
        String userId = principal.getName();
        mindLetGoService.createMindLetGo(mindLetGoRequestDto, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // MindLetGo 목록
    @GetMapping("/list")
    public ResponseEntity<List<MindLetGoListDto>> getAllMindLetGos() {
        return new ResponseEntity<>(mindLetGoService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/topic")
    private ResponseEntity<?> getMindLetGoTopic() {
        return new ResponseEntity<>(mindLetGoService.getNowTopic(), HttpStatus.OK);
    }
}
