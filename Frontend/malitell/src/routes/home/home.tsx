import React from "react";
import Carousel from "../../components/home/carousel";
import * as g from "../../styles/grid";
import Nav from "../../components/home/nav";

export default function home() {
  return (
    <>
      <Carousel />
      <g.BackHome />
      <g.Grid>
        {/* 홈 네브 */}
        <g.Box col="1/13" row="1/3">
          <Nav />
        </g.Box>

        {/* 배너 */}
        <g.Box col="1/6" row="3/7">
          
        </g.Box>
        <g.Box col="6/13" row="3/7">
        </g.Box>

        {/* 게시글 */}
        <g.Box col="1/13" row="7/13">

        </g.Box>
      </g.Grid>
    </>
  );
}
