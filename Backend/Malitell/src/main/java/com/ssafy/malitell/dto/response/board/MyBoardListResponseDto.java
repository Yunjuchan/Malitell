package com.ssafy.malitell.dto.response.board;

import com.ssafy.malitell.domain.board.Community;
import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.board.OverComing;
import com.ssafy.malitell.dto.response.board.gathering.BoardResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Getter
@NoArgsConstructor
public class MyBoardListResponseDto {

    private final List<BoardResponseDto> gatherings = new ArrayList<>();
    private final List<BoardResponseDto> overComings =  new ArrayList<>();
    private final List<BoardResponseDto> communities = new ArrayList<>();

    public MyBoardListResponseDto(List<Gathering> gatherings, List<OverComing> overComings, List<Community> communities) {

        for (Gathering gathering : gatherings) {
            this.gatherings.add(new BoardResponseDto(gathering.getGatheringSeq(), gathering.getTitle()));
        }

        for (OverComing overComing : overComings) {
            this.overComings.add(new BoardResponseDto(overComing.getOvercomingSeq(), overComing.getTitle()));
        }

        for (Community community : communities) {
            this.communities.add(new BoardResponseDto(community.getCommunitySeq(), community.getTitle()));
        }
    }
}
