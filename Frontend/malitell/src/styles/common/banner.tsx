import styled from "styled-components";

export const Wrapper = styled.div`
  width: 97%;
  height: 47%;
  margin-left: 1%;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: ${({color}) => color};
`