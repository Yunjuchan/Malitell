package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import com.ssafy.malitell.dto.response.mindletgo.MindLetGoResponseDto;
import com.ssafy.malitell.repository.MindLetGoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MindLetGoService {
    private final MindLetGoRepository mindLetGoRepository;

    public int createMindLetGo(MindLetGoRequestDto mindLetGoRequestDto) {
        MindLetGo mindLetGo = new MindLetGo(mindLetGoRequestDto);
        mindLetGoRepository.save(mindLetGo);
        return mindLetGo.getMindLetGoSeq();
    }

    public List<MindLetGoResponseDto> findAll() {
        List<MindLetGo> mindLetGos = mindLetGoRepository.findAll();
        List<MindLetGoResponseDto> mindLetGoResponseDtos = new ArrayList<>();
        for (int i = 0; i < mindLetGos.size(); i++) {
            mindLetGoResponseDtos.get(i).setContent(mindLetGos.get(i).getContent());
        }

        return mindLetGoResponseDtos;
    }
}
