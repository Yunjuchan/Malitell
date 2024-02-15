import { Wrapper } from "../../styles/bamboo/messageList";
import Message from "./message";
import MessageCreate from "./messageCreate";
import { useState, useEffect } from "react";

export default function MessageList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/mindLetGo/list`, {
      method: "GET",
    }).then((res) => console.log(res.json()));
  }, []);

  return (
    <Wrapper>
      <MessageCreate />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Wrapper>
  );
}
