import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 10px;
  width: 1024px;
  height: 800px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  @media screen and (max-width: 1023px) {
    width: 350px;
    height: 800px;
    img {
      margin-top: 50%;
      width: 100%;
      height: 40%;
    }
  }
`;

export const GachaClose = styled.div`
  width: 98%;
  height: 20px;
  display: flex;
  justify-content: end;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: fit-content;
  `;

export const Gatcha = styled.img`
  margin-top: 20%;
  width: 40%;
  height: 40%;
`;
