import React from "react";
import * as g from "../../../styles/grid";

export default function ReservationFirst() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/5" $row="2/6">
          calendar
        </g.Box>
        <g.Box $col="5/9" $row="2/6">
          time and tag
        </g.Box>
        <g.Box $col="1/9" $row="6/7">
          counsel tag
        </g.Box>
        <g.Box $col="1/9" $row="7/12">
          question
        </g.Box>
        <g.Box $col="9/13" $row="2/7">
          counselorImage
        </g.Box>
        <g.Box $col="9/13" $row="7/10">
          back
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
