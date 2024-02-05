import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
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
  &.small {
    width: 48%;
    height: 100%;
    margin: 0;
    input {
      width: 40%;
    }
  }
  &.submit {
    background-color: #f2d4f9;
  }
  select:invalid {
    color: lightgray;
    font-weight: bold;
  }
  .placeholder {
    color: lightgray;
    option {
      color: black;
    }
  }
  @media screen and (max-width: 1023px) {
    width: 95%;
  }
`;

export const FlexBox = styled.div`
  width: 55%;
  height: 8%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    width: 95%;
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
  &::placeholder {
    color: lightgray;
  }
`;

export const Select = styled.select`
  width: 40%;
  height: 80%;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option``;

export const Line = styled.div`
  width: 55%;
  height: 2px;
  margin: auto;
  background-color: #f2d4f9;
  border: none;
  @media screen and (max-width: 1023px) {
    width: 95%;
  }
`;

export const Submit = styled.input`
  transition: all 0.2s;
  width: 55%;
  height: 8%;
  margin: auto;
  background-color: #f2d4f9;
  border: 1px solid #f2d4f9;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  &:hover,
  &:focus {
    outline: none;
    transition: all 0.2s;
    color: white;
    background-color: #bf94e4;
  }
  @media screen and (max-width: 1023px) {
    width: 95%;
  }
`;

export const Message = styled.div`
  width: 55%;
  height: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;
