import React from "react";
import * as g from "../../styles/grid";

export default function ArticleCreate() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/13" $row="1/3">
          게시글 작성
        </g.Box>
        <g.Box $col="1/13" $row="3/12">
          content
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
