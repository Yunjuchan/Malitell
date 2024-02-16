import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const TitleBox = styled.div`
  width: 100%;
  height: 60%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fbf3fd;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`

export const Username = styled.div`
  width: 20%;
  margin-left: 20px;
`

export const ArticleTitle = styled.div`
  width: 60%;
  text-align: start;
  color: #bf94e4;
  font-size: 20px;
  font-weight: 500;
`

export const ButtonBox = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-around;
`

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: ${({color}) => color};
  color: white;
  border: 0;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
`