import React from "react";
import * as g from "../../styles/grid";
import CounselorInfo from "../../components/counsel/counsellorDetail/counselorInfo";
import ReviewList from "../../components/counsel/counsellorDetail/reviewList";
import ButtonBox from "../../components/counsel/counsellorDetail/buttonBox";
import ProfileBox from "../../components/counsel/counsellorDetail/profileBox";

export default function CounselorDetail() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/9" $row="2/8">
          <CounselorInfo />
        </g.Box>
        <g.Box $col="1/9" $row="8/13">
          <ReviewList />
        </g.Box>
        <g.Box $col="9/13" $row="2/7">
          <ProfileBox />
        </g.Box>
        <g.Box $col="9/13" $row="7/10">
          <ButtonBox />
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
