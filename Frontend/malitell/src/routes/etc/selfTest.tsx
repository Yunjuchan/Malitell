import React from "react";
import * as g from "../../styles/grid";

export default function SelfTest() {
  return (
    <g.Back>
      <g.Grid>
      <g.Box col="1/4" row="2/5">
          Test List
        </g.Box>
        <g.Box col="1/4" row="5/9">
          banners
        </g.Box>
        <g.Box col="4/13" row="1/2">
          아이콘 + 자가진단
        </g.Box>
        <g.Box col="4/13" row="2/11">
          Test content & result
        </g.Box>
        
      </g.Grid>
    </g.Back>
  );
}