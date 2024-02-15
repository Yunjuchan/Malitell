package com.ssafy.malitell.dto.response.mindletgo;

import com.ssafy.malitell.domain.mindletgo.MindLetGo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MindLetGoListDto {

    private int userSeq;
    private int mindLetGoSeq;
    private String content;

    public MindLetGoListDto(MindLetGo mindLetGo) {
        this.mindLetGoSeq = mindLetGo.getMindLetGoSeq();
        this.content = mindLetGo.getContent();
    }
}
