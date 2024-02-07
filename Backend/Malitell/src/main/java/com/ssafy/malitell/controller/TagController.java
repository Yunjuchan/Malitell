package com.ssafy.malitell.controller;

import com.ssafy.malitell.service.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/mypage/tag")
@RequiredArgsConstructor
public class TagController {
    private final TagService tagService;

    // 회원 태그 설정, 수정, 삭제
    @PostMapping
    public ResponseEntity<?> selectTag(Principal principal, @RequestBody List<Integer> statusTags) {
        tagService.selectTag(principal, statusTags);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
