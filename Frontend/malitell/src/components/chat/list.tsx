import * as s from "../../styles/chat/list";
import profile from "../../assets/images/favicon.png";
import { useEffect, useState } from "react";

export interface Room {
  chatRoomSeq: string;
  counselorSeq: string;
  clientSeq: string;
  counselorName: string;
  clientName: string;
  counselorProfileImg: string;
  clientProfileImg: string;
}

export default function List() {
  // 방 정보 불러온 뒤 참여자 정보 확인 후 본인이 아닌 이용자의 프로필 사진, 닉네임(이름) 불러오기
  // 채팅 내역 불러와서 가장 최근 메시지 불러와서 띄워줄 것

  const [rooms, setRooms] = useState<Room[]>([]);
  const [you, setYou] = useState("");

  const enterRoom = (chatRoomSeq: string) => {
    sessionStorage.setItem(
      "wschat.sender",
      `${sessionStorage.getItem("mySeq")}`
    );
    sessionStorage.setItem("wschat.roomId", chatRoomSeq);
    window.location.href = `/chat/room`;
  };

  // 채팅방 목록 불러와서 본인이 참여중인 채팅방 필터링
  useEffect(() => {
    fetch(`https://i10c208.p.ssafy.io/api/chat/rooms`, {
      method: "GET",
      headers: {
        "Access_Token": `${sessionStorage.getItem("Access_Token")}`,
      },
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        let tempRooms: Room[] = [];
        data && data.forEach((room: Room) => {
          const clientSeq = room.clientSeq.toString();
          const counselorSeq = room.counselorSeq.toString();
          if (
            clientSeq === window.sessionStorage.getItem("mySeq") || counselorSeq === window.sessionStorage.getItem("mySeq")
          ) {
            tempRooms.push(room);
          }
          if (clientSeq === window.sessionStorage.getItem("mySeq")) {
            setYou("counselor");
          } else {
            setYou("client");
          }
        });
        setRooms(tempRooms);
        return tempRooms;
      });
  }, []);

  return (
    <s.Wrapper>
      {rooms &&
        rooms.map((room, index) => (
          <s.Room
            key={index}
            onClick={() => {
              enterRoom(room.chatRoomSeq);
            }}
          >
            {you === "client" ? (
              <>
                {room.clientProfileImg ? (
                  <s.Profile src={room.clientProfileImg} alt="profile" />
                ) : (
                  <s.Profile src={profile} alt="profile" />
                )}
              </>
            ) : (
              <>
                {room.counselorProfileImg ? (
                  <s.Profile src={room.counselorProfileImg} alt="profile" />
                ) : (
                  <s.Profile src={profile} alt="profile" />
                )}
              </>
            )}

            <s.RoomInfo>
              <s.Name>
                {you === "client" ? room.clientName : room.counselorName}
              </s.Name>
            </s.RoomInfo>
          </s.Room>
        ))}
    </s.Wrapper>
  );
}
