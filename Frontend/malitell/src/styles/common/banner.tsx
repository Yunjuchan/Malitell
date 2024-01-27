import styled from "styled-components";

export const Banner = styled.div`
  width: 98%;
  height: 47%;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: ${({color}) => color};
`

export const BigBanner = styled.div`
  width: 100%;
  height: 97%;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: white;
`