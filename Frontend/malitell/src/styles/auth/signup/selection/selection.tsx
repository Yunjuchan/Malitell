import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    width: 120%;
    margin: auto -10%;
    align-items: center;
    flex-direction: column;
  }
`;

export const Btn = styled.div`
  cursor: pointer;
  width: 45%;
  height: 80%;
  margin-top: 10%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  @media screen and (max-width: 1023px) {
    margin: auto;
    width: 80%;
    height: 45%;
    img {
      margin: 2% 0;
      width: 10%;
    }
  }
`;

export const Text = styled.div`
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 1023px) {
    margin-top: 30px;
  }
`;

export const Img = styled.img`
  width: 35%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
