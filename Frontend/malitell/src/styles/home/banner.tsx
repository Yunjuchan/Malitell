import styled from "styled-components";

export const Wrapper = styled.div`
  width: 97%;
  height: 47%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 1%;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: ${({ color }) => (color ? color : null)};
  cursor: pointer;
`;

export const TextBox = styled.div`
  width: 55%;
  height: 80%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

export const Content = styled.div`
  font-size: 20px;
`;

export const Image = styled.img`
  width: 35%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
