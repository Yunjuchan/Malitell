import { Wrapper } from "../../styles/bamboo/messageList";
import Message from "./message";
import MessageCreate from "./messageCreate";

export default function MessageList() {
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
