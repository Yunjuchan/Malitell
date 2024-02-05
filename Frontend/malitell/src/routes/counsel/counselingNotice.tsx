import React from 'react'
import * as g from '../../styles/grid';

export default function CounselingNotice() {
  return (
    <g.GridNav>
      <g.Box $col="1/13" $row="2/3">
        상담시 유의사항
      </g.Box>
      <g.Box $col="2/12" $row="4/9">
        content
      </g.Box>
      <g.Box $col="2/12" $row="10/11">
        상담 세션으로
      </g.Box>
    </g.GridNav>
  )
}
