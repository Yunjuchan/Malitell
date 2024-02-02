package com.ssafy.malitell.service;

import com.ssafy.malitell.repository.CapsuleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CapsuleService {

    public final CapsuleRepository capsuleRepository;
}
