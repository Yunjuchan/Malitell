import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SockJsClient from "react-stomp";

interface Message {
  type: string;
  userSeq: string;
  content: string;
}

interface Room {
  name: string;
}

export default function RoomComponent() {
  const token = sessionStorage.getItem("Access_Token");
  const url = `http:localhost:8080/ws-stomp`;
  const [room, setRoom] = useState<Room | null>(null);
  const [sender, setSender] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const roomId = useRef(sessionStorage.getItem("wschat.roomId"));
  const clientRef = useRef<any>();

  const findRoom = async () => {
    if (roomId.current) {
      const response = await axios.get(
        "http://localhost:8080/chat/room/" + roomId.current
      );
      setRoom(response.data);
      console.log(response.data);
    }
  };

  const sendMessage = () => {
    if (roomId.current) {
      clientRef.current.sendMessage(
        "/pub/chat/message",
        JSON.stringify({
          chatRoomSeq: roomId.current,
          userSeq: sender,
          content: message,
        }),
        { Access_Token: `${sessionStorage.getItem("Access_Token")}` }
      );
      console.log("보냈다");
      setMessage("");
    }
  };

  const recvMessage = (recv: Message) => {
    console.log("메시지가 왔어...?!");
    console.log(recv.content);
    setMessages((prevMessages) => [
      {
        type: recv.type,
        userSeq: recv.userSeq,
        content: recv.content,
      },
      ...prevMessages,
    ]);
  };

  useEffect(() => {
    setSender(sessionStorage.getItem("wschat.sender"));
    findRoom();
    console.log(JSON.stringify({ token }));
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
        url={url}
        topics={["/sub/chat/room/" + roomId.current]}
        onMessage={recvMessage}
        headers={{ Access_Token: `${sessionStorage.getItem("Access_Token")}` }}
        onConnect={() => {
          console.log("Websocket connected");
        }}
        onError={(err: any) => {
          // 웹소켓 연결에서 오류가 발생하면 실행될 함수
          console.error("Websocket Error:", err);
        }}
        ref={(client: any) => {
          clientRef.current = client;
        }}
      />
      <ul className="list-group">
        {messages.map((message, index) => (
          <li key={index} className="list-group-item">
            {message.userSeq} - {message.content}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
