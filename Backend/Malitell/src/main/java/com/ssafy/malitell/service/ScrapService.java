package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import com.ssafy.malitell.domain.scrap.Scrap;
import com.ssafy.malitell.dto.request.scrap.ScrapRequestDto;
import com.ssafy.malitell.repository.GatheringRepository;
import com.ssafy.malitell.repository.ScrapRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ScrapService {
    private final ScrapRepository scrapRepository;
    private final GatheringRepository gatheringRepository;
    private final UserRepository userRepository;

    public void createScrap(ScrapRequestDto scrapRequestDto, Principal principal) {
        int gatheringSeq = scrapRequestDto.getGatheringSeq();
        String userId = principal.getName();
        Scrap scrap = new Scrap(gatheringRepository.findById(gatheringSeq).get(), userRepository.findByUserId(userId));
        scrapRepository.save(scrap);
    }

    public void deleteScrap(int scrapSeq) {
        scrapRepository.deleteById(scrapSeq);
    }
}
