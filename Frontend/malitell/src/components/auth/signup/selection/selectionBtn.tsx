import React from "react";
import {
  Wrapper,
  Btn,
  Text,
  Img,
} from "../../../../styles/auth/signup/selection/selectionBtn";
import client from "../../../../assets/images/auth/signup/client.png";
import counselor from "../../../../assets/images/auth/signup/counselor.png";
import { NavLink } from "react-router-dom";

export default function SignupSelect() {
  return (
    <Wrapper>
      <NavLink to={"./client"}>
        <Btn color="#00BC81">
          <Text>일반 회원가입</Text>
          <Img src={client} alt="client" />
        </Btn>
      </NavLink>
      <NavLink to={"/"}>
        <Btn color="#008FC0">
          <Text>상담가 회원가입</Text>
          <Img src={counselor} alt="counselor" />
        </Btn>
      </NavLink>
    </Wrapper>
  );
}
