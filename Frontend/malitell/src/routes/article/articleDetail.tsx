import React from "react";
import * as g from "../../styles/grid";

export default function ArticleDetail() {
  return (
    <g.GridNav>
      <g.Box col="1/4" row="1/7">
        recommendedArticle
      </g.Box>
      <g.Box col="4/13" row="1/6">
        content
      </g.Box>
      <g.Box col="4/13" row="6/10">
        comment
      </g.Box>
    </g.GridNav>
  );
}
