package com.ssafy.malitell.dto.response.board.gathering;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.GatheringComment;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import com.ssafy.malitell.dto.response.board.CommentResponseDto;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Getter
public class GatheringResponseDto {

    private final String title;
    private final String content;
    private final SelfHelpGroup selfHelpGroup;
    private final String name;
    private final int hit;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private final Timestamp time;
    private final int userSeq;
    private final List<CommentResponseDto> gatheringComments = new ArrayList<>();
    private final String tag;

    public GatheringResponseDto(Gathering gathering, List<GatheringComment> commentResponseDtos) {
        this.title = gathering.getTitle();
        this.content = gathering.getContent();
        this.selfHelpGroup = gathering.getSelfHelpGroup();
        this.name = gathering.getUser().getName();
        this.hit = gathering.getHit();
        this.time = gathering.getTime();
        this.userSeq = gathering.getUser().getUserSeq();
        this.tag = gathering.getWorryTag().getTag();
        for (GatheringComment commentResponseDto : commentResponseDtos) {
            gatheringComments.add(new CommentResponseDto(commentResponseDto));
        }
    }

}
