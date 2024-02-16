import styled from "styled-components";

export const Wrapper = styled.div`
  /* box-shadow: 0 0 0 1px black inset;  */
  width: 100%;
  height: 231px;
  background-color: #bf94e4;
`;

export const Content = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

export const TextBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 130px;
  height: 35px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: #bf94e4;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Subscribe = styled.div`
  font-size: 20px;
`;

export const Img = styled.img`
  width: 200px;
`;
