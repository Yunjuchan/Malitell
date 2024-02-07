package com.ssafy.malitell.dto.response.board.overcoming;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.GatheringComment;
import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.domain.board.OverComingComment;
import com.ssafy.malitell.dto.response.board.CommentResponseDto;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Getter
public class OverComingResponseDto {

    private final String title;
    private final String content;
    private final String name;
    private final int hit;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private final Timestamp time;
    private final int userSeq;
    private final List<CommentResponseDto> overComingComments = new ArrayList<>();

    public OverComingResponseDto(OverComing overComing,List<OverComingComment> commentResponseDtos) {
        this.title = overComing.getTitle();
        this.content = overComing.getContent();
        this.name = overComing.getUser().getName();
        this.hit = overComing.getHit();
        this.time = overComing.getTime();
        this.userSeq = overComing.getUser().getUserSeq();

        for (OverComingComment commentResponseDto : commentResponseDtos) {
            overComingComments.add(new CommentResponseDto(commentResponseDto));
        }
    }

}
