package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import com.ssafy.malitell.repository.mindletgo.MindLetGoRepository;
import com.ssafy.malitell.repository.mindletgo.MindLetGoTopicRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class MindLetGoService {
    private final MindLetGoRepository mindLetGoRepository;
    private final MindLetGoTopicRepositoryImpl mindLetGoTopicRepository;

    public int createMindLetGo(MindLetGoRequestDto mindLetGoRequestDto) {
        MindLetGo mindLetGo = new MindLetGo(mindLetGoRequestDto);
        mindLetGoRepository.save(mindLetGo);
        return mindLetGo.getMindLetGoSeq();
    }

    public List<MindLetGo> findAll() {
        return mindLetGoRepository.findAll();
    }

    public void deleteAll() {
        mindLetGoRepository.deleteAll();
    }

    public void updateTopic() {
        List<MindLetGoTopic> mindLetGoTopicList = mindLetGoTopicRepository.findAll();
        int topicSeq = (int) (Math.random() * mindLetGoTopicList.size()) + 1;
        mindLetGoTopicRepository.updateMindLetGoTopicSelectCancel(); // 전에 선택된 주제 isSelect = false
        mindLetGoTopicRepository.updateMindLetGoTopicSelect(topicSeq); // 새로운 랜덤 주제 isSelect = true
    }

    public int findTopic() {
        return mindLetGoTopicRepository.findTopic().getMindLetGoTopicSeq();
    }
}
