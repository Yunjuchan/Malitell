import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: 90%;
  height: 80px;
  margin: 2% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #bf94e4;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;

interface Props {
  counselorSeq: number;
}

export default function CreateChat({ counselorSeq }: Props) {
  const CreateChat = () => {
    if (window.sessionStorage.getItem("Access_Token")) {
      fetch(`http://localhost:8080/api/chat/room`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Access_Token: `${window.sessionStorage.getItem("Access_Token")}`,
        },
        body: JSON.stringify({
          "counselorSeq": counselorSeq,
          "clientSeq": window.sessionStorage.getItem("mySeq"),
        }),
      }).then(() => {
        const url = "/chat";
        window.open(url, "_blank", "width=400, height=530");
      });
    } else {
      window.alert("로그인 후 이용해주세요.");
    }
  };
  return <Button onClick={CreateChat}>채팅하기</Button>;
}
