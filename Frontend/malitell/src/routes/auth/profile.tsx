import React from "react";
import * as g from "../../styles/grid";
import {Grid} from "../../styles/auth/profile/grid";
import Menu from "../../components/auth/profile/menu";
import Current from "../../components/auth/profile/current";
import CurrentMenu from "../../components/auth/profile/currentMenu";

export default function Profile() {
  return (
    <>
    <g.Back />
      <Grid>
        <g.Box $col="1/4" $row="1/9" $position="sticky" $top="80px">
          <Menu />
        </g.Box>
        <g.Box $col="4/13" $row="1/2" $position="sticky" $top="80px">
          <Current />
        </g.Box>
        <g.Box $col="4/13" $row="2/11">
          <CurrentMenu />
        </g.Box>
      </Grid>
    </>
  );
}