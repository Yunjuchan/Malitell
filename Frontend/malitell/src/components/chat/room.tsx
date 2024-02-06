import React, { useEffect, useRef } from "react";
import SockJsClient from "react-stomp";

export default function Room() {
  const $websocket = useRef(null);
  let topics = ['/pub'];

  return (
    <div>
      <SockJsClient
      url='http://localhost:8080/chat/room/19e3ddb2-c379-44d4-b9cd-c24355ac0bd3'
      topics={topics}
      onMessage = {(msg: string) => console.log(msg)}
      />
    </div>
  )
}
