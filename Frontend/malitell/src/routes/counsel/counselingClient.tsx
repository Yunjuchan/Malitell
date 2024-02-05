import React from 'react'
import * as g from '../../styles/grid';

export default function CounselingClient() {
  return (
    <g.BackCounsel>
      <g.Grid>
        <g.Box $col="1/13" $row="1/2">
          상단 바
        </g.Box>
        <g.Box $col="1/9" $row="2/12">
          <p>상담화면</p>
        </g.Box>
        <g.Box $col="1/9" $row="11/12">
          상담세션 도구바
        </g.Box>
        <g.Box $col="9/13" $row="2/12">
          채팅/메모장
        </g.Box>
      </g.Grid>
    </g.BackCounsel>
  )
}