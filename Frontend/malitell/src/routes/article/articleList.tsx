import React from "react";
import * as g from "../../styles/grid";

export default function Articles() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/13" $row="1/2">
          searchBox
        </g.Box>
        <g.Box $col="1/5" $row="2/7">
          recommendedArticle
        </g.Box>
        <g.Box $col="1/5" $row="7/11">
          banner
        </g.Box>
        <g.Box $col="5/13" $row="2/3">
          filter
        </g.Box>
        <g.Box $col="5/13" $row="3/12">
          articles
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
