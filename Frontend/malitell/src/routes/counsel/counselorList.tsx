import React from "react";
import * as g from "../../styles/grid";
import SearchBox from "../../components/counsel/searchBox";
import FilterBox from "../../components/counsel/filterBox";
import Counselors from "../../components/counsel/counselorList";

export default function CounselorList() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/13" $row="1/2">
          counselors
        </g.Box>
        <g.Box $col="1/4" $row="2/3">
          <SearchBox />
        </g.Box>
        <g.Box $col="1/4" $row="3/7">
          <FilterBox />
        </g.Box>
        <g.Box $col="4/13" $row="2/12">
          <Counselors />
          pagenation
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
