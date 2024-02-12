import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  height: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1%;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
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

export const Line = styled.div`
  width: 96%;
  height: 1px;
  margin: auto;
  background-color: #bf94e4;
`