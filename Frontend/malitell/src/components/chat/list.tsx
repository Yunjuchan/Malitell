import { create } from "domain";
import React, { useEffect } from "react";
import styled from "styled-components";

interface LobbyProps {
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setRoom: React.Dispatch<React.SetStateAction<number>>;
}

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  margin: 2% auto;
  text-align: center;
  background-color: white;
`;

const Room = styled.div`
  width: 50%;
  height: 30px;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Btn = styled.button`
  width: 30%;
  height: 30px;
  margin: 10px auto;
  padding: 10px;
`;

export default function List({ setCreate, setRoom }: LobbyProps) {
  useEffect(() => {
    fetch(`http://localhost:8080/chat/room/014abae6-5dd7-4474-971a-cefd5ef22e16`, {
      method: "GET",
      // headers: {
      // "Content-Type": "application/json",
      // },
      // body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.json());
      return res;
    })
    // .then((res) => {
      // console.log(res.json())
    // })
  });

  // api호출받고 push를 통해 rooms에 방 목록 추가
  let rooms = [1, 2, 3];

  const handleCreate = (event: React.MouseEvent) => {
    setCreate(true);
  };

  return (
    <Wrapper>
      <h1>방목록</h1>
      {rooms.map((room, index) => (
        <Room key={index}>방 {room}</Room>
      ))}
      <Btn onClick={handleCreate}>방 만들기</Btn>
    </Wrapper>
  );
}
