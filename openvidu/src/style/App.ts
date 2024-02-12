import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1024px;
  height: 100vh;
  margin: auto;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: #fbf3fd;
`;

export const Logo = styled.img`
  width: 10%;
  height: 60px;
  margin-left: 30px;
  background-color: cyan;
`;

export const InnerBox = styled.div`
  width: 20%;
  height: 60px;
  margin-right: 30px;
  background-color: cyan;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  `;

export const Videos = styled.div`
  width: 65%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: #fbf3fd;
`;

export const Chat = styled.div`
  width: 33%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: #fbf3fd;
`;
