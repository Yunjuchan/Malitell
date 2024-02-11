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
  const token = localStorage.getItem("Access_Token");
  const url = `http:localhost:8080/ws-stomp`;
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
      console.log(response.data);
    }
  };

  // const sendMessage = () => {
  //   if (roomId.current) {
  //     clientRef.current.sendMessage(
  //       "/chat/message",
  //       JSON.stringify({
  //         chatRoom: {
  //           chatRoomSeq: roomId.current,
  //         },
  //         sender,
  //         message,
  //       })
  //     );
  //     setMessage("");
  //   }
  // };

  // const sendMessage = () => {
  //   // console.log("send");
  //   // console.log(sender);
  //   // console.log(clientRef.current);
  //   // // console.log(clientRef.current.connected);
  //   // console.log("-------------------------");
  //   // console.log(roomId);
  //   if (roomId.current) {
  //     clientRef.current.sendMessage(
  //       "/pub/chat/message",
  //       JSON.stringify({
  //         // type: "TALK",
  //         chatRoomSeq: roomId.current,
  //         // "chatRoom": roomId.current,
  //         userSeq: sender,
  //         content: message,
  //         sendTiem: Date(),
  //       })
  //     );
  //     // console.log(clientRef.current.sendMessage);
  //     // console.log(message);
  //     // console.log(Date());
  //     setMessage("");
  //   }
  // };

  const sendMessage = () => {
    // const Access_Token = localStorage.getItem("Access_Token");

    if (roomId.current) {
      clientRef.current.sendMessage(
        "/pub/chat/message",
        JSON.stringify({
          // Access_Token: Access_Token,
          chatRoomSeq: roomId.current,
          userSeq: sender,
          content: message,
          sendTiem: Date(),
        }),
        { 'Access_Token': `${localStorage.getItem("Access_Token")}` }
      );
      // console.log(Access_Token)
      console.log("보냈다")
      setMessage("");
    }
  };

  const recvMessage = (recv: Message) => {
    console.log("메시지가 왔어...?!");
    setMessages((prevMessages) => [
      {
        type: recv.type,
        sender: recv.type === "ENTER" ? "[알림]" : recv.sender,
        message: recv.message,
      },
      ...prevMessages,
    ]);
  };

  // const recvMessage = (recv: Message) => {
  //   setMessages((prevMessages) => [
  //     // {
  //     //   sender: recv.sender,
  //     //   message: recv.message,
  //     // },
  //     recv,
  //     ...prevMessages,
  //   ]);
  //   console.log(recv);
  // };

  useEffect(() => {
    setSender(localStorage.getItem("wschat.sender"));
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
        topics={["/chat/room/" + roomId.current]}
        onMessage={recvMessage}
        headers={{ 'Access_Token': `${localStorage.getItem("Access_Token")}` }}
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
            {message.sender} - {message.message}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
  