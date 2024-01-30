import styled from "styled-components";

export const Wrapper = styled.form`
  width: 80%;
  margin: 3% auto;
  justify-content: space-around;
  .focus {
    border: 1px solid #bf94e4;
  }
  .normal {
    border: 1px solid lightgray;
  }
  @media screen and (max-width: 1023px){
    margin: auto -42.5%;
    width: 185%;
  }
`;

export const InputBox = styled.div`
  width: 45%;
  margin: 2% auto;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 3%;
  border-radius: 5px;
  background-color: white;
  @media screen and (max-width: 1023px){
    margin: 1% auto;
  }
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

export const Message = styled.div`
  width: 45%;
  margin: 3% auto;
  font-size: 12px;
  color: red;
  @media screen and (max-width: 1023px) {
    margin: 1% auto;
  }
`

export const Submit = styled.input`
  transition: all 0.2s;
  width: 51.5%;
  margin: auto;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #f2d4f9;
  font-size: 18px;
  font-weight: bold;
  &:hover,
  &:focus {
    text-decoration: none;
    outline: none;
    transition: all 0.2s;
    color: white;
    background-color: #bf94e4;
  }
`;
