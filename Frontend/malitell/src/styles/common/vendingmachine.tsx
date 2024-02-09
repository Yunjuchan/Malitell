import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  height: 15%;
  width: 15%;
  top: 40vh;
  right: 0;
  z-index: 1;
  img {
    margin-left: 35px;
    width: 70%;
    cursor: pointer;
  }
  @media screen and (max-width: 1023px) {
    left: 75vw;
    top: 70vh;
    img {
      margin: 0;
      width: 150%;
    }
  }
`;

export const Close = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 70%;
  text-align: center;
  width: 20px;
  height: 20px;
  margin-bottom: 30px;
  path {
    color: #B197FC;
  }
  @media screen and (max-width: 1023px) {
    width: 15px;
    height: 15px;
    margin-left: 130%;
    path {
      color: #8A4BAF;
    }
  }
`;


