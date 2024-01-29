import React from 'react'
import * as g from '../../styles/grid';

export const BackFull = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #F7F7F7;
`

export default function CounselingClient() {
  return (
    <g.BackFull>
      <g.Grid>
        <g.Box col="1/13" row="1/2">
          상단 바
        </g.Box>
        <g.Box col="1/9" row="2/12">
          <p>상담화면</p>
        </g.Box>
        <g.Box col="1/9" row="11/12">
          상담세션 도구바
        </g.Box>
        <g.Box col="9/13" row="2/12">
          채팅/메모장
        </g.Box>
      </g.Grid>
    </g.BackFull>
  )
}