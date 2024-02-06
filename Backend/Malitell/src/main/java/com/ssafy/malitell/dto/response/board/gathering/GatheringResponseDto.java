package com.ssafy.malitell.dto.response.board.gathering;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.gathering.Gathering;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class GatheringResponseDto {

    private final String title;
    private final String content;
    private final SelfHelpGroup selfHelpGroup;
    private final String name;
    private final int hit;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private final Timestamp time;

    public GatheringResponseDto(Gathering gathering) {
        this.title = gathering.getTitle();
        this.content = gathering.getContent();
        this.selfHelpGroup = gathering.getSelfHelpGroup();
        this.name = gathering.getName();
        this.hit = gathering.getHit();
        this.time = gathering.getTime();
    }

}
