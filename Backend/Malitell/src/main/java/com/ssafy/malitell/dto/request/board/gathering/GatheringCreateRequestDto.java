package com.ssafy.malitell.dto.request.board.gathering;

import com.ssafy.malitell.domain.tag.WorryTag;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
public class GatheringCreateRequestDto {

    // 자조모임 제목
    private String selfHelpGroupTitle;

    // 자조모임 설명
    private String selfHelpGroupContent;

    // 자조모임 회차
    private final List<Timestamp> times = new ArrayList<>();

    // 자조모임 태그
    private String selfHelpType;

    // 자조모임 인원수 제한
    private int selfHelpGroupHeadCount;

    // 게시물 제목
    private String title;

    // 게시물 내용
    private String content;

    // 태그
    private WorryTag worryTag;
}
