import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SockJsClient from "react-stomp";

interface Message {
  type: string;
  sender: string;
  message: string;
}

interface Room {
  name: string;
}

export default function RoomComponent() {
  const [room, setRoom] = useState<Room | null>(null);
  const [sender, setSender] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const roomId = useRef(localStorage.getItem("wschat.roomId"));
  const clientRef = useRef<any>();

  const findRoom = async () => {
    if (roomId.current) {
      const response = await axios.get(
        "http://localhost:8080/chat/room/" + roomId.current
      );
      setRoom(response.data);
    }
  };

  const sendMessage = () => {
    console.log(sender);
    console.log(clientRef.current);
    console.log(clientRef.current.connected);
    console.log("send");
    if (
      roomId.current &&
      sender &&
      clientRef.current
    ) {
      console.log("123123")
      clientRef.current.sendMessage(
        "http://localhost:8080/pub/chat/message",
        JSON.stringify({
          type: "TALK",
          roomId: roomId.current,
          sender,
          message,
        })
      );
      setMessage("");
    }
  };

  const recvMessage = (recv: Message) => {
    setMessages((prevMessages) => [
      {
        type: recv.type,
        sender: recv.type === "ENTER" ? "[알림]" : recv.sender,
        message: recv.message,
      },
      ...prevMessages,
    ]);
  };

  useEffect(() => {
    setSender(localStorage.getItem("wschat.sender"));
    findRoom();
  }, []);

  return (
    <div className="container">
      <div>
        <h2>{roomId.current}</h2>
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text">내용</label>
        </div>
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="input-group-append">
          <button type="button" onClick={sendMessage}>
            보내기
          </button>
        </div>
      </div>
      <SockJsClient
        url="http://localhost:8080/ws-stomp"
        topics={["http://localhost:8080/sub/chat/" + roomId.current]}
        onMessage={recvMessage}
        ref={(client: any) => {
          clientRef.current = client;
        }}
      />
      <ul className="list-group">
        {messages.map((message, index) => (
          <li key={index} className="list-group-item">
            {message.sender} - {message.message}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
