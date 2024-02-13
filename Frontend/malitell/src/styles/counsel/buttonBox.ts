import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div<{ $color?: string }>`
  cursor: pointer;
  width: 80%;
  height: 80px;
  margin: 2% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 20px;
  color: ${({ $color }) => ($color === "#bf94e4" ? "white" : "#bf94e4")};
  background-color: ${({ $color }) => $color};
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;
