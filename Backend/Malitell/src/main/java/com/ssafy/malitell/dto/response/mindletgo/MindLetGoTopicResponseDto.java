package com.ssafy.malitell.dto.response.mindletgo;

import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MindLetGoTopicResponseDto {

    private String topic; // 주제

    public MindLetGoTopicResponseDto(MindLetGoTopic mindLetGoTopic) {
        this.topic = mindLetGoTopic.getTopic();
    }
}
