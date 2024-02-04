package com.ssafy.malitell.domain.mindletgo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MindLetGoTopic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mindLetGoTopicSeq;
    private String topic;
    private boolean isSelect;

    public MindLetGoTopic(String topic, boolean isSelect) {
        this.topic = topic;
        this.isSelect = isSelect;
    }
}
