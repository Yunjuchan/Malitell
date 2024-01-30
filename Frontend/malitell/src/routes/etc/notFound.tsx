import React from 'react'
import * as g from '../../styles/grid';

export default function NotFound() {
  return (
    <g.GridNav>
      <g.Box $col='1/6' $row='3/8'>image</g.Box>
      <g.Box $col='6/13' $row='3/8'>notFound</g.Box>
      <g.Box $col='9/12' $row='8/9'>home / back</g.Box>
    </g.GridNav>
    )
}
