import { Wrapper } from "../../styles/bamboo/messageList";
import Message from "./message";
import MessageCreate from "./messageCreate";
import { useState, useEffect } from "react";

export default function MessageList() {
  interface message {
    mindLetGoSeq: number;
    content: string;
  }

  const [results, setResults] = useState<[]>();

  useEffect(() => {
    fetch(`https://i10c208.p.ssafy.io/api/mindLetGo/list`, {
      method: "GET",
    })
      .then((res) => {
        const data = res.json()
        return data;
      })
      .then((res) => {
        setResults(res);
      });
  }, []);

  return (
    <Wrapper>
      <MessageCreate />
      <>
        {results &&
          results.map((result: message, index) => {
            return <Message key={index} result={result.content} />;
          })}
      </>
    </Wrapper>
  );
}
