import * as s from "../../styles/chat/list";
import profile from "../../assets/images/favicon.png";
import { useState } from "react";
import Chatting from "./chatting";

export default function List() {
  // 방 정보 불러온 뒤 참여자 정보 확인 후 본인이 아닌 이용자의 프로필 사진, 닉네임(이름) 불러오기
  // 채팅 내역 불러와서 가장 최근 메시지 불러와서 띄워줄 것
  const [join, setJoin] = useState(false);

  const handleJoin = (e: React.MouseEvent) => {
    setJoin(!join);
  };

  return (
    <>
      {join ? (
        <Chatting />
      ) : (
        <s.Wrapper>
          <s.Room onClick={handleJoin}>
            <s.Profile src={profile} />
            <s.RoomInfo>
              <s.Name>테스트</s.Name>
              <s.Message>글자 사이즈 15px입니다.</s.Message>
            </s.RoomInfo>
          </s.Room>
        </s.Wrapper>
      )}
    </>
  );
}
