import {
  LoginBox,
  Img,
  LoginBtn,
  BtnBox,
  MethodText,
  MethodIcon,
  Close,
} from "../../../styles/auth/login";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import malitell from "../../../assets/images/malitell.png";
import kakao from "../../../assets/images/auth/login/kakao.png";
import naver from "../../../assets/images/auth/login/naver.png";
import LoginEmail from "./loginEmail";
import Signup from "../signup/signup";

interface NavProps {
  handleLogin: (event: React.MouseEvent) => void;
  handleBack: (event: React.MouseEvent) => void;
}

export default function Login({ handleLogin, handleBack }: NavProps) {
  const [email, setEmail] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleEmail = (e: React.MouseEvent): void => {
    setEmail(!email);
  };
  const handleSignup = (e: React.MouseEvent): void => {
    setSignup(!signup);
  };

  const loginKakao = (e: React.MouseEvent): void => {
    fetch(`http://localhost:8080/auth/oauth2/kakao`, {
      method: "POST",
    }).then((res) => console.log(res));
  };

  return (
    <>
      {email ? (
        <LoginEmail
          handleBack={handleBack}
          handleLogin={handleLogin}
          handleEmail={handleEmail}
        />
      ) : signup ? (
        <Signup
          handleBack={handleBack}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
        />
      ) : (
        <LoginBox>
          <Close>
            <FontAwesomeIcon
              onClick={(e) => {
                handleLogin(e);
                handleBack(e);
              }}
              icon={faXmark}
              style={{ color: "#bf94e4" }}
            />
          </Close>
          <Img src={malitell} alt="malitellImage" />
          <BtnBox>
            <LoginBtn color="#FEE102" onClick={loginKakao}>
              <MethodIcon src={kakao} />
              <MethodText>카카오로 계속하기</MethodText>
            </LoginBtn>
            <LoginBtn color="#00BF6C">
              <MethodIcon src={naver} />
              <MethodText>네이버로 계속하기</MethodText>
            </LoginBtn>
            <LoginBtn
              color="white"
              onClick={(e) => {
                handleEmail(e);
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#b098ff" }}
                size="2x"
              />
              <MethodText>회원 로그인하기</MethodText>
            </LoginBtn>
            <LoginBtn onClick={handleSignup} color="#FBF3FD">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#bf94e4", marginLeft: "2px" }}
                size="2x"
              />
              <MethodText $margin="50px">회원가입</MethodText>
            </LoginBtn>
          </BtnBox>
        </LoginBox>
      )}
    </>
  );
}
