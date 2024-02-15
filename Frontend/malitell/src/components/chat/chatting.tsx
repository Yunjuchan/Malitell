import { useEffect, useState, useRef } from "react";
import * as s from "../../styles/chat/chatting";
import SockJsClient from "react-stomp";
import axios from "axios";
import { Room } from "./list";
import malitell from "../../assets/images/malitell.png";

interface Message {
  type: string;
  userSeq: string;
  content: string;
}

export default function Chatting() {
  const token = sessionStorage.getItem("Access_Token");
  const url = `http:localhost:8080/api/ws-stomp`;
  const [sender, setSender] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const roomId = useRef(sessionStorage.getItem("wschat.roomId"));
  const clientRef = useRef<any>();
  const [you, setYou] = useState<{ name: string; image: string }>();

  // 이전 채팅내역 불러오기
  const findRoom = async () => {
    if (roomId.current) {
      const response = await axios
        .get("http://localhost:8080/api/chat/room/" + roomId.current, {
          headers: {
            Access_Token: token,
          },
        })
        .then((res) => {
          return res.data;
        })
        .then((res: Room) => {
          if (String(res.clientSeq) === sessionStorage.getItem("mySeq")) {
            setYou({ name: res.counselorName, image: res.counselorProfileImg });
          } else {
            setYou({ name: res.clientName, image: res.clientProfileImg });
          }
        });
    }
  };

  const prevMessages = async () => {
    if (roomId.current) {
      const response = await axios
        .get(
          "http://localhost:8080/api/room/" + roomId.current + "/message",
          {
            headers: {
              Access_Token: token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  // 메시지 전송
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
      setMessage("");
    }
  };

  // 메시지 수신
  const recvMessage = (recv: Message) => {
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
    prevMessages();
  }, []);

  return (
    <>
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
      <s.Wrapper>
        <s.RoomInfo>
          <s.RoomInfo className="profile">
            {you && you.image ? (
              <s.Profile src={you.image} alt="profile" />
            ) : (
              <s.Profile src={malitell} alt="profile" />
            )}
            <s.Name>{you && you.name}</s.Name>
          </s.RoomInfo>
        </s.RoomInfo>
        <s.ChattingBox>
          {messages &&
            messages.map((message, index) => (
              <s.MessageBox
                key={index}
                $align={
                  String(message.userSeq) === sessionStorage.getItem("mySeq")
                    ? "end"
                    : "start"
                }
              >
                <s.Message>{message.content}</s.Message>
              </s.MessageBox>
            ))}
        </s.ChattingBox>
        <s.InputBox>
          <s.Input
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
              }
            }}
          />
          <s.Send onClick={sendMessage}>전송</s.Send>
        </s.InputBox>
      </s.Wrapper>
    </>
  );
}
