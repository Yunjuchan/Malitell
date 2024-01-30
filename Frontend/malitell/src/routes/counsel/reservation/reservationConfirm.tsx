import React from "react";
import * as g from "../../../styles/grid";

export default function ReservationConfirm() {
  return (
    <g.GridNav>
      <g.Box $col="1/13" $row="1/2">
        reservationConfirm
      </g.Box>
      <g.Box $col="3/11" $row="3/8">
        box
      </g.Box>
      <g.Box $col="3/7" $row="9/10">
        home
      </g.Box>
      <g.Box $col="7/11" $row="9/10">
        profile
      </g.Box>
    </g.GridNav>
  );
}
