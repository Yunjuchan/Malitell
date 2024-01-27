import React from "react";
import * as g from "../../styles/grid";

export default function Profile() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box col="1/13" row="2/3">
          Profile
        </g.Box>
        <g.Box col="1/4" row="3/6">
          profileImage
        </g.Box>
        <g.Box col="1/4" row="6/7">
          tag
        </g.Box>
        <g.Box col="1/4" row="7/12">
          profileMenu
        </g.Box>
        <g.Box col="4/13" row="3/12">
          profileDetail
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
