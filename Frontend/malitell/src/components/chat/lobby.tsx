import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type ChatRoom = {
  roomId: string;
  name: string;
  chatRoomSeq: string;
};

const Lobby: React.FC = () => {
  interface FormData {
    counselorSeq: string;
    clientSeq: string;
  }

  const { register, handleSubmit } = useForm<FormData>({});

  const create = (data: FormData) => {
    fetch(`http://localhost:8080/chat/room`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(res);
    })
  }

  const [roomName, setRoomName] = useState("");
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    findAllRooms();
  }, []);

  const findAllRooms = async () => {
    const response = await axios.get("http://localhost:8080/chat/rooms");
    console.log(response.data);
    setChatRooms(response.data);
  };

  const createRoom = async () => {
    if (roomName === "") {
      alert("방 제목을 입력해 주십시요.");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("name", roomName);

      const response = await axios.post(
        "http://localhost:8080/chat/room",
        params
      );
      alert(`${response.data.name} 방 개설에 성공하였습니다.`);
      setRoomName("");
      await findAllRooms();
    } catch {
      alert("채팅방 개설에 실패하였습니다.");
    }
  };

  const enterRoom = (chatRoomSeq: string) => {
    console.log(chatRoomSeq);
    // const sender = prompt("대화명을 입력해 주세요.");
    // if (sender !== null && sender !== "") {
      // localStorage.setItem("wschat.sender", sender);
      localStorage.setItem("wschat.roomId", chatRoomSeq);
      window.location.href = `/chat/room/${chatRoomSeq}`;
    // }
  };

  return (
    <div>
      <h3>채팅방 리스트</h3>
      <div>
        <label>방제목</label>
        <form onSubmit={handleSubmit(create)}>
          <input
            {...register("clientSeq", {
              required: "내담자 번호",
            })}
          />
          <input
            {...register("counselorSeq", {
              required: "상담가 번호",
            })}
          />
          <button type="submit">채팅방 개설</button>
        </form>
      </div>
      <ul>
        {chatRooms.map((room) => (
          <li key={room.roomId} onClick={() => enterRoom(room.chatRoomSeq)}>
            {room.chatRoomSeq}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lobby;
