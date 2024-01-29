import {
  LoginBox,
  Img,
  LoginBtn,
  BtnBox,
  MethodText,
  MethodIcon,
  Close,
} from "../../../styles/auth/login";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import malitell from "../../../assets/images/malitell.png";
import kakao from "../../../assets/images/auth/login/kakao.png";
import naver from "../../../assets/images/auth/login/naver.png";
import LoginEmail from "./loginEmail";
import { NavLink } from "react-router-dom";

interface LoginProps {
  handleLogin: (event: React.MouseEvent) => void;
}

export default function Login({ handleLogin }: LoginProps) {
  const [email, setEmail] = useState(false);

  const handleEmail = (e: React.MouseEvent): void => {
    setEmail(!email);
  };

  return (
    <>
      {email ? (
        <LoginEmail handleLogin={handleLogin} handleEmail={handleEmail} />
      ) : (
        <LoginBox>
          <Close>
            <FontAwesomeIcon
              onClick={handleLogin}
              icon={faXmark}
              style={{ color: "#bf94e4" }}
            />
          </Close>
          <Img src={malitell} alt="malitellImage" />
          <BtnBox>
            <LoginBtn color="#FEE102">
              <MethodIcon src={kakao} />
              <MethodText>카카오로 계속하기</MethodText>
            </LoginBtn>
            <LoginBtn color="#00BF6C">
              <MethodIcon src={naver} />
              <MethodText>네이버로 계속하기</MethodText>
            </LoginBtn>
            <LoginBtn color="white" onClick={handleEmail}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#b098ff" }}
                size="2x"
              />
              <MethodText>이메일로 계속하기</MethodText>
            </LoginBtn>
            <NavLink to={"/signup"}>
              <LoginBtn onClick={handleLogin} color="#FBF3FD">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#bf94e4", marginLeft: "2px" }}
                  size="2x"
                />
                <MethodText margin="50px">회원가입</MethodText>
              </LoginBtn>
            </NavLink>
          </BtnBox>
        </LoginBox>
      )}
    </>
  );
}
