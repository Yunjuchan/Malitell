package com.ssafy.malitell.dto.response.board.gathering;

import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpType;
import lombok.AllArgsConstructor;
import lombok.Getter;
@Getter
@AllArgsConstructor
public class GatheringScrapResponseDto {
    private int gatheringSeq;
    private String title;
    private SelfHelpType selfHelpType;
}
