import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import * as s from "../../styles/common/nav";
import * as g from "../../styles/grid";
import Login from "../auth/login/login";
import logo from "../../assets/images/nav/logo.png";
import { setBoardTypeInfo } from "../../store/article/boardSlice";
import { useDispatch } from "react-redux";
import { setProfileMenu } from "../../store/auth/profileSlice";
import { RootState } from "../../store/store";
import { logout } from "../../store/auth/userSlice";
import { flipLoginModal } from "../../store/common/loginModalSlice";

export default function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginModalOpen = useSelector(
    (state: RootState) => state.loginModal.loginModalOpen
  );

  const handleLogin = (): void => {
    dispatch(flipLoginModal());
  };


  const [back, setBack] = useState(false);
  const [login, setLogin] = useState(false);
  const board = useSelector((state: RootState) => state.board);
  const profile = useSelector((state: RootState) => state.profile);

  const handleBack = (e: React.MouseEvent): void => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setBack(!back);
  };

  const openChat = () => {
    const url = "/chat";
    window.open(url, "_blank", "width=400, height=530");
  };

  const goToCommunity = () => {
    dispatch(setBoardTypeInfo("community"));
    navigate("/articles/community");
  };

  const handleLogout = (e: React.MouseEvent): void => {
    logout().then(() => {
      navigate("/");
    });
  };

  // 토큰 저장여부에 따른 메뉴 선택 동작 바꾸기
  // dispatch는 비동기라 store의 상태가 변경되기 전에 navigate가 되므로
  // 초기 연결은 myInfo로 강제해야 제대로 url이 작동함
  const handleProfile = (e: React.MouseEvent): void => {
    const token = window.sessionStorage.getItem("Access_Token");
    if (token) {
      dispatch(setProfileMenu({ menu: "myInfo", menuKo: "내 정보" }));
      navigate(`/profile/myInfo`);
    } else {
      handleBack(e);
      handleLogin();
    }
  };
  useEffect(() => {});

  return (
    <>
      {loginModalOpen ? <g.Background></g.Background> : null}
      {loginModalOpen ? (
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
            {/* 토큰이 있으면 인사말, 로그아웃 버튼 */}
            {sessionStorage.getItem("Access_Token") ? (
              <>
                {/* 리덕스에서 회원정보 받아와야됨 */}
                <s.NavItem $width="70px" $size="15px">
                  <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                    로그아웃
                  </div>
                </s.NavItem>
              </>
            ) : (
              <>
                <s.NavItem $width="70px" $size="15px">
                  <div
                    onClick={(e) => {
                      handleLogin();
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
              </>
            )}
          </s.NavItems>

          {/* 네브바 하단부분 */}
          <s.NavItems $col="4/10" $row="2/4" $align="space-between">
            <s.NavItem $width="150px" $size="17px">
              <Link to="/comingsoon">메타버스</Link>
            </s.NavItem>
            <s.NavItem $width="150px" $size="17px">
              <Link to="/articles/community" onClick={goToCommunity}>
                커뮤니티
              </Link>
            </s.NavItem>
            <s.NavItem $width="150px" $size="17px">
              <Link to="/counselors">전문가 찾기</Link>
            </s.NavItem>
            <s.NavItem $width="150px" $size="17px">
              <Link to="/bamboo">대나무 숲</Link>
            </s.NavItem>
          </s.NavItems>
          <s.NavItems $col="11/13" $row="2/4" $align="end">
            <s.NavItem $width="55px">
              <FontAwesomeIcon
                onClick={openChat}
                icon={faComment}
                style={{ color: "#BF94E4", width: "25px", height: "25px" }}
              />
            </s.NavItem>
            <s.NavItem $width="55px">
              <FontAwesomeIcon
                onClick={handleProfile}
                icon={faUser}
                style={{
                  color: "#BF94E4",
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                }}
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
