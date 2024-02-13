package com.ssafy.malitell.dto.response.mindletgo;

import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MindLetGoTopicResponseDto {
    private int mindLetGoTopicSeq; // 마인드렛고 주제 식별키

    private String topic; // 주제

    public MindLetGoTopicResponseDto(MindLetGoTopic mindLetGoTopic) {
        this.mindLetGoTopicSeq = mindLetGoTopic.getMindLetGoTopicSeq();
        this.topic = mindLetGoTopic.getTopic();
    }
}
