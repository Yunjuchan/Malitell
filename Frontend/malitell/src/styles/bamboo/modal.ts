import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  position: absolute;
  background-color: rgba(255, 240, 250, 0.95);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const ToolBox = styled.div`
  width: 100%;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
  color: #bf94e4;
  text-align: end;
  span {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: 90%;
  margin: auto;
  text-align: center;
`

export const Input = styled.input`
  width: 88%;
  height: 88%;
  padding: 1%;
  font-size: 25px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #FBF3FD;
  &:focus {
    outline: none;
  }
`

export const Submit = styled.input`
  width: 90%;
  height: 8%;
  margin-top: 2%;
  border: 0;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #bf94e4;
  color: white;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
  }
`