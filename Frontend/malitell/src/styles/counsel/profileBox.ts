import styled from "styled-components";

// 세로 플렉스 정렬방식: ( 가로 : 가운데 정렬  세로 : space-between)
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 너비 80% 세로 75%
export const ProfileImage = styled.div`
  width: 80%;
  height: 75%;
`;

// 가로 플렉스 정렬방식: (가로 : space-between 세로 가운데 정렬) 너비 80% 세로 20%
export const ProfileWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
  justify-content: space-between;
  align-items: center;
`;

// 너비 60%
export const Name = styled.div`
  width: 60%;
  height: 100%;
`;

// 너비 35%
export const Reputation = styled.div`
  width: 35%;
  height: 100%;
`;
