package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.request.scrap.ScrapRequestDto;
import com.ssafy.malitell.service.ScrapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/scrap")
@RequiredArgsConstructor
public class ScrapController {
    private final ScrapService scrapService;

    @GetMapping
    public ResponseEntity<?> createScrap(@RequestBody ScrapRequestDto scrapRequestDto, Principal principal) {
        scrapService.createScrap(scrapRequestDto, principal);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteScrap(@RequestBody ScrapRequestDto scrapRequestDto) {
        scrapService.deleteScrap(scrapRequestDto.getGatheringSeq());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
