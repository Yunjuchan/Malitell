import React from 'react'
import * as g from '../../styles/grid';

export default function CounselEvaluation() {
  return (
    <g.GridNav>
      <g.Box $col='1/13' $row='1/2'>상담 평가</g.Box>
      <g.Box $col='1/7' $row='3/11'>마리텔 냥이</g.Box>
      <g.Box $col='7/13' $row='3/11'>상담 평가 폼</g.Box>
      <g.Box $col='11/13' $row='11/12'>메인으로</g.Box>
    </g.GridNav>
  )
}
