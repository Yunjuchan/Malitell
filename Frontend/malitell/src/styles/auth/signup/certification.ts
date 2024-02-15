import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;

export const Image = styled.img`
  width: 45%;
  height: 40%;
`;

export const TextBox = styled.div`
  margin-top: 5%;
`;

export const MailText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #bf94e4;
  @media screen and (max-width: 1023px){
    font-size: 28px;
  }
`;

export const Explanation = styled.div`
  margin-top: 30px;
  font-size: 20px;
  color: gray;
  @media screen and (max-width: 1023px){
    font-size: 18px;
  }
`

export const Form = styled.form`
  width: 60%;
  height: 30%;
  margin: auto;
`

export const Input = styled.input`
  width: 80%;
  height: 30%;
  border: none;
  border-radius: 10px;
  margin-top: 3%;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  &:focus {
    outline-color: #bf94e4;
  }
`

export const Submit = styled.input`
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  width: 80%;
  height: 30%;
  margin: 30px auto;
  border: none;
  border-radius: 10px;
  background-color: #f2d4f9;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    color: white;
    background-color: #bf94e4;
    box-shadow: 1px 1px 1px 1px lightgray;
  }
`;