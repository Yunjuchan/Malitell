import React from "react";
import {
  BigText,
  Line,
  SmallText,
  Wrapper,
} from "../../../../styles/auth/signup/selection/selectionText";

export default function SelectionText() {
  return (
    <Wrapper>
      <SmallText>회원가입</SmallText>
      <Line />
      <BigText>회원선택</BigText>
    </Wrapper>
  );
}
