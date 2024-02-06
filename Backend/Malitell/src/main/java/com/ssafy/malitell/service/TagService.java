package com.ssafy.malitell.service;

import com.ssafy.malitell.repository.StatusTagRepository;
import com.ssafy.malitell.repository.WorryTagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TagService {
    private final StatusTagRepository statusTagRepository;
    private final WorryTagRepository worryTagRepository;
}
