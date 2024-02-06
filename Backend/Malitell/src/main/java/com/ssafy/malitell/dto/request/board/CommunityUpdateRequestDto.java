package com.ssafy.malitell.dto.request.board;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommunityUpdateRequestDto {

    private String title;

    private String content;

}