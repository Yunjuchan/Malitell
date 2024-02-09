package com.ssafy.malitell.dto.response.board.community;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.comment.CommunityComment;
import com.ssafy.malitell.dto.response.board.comment.CommentResponseDto;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Getter
public class CommunityResponseDto {

    private final String title;
    private final String content;
    private final String name;
    private final int hit;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private final Timestamp time;
    private final int userSeq;
    private final List<CommentResponseDto> communityComments = new ArrayList<>();
    private final String tag;

    public CommunityResponseDto(Community community, List<CommunityComment> commentResponseDtos) {
        this.title = community.getTitle();
        this.content = community.getContent();
        this.name = community.getUser().getName();
        this.hit = community.getHit();
        this.time = community.getTime();
        this.userSeq = community.getUser().getUserSeq();
        this.tag = community.getWorryTag().getTag();

        for (CommunityComment commentResponseDto : commentResponseDtos) {
            communityComments.add(new CommentResponseDto(commentResponseDto));
        }
    }

}
