package com.ssafy.malitell.controller;

import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.dto.request.scrap.ScrapRequestDto;
import com.ssafy.malitell.dto.response.board.gathering.GatheringScrapResponseDto;
import com.ssafy.malitell.service.ScrapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ScrapController {
    private final ScrapService scrapService;

    @PostMapping("/scrap")
    public ResponseEntity<?> createScrap(@RequestBody ScrapRequestDto scrapRequestDto, Principal principal) {
        scrapService.createScrap(scrapRequestDto, principal);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/scrap/{scrapSeq}")
    public ResponseEntity<?> deleteScrap(@PathVariable int scrapSeq) {
        scrapService.deleteScrap(scrapSeq);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/mypage/scrap")
    public ResponseEntity<List<GatheringScrapResponseDto>> gatheringList(Principal principal) {
        String userId = principal.getName();
        List<Gathering> gatheringList = scrapService.gatheringList(userId);
        List<GatheringScrapResponseDto> gatheringScrapResponseDtoList = new ArrayList<>();

        for (Gathering gathering : gatheringList) {
            gatheringScrapResponseDtoList.add(new GatheringScrapResponseDto(gathering.getGatheringSeq(), gathering.getTitle(), gathering.getSelfHelpGroup().getSelfHelpType()));
        }

        return new ResponseEntity<>(gatheringScrapResponseDtoList, HttpStatus.OK);
    }
}
