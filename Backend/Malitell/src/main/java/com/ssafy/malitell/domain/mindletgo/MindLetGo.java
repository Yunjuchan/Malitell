package com.ssafy.malitell.domain.mindletgo;

import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.request.mindletgo.MindLetGoRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MindLetGo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mindLetGoSeq;
    private String content;
    public MindLetGo(MindLetGoRequestDto mindLetGoRequestDto) {
        this.content = mindLetGoRequestDto.getContent();
    }
}
