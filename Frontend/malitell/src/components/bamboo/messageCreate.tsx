import { useState } from "react";
import { Wrapper } from "../../styles/bamboo/message";
import Modal from "./modal";

export default function MessageCreate() {
  const [modal, setModal] = useState(false);
  const onClick = (e: React.MouseEvent) => {
    setModal(!modal);
  };
  return (
    <>
      {modal ? <Modal onClick={onClick} /> : null}
      <Wrapper className="modal" onClick={onClick}>
        메시지 작성하기
      </Wrapper>
    </>
  );
}
