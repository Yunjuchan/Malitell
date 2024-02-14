import front from "../../../assets/images/vendingMachine/cardFront.png";
import back from "../../../assets/images/vendingMachine/cardBack.png";
import styled, { css, keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div<{
  $display?: string;
  $fadeOut?: string;
  $position?: boolean;
}>`
  transition: 0.2s;
  width: 32%;
  height: 500px;
  display: ${({ $display }) => $display};
  position: relative;

  ${({ $fadeOut }) =>
    $fadeOut === "none" &&
    css`
      animation: ${fadeOut} 1s;
    `}
`;

export const Card = styled.div<{ $flipped?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.5s ease-in-out;
  transform-style: preserve-3d;
  transform: ${({ $flipped }) =>
    $flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  align-items: center;
  color: #fff;
  &.front {
    background-image: url(${front});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
  &.back {
    background-image: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.2) rotateY(180deg);
  }
`;

export const Result = styled.div`
  width: 80%;
  height: 95%;
  margin: auto;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Name = styled.div`
  width: 100%;
  height: 30px;
  color: lightcoral;
  font-size: 20px;
  font-weight: bold;
`

export const Phrases = styled.div`
  width: 100%;
  height: 50px;
  color: coral;
  font-size: 18px;
`

export const VideoBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: coral;
`

export const Video = styled.img`
  width: 100%;
  height: 150px;
`