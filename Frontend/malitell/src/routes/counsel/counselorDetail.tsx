import React from "react";
import * as g from "../../styles/grid";
import CounselorContent from "../../components/counsel/counselorContent";

export default function CounselorDetail() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/9" $row="2/8">
          <CounselorContent />
        </g.Box>
        <g.Box $col="1/9" $row="8/13">
          counsellingReviews
        </g.Box>
        <g.Box $col="9/13" $row="2/7">
          counselorImage
        </g.Box>
        <g.Box $col="9/13" $row="7/10"></g.Box>
      </g.Grid>
    </g.Back>
  );
}
