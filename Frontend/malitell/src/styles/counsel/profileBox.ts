import styled from "styled-components";

// 세로 플렉스 정렬방식: ( 가로 : 가운데 정렬  세로 : space-between)
export const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 너비 80% 세로 75%
export const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

// 가로 플렉스 정렬방식: (가로 : space-between 세로 가운데 정렬) 너비 80% 세로 20%
export const ProfileWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 70px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

// 너비 60%
export const Name = styled.div`
  width: 60%;
  font-size: 25px;
`;

// 너비 35%
export const Reputation = styled.div`
  width: 35%;
`;
