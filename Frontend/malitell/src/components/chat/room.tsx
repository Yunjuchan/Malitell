import React, { useEffect, useState } from "react";
import axios from "axios";
import SockJsClient from "react-stomp";

type Message = {
  type: string;
  sender: string;
  message: string;
};

type Room = {
  name: string;
};

const Room = () => {
  const [roomId, setRoomId] = useState<string | null>(null);
  const [sender, setSender] = useState<string | null>(null);
  const [room, setRoom] = useState<Room>({ name: "" });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const storedRoomId = localStorage.getItem("wschat.roomId");
    const storedSender = localStorage.getItem("wschat.sender");
    setRoomId(storedRoomId);
    setSender(storedSender);
    findRoom(storedRoomId);
  }, []);

  const findRoom = async (roomId: string | null) => {
    if (roomId) {
      const response = await axios.get(
        "http://localhost:8080/chat/room/" + roomId
      );
      // console.log(response.data);
      setRoom(response.data);
    }
  };

  const sendMessage = (client: any) => {
    if (roomId && sender) {
      client.sendMessage(
        "http://localhost:8080/pub/chat/message",
        JSON.stringify({ type: "TALK", roomId, sender, message })
      );
      setMessage("");
    }
  };

  const recvMessage = (message: Message) => {
    setMessages((prevMessages) => [
      {
        type: message.type,
        sender: message.type === "ENTER" ? "[알림]" : message.sender,
        message: message.message,
      },
      ...prevMessages,
    ]);
  };

  return (
    <div className="container">
      <h2>{room.name}</h2>
      <div className="input-group">
        {/* <div className="input-group-prepend"> */}
          {/* <label className="input-group-text">내용</label> */}
        {/* </div> */}
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="input-group-append">
          <SockJsClient
            url="http://localhost:8080/ws-stomp"
            topics={[`http://localhost:8080/chat/room/${roomId}`]}
            onMessage={(msg: Message) => recvMessage(msg)}
            onConnect={(client: any) => {
              if (roomId && sender) {
                client.sendMessage(
                  "http://localhost:8080/chat/message",
                  JSON.stringify({ type: "ENTER", roomId, sender })
                );
              }
            }}
            onDisconnect={() => {
              console.log("Disconnected");
            }}
          >
            {(client: any) => (
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => sendMessage(client)}
              >
                보내기
              </button>
            )}
          </SockJsClient>
        </div>
      </div>
      <ul className="list-group">
        {messages.map((msg, index) => (
          <li className="list-group-item" key={index}>
            {msg.sender} - {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Room;
