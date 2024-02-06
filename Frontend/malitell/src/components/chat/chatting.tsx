import * as s from "../../styles/chat/chatting";

export default function Chatting() {
  return (
    <s.Wrapper>
      <s.RoomInfo>
        상담자 정보가 들어갈 공간        
      </s.RoomInfo>
      <s.ChattingBox>
        <s.MessageBox $align="end" >
          <s.Message>123</s.Message>
        </s.MessageBox>
        <s.MessageBox>
          <s.Message>123</s.Message>
        </s.MessageBox>
        <s.MessageBox $align="end" >
          <s.Message>123</s.Message>
        </s.MessageBox>
        <s.MessageBox $align="end" >
          <s.Message>123</s.Message>
        </s.MessageBox>
      </s.ChattingBox>
      <s.InputBox>
        <s.Input />
        <s.Send>전송</s.Send>
      </s.InputBox>
    </s.Wrapper>
  );
}
