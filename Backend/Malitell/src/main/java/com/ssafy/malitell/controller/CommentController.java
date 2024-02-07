package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.board.CommentRequestDto;
import com.ssafy.malitell.dto.response.board.CommentResponseDto;
import com.ssafy.malitell.service.CommunityCommentService;
import com.ssafy.malitell.service.GatheringCommentService;
import com.ssafy.malitell.service.OverComingCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {

    private final GatheringCommentService gatheringCommentService;
    private final OverComingCommentService overComingCommentService;
    private final CommunityCommentService communityCommentService;


    @PostMapping("/gathering")
    public ResponseEntity<?> createGatheringComment(@RequestBody CommentRequestDto commentRequestDto) {
        System.out.println(commentRequestDto);
        gatheringCommentService.register(commentRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/overComing")
    public ResponseEntity<?> createOverComingComment(@RequestBody CommentRequestDto commentRequestDto) {
        System.out.println(commentRequestDto);
        overComingCommentService.register(commentRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);


    }

    @PostMapping("/community")
    public ResponseEntity<?> createCommunityComment(@RequestBody CommentRequestDto commentRequestDto) {
        System.out.println(commentRequestDto);
        communityCommentService.register(commentRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);

    }

//    @GetMapping("/gathering")
//    public ResponseEntity<?> getGatheringComment(int boardSeq) {
//        List<CommentResponseDto> allGatheringComment = gatheringCommentService.getAllGatheringComment(boardSeq);
//        return new ResponseEntity<>(allGatheringComment, HttpStatus.OK);
//    }
//
//    @GetMapping("/overComing")
//    public ResponseEntity<?> getOverComingComment(int boardSeq) {
//        List<CommentResponseDto> allOverComingComment = overComingCommentService.getAllOverComingComment(boardSeq);
//        return new ResponseEntity<>(allOverComingComment, HttpStatus.OK);
//    }
//
//    @GetMapping("/community")
//    public ResponseEntity<?> getCommunityComment(int boardSeq) {
//        List<CommentResponseDto> allCommunityComment = communityCommentService.getAllCommunityComment(boardSeq);
//        return new ResponseEntity<>(allCommunityComment, HttpStatus.OK);
//    }
}
