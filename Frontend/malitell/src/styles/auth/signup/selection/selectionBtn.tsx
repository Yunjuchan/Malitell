import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  a {
    width: 45%;
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 1023px) {
    width: 98%;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    a {
      width: 55%;
    }
  }
`;

export const Btn = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;

export const Text = styled.div`
margin-top: 60px;
font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const Img = styled.img`
  width: 35%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
