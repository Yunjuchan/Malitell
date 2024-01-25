import React from "react";
import * as g from "../../styles/grid";
import * as s from "../../styles/common/loading";

export default function Loading() {
  return (
    <g.Grid>
      <s.LoadingBox>
        <s.Spinner>O</s.Spinner>
        <s.Message>You can do it!</s.Message>
        <s.Image>
          <img src="./images/malitell/malitell.png" alt="malitell" />
        </s.Image>
      </s.LoadingBox>
    </g.Grid>
  );
}
