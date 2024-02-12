import React from "react";
import {
  Name,
  ProfileImage,
  ProfileWrapper,
  Reputation,
  Wrapper,
} from "../../../styles/counsel/profileBox";
import { CounselorData } from "../../../routes/counsel/counselorDetail";
export interface CounselorProps {
  counselor: CounselorData;
}

export default function ProfileBox({counselor}: CounselorProps) {
  return (
    <Wrapper>
      <ProfileImage>상담가 사진</ProfileImage>
      <ProfileWrapper>
        <Name>{counselor.name}</Name>
        <Reputation>{counselor.grade}</Reputation>
      </ProfileWrapper>
    </Wrapper>
  );
}
