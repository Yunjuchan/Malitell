import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ $display?: string }>`
  width: 90%;
  height: 60%;
  display: ${({ $display }) => $display};
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 1s ease-in-out;
`;

export const Card = styled.div`
  width: 32%;
  height: 500px;
  background-color: gray;
`