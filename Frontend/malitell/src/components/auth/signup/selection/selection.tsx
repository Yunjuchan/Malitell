import React from "react";
import {
  Wrapper,
  Btn,
  Text,
  Img,
} from "../../../../styles/auth/signup/selection/selection";
import client from "../../../../assets/images/auth/signup/client.png";
import counselor from "../../../../assets/images/auth/signup/counselor.png";
import { NavLink } from "react-router-dom";

interface SignupProps {
  handleClient: (event: React.MouseEvent) => void;
  handleCounselor: (event: React.MouseEvent) => void;
}

export default function SignupSelect({ handleClient, handleCounselor }: SignupProps) {
  return (
    <Wrapper>
      <Btn onClick={handleClient} color="#00BC81">
        <Text>일반 회원가입</Text>
        <Img src={client} alt="client" />
      </Btn>
      <Btn onClick={handleCounselor} color="#008FC0">
        <Text>상담가 회원가입</Text>
        <Img src={counselor} alt="counselor" />
      </Btn>
    </Wrapper>
  );
}
