package com.ssafy.malitell.dto.request.mindletgo;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MindLetGoRequestDto {
    @NotNull
    private int mindLetGoTopicSeq; // 마인드렛고 주제 식별키
    @NotNull
    private String content;
}
