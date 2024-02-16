import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  height: 96.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1%;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  width: 94%;
  height: 42%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #bf94e4;
  margin: auto;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: white;
  background-color: #bf94e4;
  border: none;
  border-radius: 20px;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Line = styled.div`
  width: 96%;
  height: 1px;
  margin: auto;
  background-color: #bf94e4;
`;
