package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.response.SelfHelpGroupResponseDto;
import com.ssafy.malitell.service.SelfHelpGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class SelfHelpGroupController {
    private final SelfHelpGroupService selfHelpGroupService;

    // 자조모임 참가
    @PostMapping("/selfHelpGroup/participate")
    public ResponseEntity<?> participate(int GatheringSeq, Principal principal) {
        selfHelpGroupService.participate(GatheringSeq, principal);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    // 자조모임 조회
    @GetMapping("/mypage/selfHelpGroup/all")
    public ResponseEntity<List<SelfHelpGroupResponseDto>> getAllSelfHelpGroups(Principal principal) {
        List<SelfHelpGroupResponseDto> selfHelpGroupList = selfHelpGroupService.getAllSelfHelpGroups(principal);
        return new ResponseEntity<>(selfHelpGroupList, HttpStatus.OK);
    }

    // 자조모임 삭제
    @DeleteMapping("/mypage/selfHelpGroup/leave/{selfHelpGroupSeq}")
    public ResponseEntity<?> leaveSelfHelpGroup(@PathVariable int selfHelpGroupSeq, Principal principal) {
        selfHelpGroupService.leaveSelfHelpGroup(selfHelpGroupSeq, principal);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
