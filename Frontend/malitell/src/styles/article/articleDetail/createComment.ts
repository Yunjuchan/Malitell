import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;

export const userInfoBox = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  color: #bf94e4;
  align-items: center;
`;

export const Textarea = styled.input`
  width: 75%;
  height: 70%;
  padding-left: 2%;
  background-color: #FBF3FD;
  border-radius: 10px;
  border: none;
`;

export const Submit = styled.button`
  width: 8%;
  height: 70%;
  border: none;
  background-color: #bf94e4;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`
