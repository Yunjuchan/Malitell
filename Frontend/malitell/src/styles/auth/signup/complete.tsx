import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;

export const Image = styled.img`
  width: 250px;
  height: 200px;
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

export const Button = styled.div`
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  width: 50%;
  height: 10%;
  margin: 30px auto;
  border-radius: 10px;
  background-color: #f2d4f9;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    color: white;
    background-color: #bf94e4;
    box-shadow: 1px 1px 1px 1px lightgray;
  }
`