import styled from "styled-components";

export const Wrapper = styled.form`
  width: 80%;
  margin: -190px auto;
  text-align: center;
  padding-top: 20px;
  /* box-shadow: 1px 1px 1px 1px lightgray inset; */
  .focus {
    border: 1px solid #bf94e4;
  }
  .normal {
    border: 1px solid lightgray;
  }
`;

export const InputBox = styled.div`
  width: 420px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: white;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.input`
transition: all 0.2s;
  width: 460px;
  height: 50px;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2d4f9;
  font-size: 18px;
  font-weight: bold;
  &:hover, &:focus {
    text-decoration: none;
    outline: none;
    transition: all 0.2s;
    color: white;
    background-color: #bf94e4;
  }
`
