import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import * as s from "../../styles/common/nav";
import * as g from "../../styles/grid";
import Login from "../auth/login/login";
import logo from "../../assets/images/nav/logo.png";

export default function Nav() {
  const [back, setBack] = useState(false);
  const [login, setLogin] = useState(false);

  const handleBack = (e: React.MouseEvent): void => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setBack(!back);
  };
  const handleLogin = (e: React.MouseEvent): void => {
    setLogin(!login);
  };

  return (
    <>
      {back ? <g.Background></g.Background> : null}
      {login ? (
        <Login handleLogin={handleLogin} handleBack={handleBack} />
      ) : null}
      <s.Nav>
        <s.Line />

        <s.Grid>
          {/* 네브바 로고 */}
          <s.Logo>
            <Link to={"/"}>
              <img src={logo} alt="navLogo" />
            </Link>
          </s.Logo>

          {/* 네브바 상단부분 */}
          <s.NavItems $col="11/13" $row="1/2" $align="end">
            <s.NavItem $width="70px" $size="15px">
              <div
                onClick={(e) => {
                  handleLogin(e);
                  handleBack(e);
                }}
                style={{ cursor: "pointer" }}
              >
                로그인
              </div>
            </s.NavItem>
            <s.NavItem $width="70px" $size="15px">
              <Link to="/signup">회원가입</Link>
            </s.NavItem>
          </s.NavItems>

          {/* 네브바 하단부분 */}
          <s.NavItems $col="4/10" $row="2/4" $align="space-between">
            <s.NavItem $width="150px" $size="20px">
              <Link to="/comingsoon">메타버스</Link>
            </s.NavItem>
            <s.NavItem $width="150px" $size="20px">
              <Link to="/articles">커뮤니티</Link>
            </s.NavItem>
            <s.NavItem $width="150px" $size="20px">
              <Link to="/counselors">전문가 찾기</Link>
            </s.NavItem>
            <s.NavItem $width="150px" $size="20px">
              <Link to="/bamboo">대나무 숲</Link>
            </s.NavItem>
          </s.NavItems>
          <s.NavItems $col="11/13" $row="2/4" $align="end">
            <s.NavItem $width="70px">
              <FontAwesomeIcon
                icon={faComment}
                style={{ color: "#BF94E4" }}
                size="2x"
              />
            </s.NavItem>
            <s.NavItem $width="70px">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#BF94E4" }}
                size="2x"
                width="70px"
              />
            </s.NavItem>
          </s.NavItems>
        </s.Grid>
      </s.Nav>
      <Outlet />
    </>
  );
}
