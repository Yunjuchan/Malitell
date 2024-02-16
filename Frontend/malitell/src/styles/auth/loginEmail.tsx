import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 472px;
  height: 484px;
  text-align: center;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  @media screen and (max-width: 1023px) {
    width: 90%;
  }
`

export const ToolBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  justify-content: space-between;
  align-items: top;
  svg {
    cursor: pointer;
  }
`

export const Image = styled.img`
  width: 160px;
  height: 150px;
  margin-top: 1%;
  margin-bottom: 5%;
`

export const Form = styled.form`
  width: 100%;
  margin-top: -3%;
  justify-content: space-around;
  .focus {
    border: 1px solid #bf94e4;
  }
  .normal {
    border: 1px solid lightgray;
  }
  @media screen and (max-width: 1023px) {
    margin: -3% auto;
    width: 90%;
  }
`;

export const InputBox = styled.div`
  width: 60%;
  margin: 2% auto;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 3%;
  border-radius: 5px;
  background-color: white;
  @media screen and (max-width: 1023px) {
    margin: 3% auto;
    width: 80%;
  }
  svg {
    margin-left: 10px;
  }
  .placeholder {
    color: lightgray;
    option {
      color: black;
    }
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

export const Submit = styled.input`
  transition: all 0.2s;
  width: 66.5%;
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
  @media screen and (max-width: 1023px) {
    width: 86.5%;
  }
`;

export const Message = styled.div`
  width: 45%;
  margin: 2% auto;
  font-size: 12px;
  color: red;
  @media screen and (max-width: 1023px) {
    margin: 1% auto;
  }
`;