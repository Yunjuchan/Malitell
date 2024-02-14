package com.ssafy.malitell.dto.request.mindletgo;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MindLetGoRequestDto {
    @NotNull
    private String content;
}
