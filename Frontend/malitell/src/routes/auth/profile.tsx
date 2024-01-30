import React from "react";
import * as g from "../../styles/grid";

export default function Profile() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/4" $row="1/2">
          Profile
        </g.Box>
        <g.Box $col="1/4" $row="2/5">
          profileImage
        </g.Box>
        <g.Box $col="1/4" $row="5/6">
          tag
        </g.Box>
        <g.Box $col="1/4" $row="6/9">
          profileMenu
        </g.Box>
        <g.Box $col="1/4" $row="9/11">
          metavers banner
        </g.Box>
        <g.Box $col="4/13" $row="1/2">
          current tab
        </g.Box>
        <g.Box $col="4/13" $row="2/11">
          current content
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}