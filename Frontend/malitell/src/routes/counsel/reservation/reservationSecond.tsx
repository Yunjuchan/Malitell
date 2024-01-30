import React from 'react'
import * as g from '../../../styles/grid';

export default function ReservationSecond() {
  return (
    <g.GridNav>
      <g.Box $col='1/9' $row='1/5'>notice</g.Box>
      <g.Box $col='1/9' $row='5/11'>calendar</g.Box>
      <g.Box $col='9/13' $row='1/6'>counselorImage</g.Box>
      <g.Box $col='9/13' $row='6/7'>confirm</g.Box>
      <g.Box $col='9/13' $row='7/8'>back</g.Box>
    </g.GridNav>
    )
}
