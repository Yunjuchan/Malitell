import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1024px;
  height: 800px;
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
  width: 180px;
  height: 60px;
  margin-left: 30px;
`;

export const InnerBox = styled.div`
  width: 23%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #bf94e4;
  margin-right: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 45px;
  font-size: 16px;
  color: #bf94e4;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
`

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
