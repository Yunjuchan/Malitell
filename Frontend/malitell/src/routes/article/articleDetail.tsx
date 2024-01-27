import React from "react";
import * as g from "../../styles/grid";

export default function ArticleDetail() {
  return (
      <g.Back>
      <g.Grid>
        <g.Box col="1/5" row="1/2">
          search
        </g.Box>
        <g.Box col="1/5" row="2/7">
          recommendedArticle
        </g.Box>
        <g.Box col="5/13" row="1/2">
          title
        </g.Box>
        <g.Box col="5/13" row="2/7">
          content
        </g.Box>
        <g.Box col="5/13" row="7/12">
          comment
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
