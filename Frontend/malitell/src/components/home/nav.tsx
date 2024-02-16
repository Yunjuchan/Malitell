import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Name, Wrapper } from "../../styles/home/nav";

export default function Nav() {
  const onClick = () => {
    window.open("https://drive.usercontent.google.com/download?id=1b9IH969nO_SpCOcMlbtBu8nLQpwHUl1T&export=download&authuser=0", )
  }
  return (
    <Wrapper>
      <NavLink to={"/counselors"}>
        <Icon src="./images/home/nav/counsel.png" alt="counsel" />
        <Name>상담</Name>
      </NavLink>
      <NavLink to={"/asd"}>
        <Icon src="./images/home/nav/self-diagnosis.png" alt="counsel" />
        <Name>자가진단</Name>
      </NavLink>
      <span onClick={onClick}>
        <Icon src="./images/home/nav/metaverse.png" alt="counsel" />
        <Name>메타버스</Name>
      </span>
      <NavLink to={"/asd"}>
        <Icon src="./images/home/nav/related-organizations.png" alt="counsel" />
        <Name>관련 사이트</Name>
      </NavLink>
      <a href="https://heather-entree-15a.notion.site/README-md-90d1210269a84b0ebbb85b6d3dba8305" >
        <Icon src="./images/home/nav/about.png" alt="counsel" />
        <Name>서비스 소개</Name>
      </a>
    </Wrapper>
  );
}
