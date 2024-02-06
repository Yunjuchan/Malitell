package com.ssafy.malitell.dto.request.tag;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TagRequestDto {
    private List<Integer> statusTags;
}
