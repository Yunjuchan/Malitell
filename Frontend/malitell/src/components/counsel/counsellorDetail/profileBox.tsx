import React from "react";
import {
  Name,
  ProfileImage,
  ProfileWrapper,
  Reputation,
  Wrapper,
} from "../../../styles/counsel/profileBox";

export default function ProfileBox() {
  return (
    <Wrapper>
      <ProfileImage>사진이미지 들어갈거임</ProfileImage>
      <ProfileWrapper>
        <Name>주찬짱</Name>
        <Reputation>5.0/5.0</Reputation>
      </ProfileWrapper>
    </Wrapper>
  );
}
