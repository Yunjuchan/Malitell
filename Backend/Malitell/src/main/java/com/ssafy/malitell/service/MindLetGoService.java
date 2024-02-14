package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import com.ssafy.malitell.dto.response.mindletgo.MindLetGoListDto;
import com.ssafy.malitell.dto.response.mindletgo.MindLetGoTopicResponseDto;
import com.ssafy.malitell.repository.mindletgo.MindLetGoRepository;
import com.ssafy.malitell.repository.mindletgo.MindLetGoTopicRepositoryImpl;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class MindLetGoService {
    private final MindLetGoRepository mindLetGoRepository;
    private final MindLetGoTopicRepositoryImpl mindLetGoTopicRepository;
    private final UserRepository userRepository;

    public int createMindLetGo(MindLetGoRequestDto mindLetGoRequestDto, String userId) {
        User findUser = userRepository.findByUserId(userId);
        MindLetGo mindLetGo = new MindLetGo(mindLetGoRequestDto, findUser);
        mindLetGoRepository.save(mindLetGo);
        return mindLetGo.getMindLetGoSeq();
    }

    public List<MindLetGoListDto> findAll() {
        List<MindLetGo> all = mindLetGoRepository.findAll();
        List<MindLetGoListDto> mindLetGoListDtoList = new ArrayList<>();
        for (MindLetGo mindLetGo : all) {
            mindLetGoListDtoList.add(new MindLetGoListDto(mindLetGo));
        }
        return mindLetGoListDtoList;
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

    public MindLetGoTopicResponseDto getNowTopic() {
        MindLetGoTopic topic = mindLetGoTopicRepository.findTopic();
        return new MindLetGoTopicResponseDto(topic);
    }
}
