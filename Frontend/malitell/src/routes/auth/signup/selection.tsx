import React from "react";
import * as g from "../../../styles/grid";
import { Link } from "react-router-dom";
import SignupSelect from "../../../components/auth/signup/selection/selectionBtn";
import SelectionText from "../../../components/auth/signup/selection/selectionText";

export default function Selection() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box col="1/13" row="2/5">
          <SelectionText />
        </g.Box>
        <g.Box col="1/13" row="5/12">
          <SignupSelect />
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
