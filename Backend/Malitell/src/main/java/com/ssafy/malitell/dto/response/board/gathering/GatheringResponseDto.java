package com.ssafy.malitell.dto.response.board.gathering;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.comment.GatheringComment;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroupUser;
import com.ssafy.malitell.domain.tag.WorryTag;
import com.ssafy.malitell.dto.response.board.comment.CommentResponseDto;
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

    private final List<Integer> participants = new ArrayList<>(); // 참가하고 있는 사람

    // 자조모임 신청 인원
    private final int headcount;

    public GatheringResponseDto(Gathering gathering, List<GatheringComment> commentResponseDtos) {
        this.title = gathering.getTitle();
        this.content = gathering.getContent();
        this.selfHelpGroup = gathering.getSelfHelpGroup();
        this.name = gathering.getUser().getName();
        this.hit = gathering.getHit();
        this.time = gathering.getTime();
        this.userSeq = gathering.getUser().getUserSeq();
        for (GatheringComment commentResponseDto : commentResponseDtos) {
            gatheringComments.add(new CommentResponseDto(commentResponseDto));
        }
        List<SelfHelpGroupUser> selfHelpGroupUsers = gathering.getSelfHelpGroup().getSelfHelpGroupUsers();
        for (SelfHelpGroupUser selfHelpGroupUser : selfHelpGroupUsers) {
            participants.add(selfHelpGroupUser.getUser().getUserSeq());
        }
        this.headcount = gathering.getHeadcount();
    }

}
