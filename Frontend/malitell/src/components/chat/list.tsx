import * as s from "../../styles/chat/list";
import profile from "../../assets/images/favicon.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Room {
  chatRoomSeq: string;
  counselorSeq: string;
  clientSeq: string;
}

export default function List() {
  // 방 정보 불러온 뒤 참여자 정보 확인 후 본인이 아닌 이용자의 프로필 사진, 닉네임(이름) 불러오기
  // 채팅 내역 불러와서 가장 최근 메시지 불러와서 띄워줄 것

  const navigate = useNavigate();
  const [rooms, setRooms] = useState<Room[]>([]);

  const enterRoom = (chatRoomSeq: string) => {
    console.log(chatRoomSeq);
    sessionStorage.setItem("wschat.sender", `${sessionStorage.getItem("mySeq")}`);
    sessionStorage.setItem("wschat.roomId", chatRoomSeq);
    window.location.href = `/chat/room`;
  };

  // 채팅방 목록 불러와서 본인이 참여중인 채팅방 필터링
  useEffect(() => {
    fetch(`http://localhost:8080/chat/rooms`, {
      method: "GET",
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        let tempRooms: Room[] = [];
        data.forEach((room: Room) => {
          const clientSeq = room.clientSeq.toString();
          const counselorSeq = room.counselorSeq.toString();
          if (
            (clientSeq || counselorSeq) ===
            window.sessionStorage.getItem("mySeq")
          ) {
            tempRooms.push(room);
          }
        });
        setRooms(tempRooms);
        return tempRooms;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <s.Wrapper>
      {rooms.map((room, index) => (
        <s.Room
          key={index}
          onClick={() => {
            enterRoom(room.chatRoomSeq);
          }}
        >
          <s.Profile src={profile} />
          <s.RoomInfo>
            <s.Name>테스트</s.Name>
            <s.Message>글자 사이즈 15px입니다.</s.Message>
          </s.RoomInfo>
        </s.Room>
      ))}
    </s.Wrapper>
  );
}
