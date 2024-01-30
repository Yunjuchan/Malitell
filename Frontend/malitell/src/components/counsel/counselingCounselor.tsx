import React from "react";
import * as g from "../../styles/grid";

export default function CounselingCounselor() {
  return (
    <g.GridNav>
      <g.Box $col="1/13" $row="2/12">
        전체 틀
      </g.Box>
      <g.Box $col="1/9" $row="2/12">
        <p></p>
        <p>상담화면</p>
      </g.Box>
      <g.Box $col="1/9" $row="11/12">
        상담세션 도구바
      </g.Box>
      <g.Box $col="9/13" $row="2/12">
        상담 기록지
      </g.Box>
      <g.Box $col="11/13" $row="11/12">
        저장 버튼
      </g.Box>
    </g.GridNav>
  );
}
