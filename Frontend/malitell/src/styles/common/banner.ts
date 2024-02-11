import styled from "styled-components";

export const Wrapper = styled.div<{ $color?: string }>`
  width: 96%;
  height: 150px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px auto;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  border-radius: 10px;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
`;

export const TextBox = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Subscribe = styled.div`
  font-size: 15px;
`;
export const Image = styled.img`
  width: 30%;
`;
