import { useState } from "react";
import { Wrapper } from "../../styles/bamboo/message";
import Modal from "./modal";
import { useDispatch } from "react-redux";
import { flipLoginModal } from "../../store/common/loginModalSlice";

export default function MessageCreate() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const onClick = (e: React.MouseEvent) => {
    if (window.sessionStorage.getItem("Access_Token")) {
      setModal(!modal);
    } else {
      dispatch(flipLoginModal());
    }
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
