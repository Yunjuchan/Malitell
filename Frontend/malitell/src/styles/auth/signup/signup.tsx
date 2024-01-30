import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 900px;
  height: 70%;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  @media screen and (max-width: 1023px) {
    width: 90%;
  }
`;

export const ToolBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  justify-content: space-between;
  align-items: top;
  svg {
    cursor: pointer;
  }
`;
export const Container = styled.div`
  width: 90%;
  height: 80%;
  margin: auto;
`;

export const SmallText = styled.div`
  margin-top: -20px;
  font-size: 20px;
  color: #bf94e4;
`;

export const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #bf94e4;
`;

export const Line = styled.div`
  width: 80%;
  margin: auto;
  height: 4px;
  margin-top: 20px;
  background-color: lightgray;
  @media screen and (max-width: 1023px) {
    width: 95%;
  }
`;
