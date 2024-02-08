package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.capsule.Capsule;
import com.ssafy.malitell.dto.response.capsule.CapsuleResponseDto;
import com.ssafy.malitell.repository.capsule.CapsuleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class CapsuleService {

    public final CapsuleRepository capsuleRepository;

    public CapsuleResponseDto getContent() {
        List<Capsule> allCapsule = capsuleRepository.findAll();

        Random random = new Random();
        Capsule capsule = allCapsule.get(random.nextInt(allCapsule.size()));

        return new CapsuleResponseDto(capsule.getPhrases(), capsule.getVideoUrl());
    }
}
