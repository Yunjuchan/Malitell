import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Name, Wrapper } from "../../styles/home/nav";

export default function Nav() {
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
      <NavLink to={"/asd"}>
        <Icon src="./images/home/nav/metaverse.png" alt="counsel" />
        <Name>메타버스</Name>
      </NavLink>
      <NavLink to={"/asd"}>
        <Icon src="./images/home/nav/related-organizations.png" alt="counsel" />
        <Name>관련 사이트</Name>
      </NavLink>
      <NavLink to={"/asd"}>
        <Icon src="./images/home/nav/about.png" alt="counsel" />
        <Name>서비스 소개</Name>
      </NavLink>
    </Wrapper>
  );
}
