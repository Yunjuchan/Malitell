import { useState } from "react";
import styled from "styled-components"
import Create from "./create";
import List from "./list";
import Room from "./room";

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  position: fixed;
  background-color: lightgray;
`;

export default function Lobby() {
  const [create, setCreate] = useState(false);
  const [room, setRoom] = useState(0);

  return (
    <Wrapper>
      {create? <Create setRoom={setRoom} /> : room !== 0 ? <Room /> : <List setCreate={setCreate} setRoom={setRoom} />}
    </Wrapper>
  )
}
