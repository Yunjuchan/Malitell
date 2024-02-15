import styled from "styled-components";

export const Notification = styled.div`
  text-align: center;
  position: fixed;
  height: 15%;
  width: 15%;
  top: 80vh;
  right: 0;
  cursor: pointer;
`;

export const Chat = styled.div`
  box-shadow: 0 0 0 1px black inset;
  background-color: skyblue;
  padding: 10px;
  position: fixed;
  width: 400px;
  height: 700px;
  top: 20vh;
  right: 20px;
  @media screen and (max-width: 1023px) {
    width: 90vw;
    height: 90vh;
    top: 5vh;
    right: 2.5vw;
  }
`