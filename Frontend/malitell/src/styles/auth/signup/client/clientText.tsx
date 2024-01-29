import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: -40px auto;
  @media screen and (max-width: 1023px) {
    width: 98%;
  }
`;

export const SmallText = styled.div`
  font-size: 30px;
`;

export const Line = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 20px;
  background-color: lightgray;
`;
