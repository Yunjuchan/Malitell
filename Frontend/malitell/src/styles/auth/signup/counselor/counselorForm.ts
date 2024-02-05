import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 80%;
  height: 95%;
  margin: auto;
  background-color: cyan;
`;

export const InputBox = styled.div`
  width: 55%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  &.focus {
    border: 1px solid #bf94e4;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 80%;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
`