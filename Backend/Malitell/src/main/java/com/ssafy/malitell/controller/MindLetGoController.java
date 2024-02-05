package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import com.ssafy.malitell.service.MindLetGoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mindLetGo")
@RequiredArgsConstructor
@EnableScheduling
public class MindLetGoController {
    private final MindLetGoService mindLetGoService;


    // MinLetGo 주제 랜덤 변경
    @Scheduled(fixedRate = 1209600000)
    @GetMapping("/updateTopic")
    public void updateTopic() {
        mindLetGoService.deleteAll();
        mindLetGoService.updateTopic();
    }

    // MindLetGo 작성
    @PostMapping
    public ResponseEntity<?> createMindLetGo(@RequestBody MindLetGoRequestDto mindLetGoRequestDto) {
        mindLetGoRequestDto.setMindLetGoTopicSeq(mindLetGoService.findTopic());
        mindLetGoService.createMindLetGo(mindLetGoRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // MindLetGo 목록
    @GetMapping("/list")
    public ResponseEntity<List<MindLetGo>> getAllMindLetGos() {
        return new ResponseEntity<>(mindLetGoService.findAll(), HttpStatus.OK);
    }
}
