import React, { useEffect, useRef, useState } from "react";

// interface

export default function Room() {
  const [messages, setMessages] = useState<string[]>([]);
  const webSocket = useRef<WebSocket | null>(null);

  // const sendMessage = (message) => {
  //   if (webSocket.current.readyState === WebSocket.OPEN) {
  //     webSocket.current.send(message);
  //   }
  // };

  useEffect(() => {
    webSocket.current = new WebSocket("wss://sebsocket-url");
    webSocket.current.onopen = () => {
      console.log("WebSocket 연결!");
    };
    webSocket.current.onclose = (error) => {
      console.log(error);
    };
    webSocket.current.onerror = (error) => {
      console.log(error);
    };
    webSocket.current.onmessage = (event: MessageEvent) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      webSocket.current?.close();
    };
  }, []);

  return <div>Room</div>;
}
