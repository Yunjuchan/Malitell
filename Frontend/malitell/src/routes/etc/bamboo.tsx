import React from "react";
import * as g from "../../styles/grid";
import styled from "styled-components";

export const Banner = styled.div`
  cursor: pointer;
  display: flex;
  height: 45%;
  width: 95%;
  margin-top: 2.5%;
  /* margin-left: 1%; */
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px lightgray;
  background-color: ${({ color }) => color};
  color: #ffffff;
`;
export const BannerImg = styled.div`
  width: 30%;
  text-align: center;
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 6%;
    width: 60%;
    height: 60%;
  }
`;

export const GridBox = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: aqua;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`


export default function Bamboo() {
  return (
    <g.Grid>

      <g.Box col="1/4" row="2/4">
        <Banner color="#FF7F50">
          <div>
            <h1>배너명</h1>
            <span>배너컨텐츠</span>
          </div>
          <BannerImg>
            {/* <img src="./images/self-check.png" alt="banner" /> */}
          </BannerImg>
        </Banner>

        <Banner color="#008FC0">
          <div>
            <h1>배너명</h1>
            <span>배너컨텐츠</span>
          </div>
          <BannerImg>
            {/* <img src="./images/self-check.png" alt="banner" /> */}
          </BannerImg>
        </Banner>
      </g.Box>

      <g.Box col="4/13" row="1/2" display="flex">
        대나무숲<br></br>
      </g.Box>
      
      <g.Box col="4/13" row="2/4" display="flex"></g.Box>
      
      <g.Box col="4/13" row="4/11" display="grid">
        <GridBox>aa</GridBox>
      </g.Box>

    </g.Grid>
  );
}
