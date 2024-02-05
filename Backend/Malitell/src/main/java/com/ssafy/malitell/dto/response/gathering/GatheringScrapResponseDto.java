package com.ssafy.malitell.dto.response.gathering;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GatheringScrapResponseDto {
    private int gatheringSeq;
    private String title;

    public GatheringScrapResponseDto(Gathering gathering) {
        this.gatheringSeq = gathering.getGatheringSeq();
        this.title = gathering.getTitle();
    }
}
