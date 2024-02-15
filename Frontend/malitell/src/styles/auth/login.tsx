import styled from "styled-components";

export const LoginBox = styled.div`
  position: fixed;
  text-align: center;
  width: 376px;
  height: 624px;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
`;

export const Close = styled.div`
  display: flex;
  margin-top: 20px;
  width: 95%;
  justify-content: end;
  svg {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 60%;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -15px;
  width: 100%;
  height: 230px;
  a {
    margin: auto;
    text-decoration: none;
    color: black;
  }
`;

export const LoginBtn = styled.div`
  display: flex;
  align-items: center;
  width: 212px;
  height: 45px;
  margin: auto;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: ${({ color }) => color};
  cursor: pointer;
  svg,
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const MethodIcon = styled.img`
  width: 32px;
  height: 28px;
  text-align: center;
`;

export const MethodText = styled.div<{ $margin?: string }>`
  font-size: 14px;
  /* font-weight: bold; */
  margin-left: ${({ $margin }) => ($margin ? $margin : "30px")};
`;
