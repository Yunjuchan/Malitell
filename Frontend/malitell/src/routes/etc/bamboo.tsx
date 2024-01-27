import React from "react";
import * as g from "../../styles/grid";

export default function Bamboo() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box col="1/13" row="1/2">
          <h1>대나무 숲</h1>
        </g.Box>
        <g.Box col="1/13" row="2/5">
          주제
        </g.Box>
        <g.Box col="1/13" row="5/13">
          대 숲 content / 필터
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
