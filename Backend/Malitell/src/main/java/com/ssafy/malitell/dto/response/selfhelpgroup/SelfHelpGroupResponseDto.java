package com.ssafy.malitell.dto.response.selfhelpgroup;

import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.FetchType;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
public class SelfHelpGroupResponseDto {

    // 자조모임 이름
    private String title;

    // 자조모임 설명
    private String content;

    // 자조모임 회차
    @ElementCollection(fetch = FetchType.LAZY)
    private List<Timestamp> times =  new ArrayList<>();

    // 자조모임 태그
    private SelfHelpType selfHelpType;

    // 자조모임 번호
    private int selfHelpGroupSeq;
}
