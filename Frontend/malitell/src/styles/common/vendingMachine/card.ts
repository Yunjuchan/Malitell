import styled from "styled-components";

export const Wrapper = styled.div`
  width: 32%;
  height: 500px;
  position: relative;
  &:hover {
    /* transform: rotateY(180deg); */
  }
  `;

export const Card = styled.div<{$flipped?:boolean}>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.5s ease-in-out;
  transform-style: preserve-3d;
  transform: ${({ $flipped }) => $flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;


export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &.front {
    background-color: tomato;
  }
  &.back {
    background-color: royalblue;
    transform: rotateY(180deg);
  }
`;
