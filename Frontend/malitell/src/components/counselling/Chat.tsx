import { useState, useEffect } from "react";
import { Session, SignalEvent } from "openvidu-browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import * as s from "../../styles/counselling/Chat";

interface Props {
  session: Session;
  setInfo: React.Dispatch<React.SetStateAction<{ seq: string; role: string } | undefined>>;
}

export default function Chat({ session, setInfo }: Props) {
  const [memo, setMemo] = useState(true);
  const [chat, setChat] = useState(false);

  const handleSwitch = (e: React.MouseEvent) => {
    setMemo(!memo);
    setChat(!chat);
  };

  const [messages, setMessages] = useState<{ id: string; message: string }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = (message: string) => {
    session
      .signal({
        data: message,
        type: "chat",
        to: [],
      })
      .then(() => {
        console.log("전송완료");
        setInputMessage("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const chatHandler = (event: SignalEvent) => {
      const message = event.data;
      const senderId = event.from?.connectionId;
      if (message && senderId) {
        console.log(event.from?.connectionId);
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: senderId, message },
        ]);
      }
    };

    session.on("signal:chat", chatHandler);

    return () => {
      session.off("signal:chat", chatHandler);
    };
  }, [session]);

  // 입장시 내 정보 시그널로 넘겨줌
  useEffect(() => {
    setTimeout(() => {
      session
        .signal({
          data: JSON.stringify({
            seq: sessionStorage.getItem("mySeq"),
            role: sessionStorage.getItem("myRole"),
          }),
          type: "info",
          to: [],
        })
        .then((res) => {
          console.log(res);
        });
    }, 2000);
  }, []);

  // 새로운 참가자 입장시 내 정보를 보내줌
  useEffect(() => {
    // 'streamCreated' 이벤트 리스너 추가
    session.on('streamCreated', (event) => {
      setTimeout(() => {
        session
          .signal({
            data: JSON.stringify({
              seq: sessionStorage.getItem("mySeq"),
              role: sessionStorage.getItem("myRole"),
            }),
            type: "info",
            to: [],
          })
          .then((res) => {
            console.log(res);
          });
      }, 2000);
    });
  
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      session.off('streamCreated');
    };
  }, []);

  // 상대방 정보 입력
  useEffect(() => {
    // 'signal' 이벤트 리스너 추가
    session.on('signal', (event: SignalEvent) => {
      // 시그널의 타입이 'info'인 경우만 처리
      if (event.type === 'signal:info' && event.data) {
        const data = JSON.parse(event.data);

        if (data.seq !== sessionStorage.getItem("mySeq")) {
          const info = {"seq": data.seq, "role": data.role}
          setInfo(info);
        }
      }
    });
  
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      session.off('signal');
    };
  }, []);

  return (
    <s.Wrapper>
      <s.Toggle>
        <s.Switch onClick={handleSwitch} $check={memo}>
          <FontAwesomeIcon icon={faNoteSticky} />
          상담 일지
        </s.Switch>
        <s.Switch onClick={handleSwitch} $check={chat}>
          <FontAwesomeIcon icon={faComment} />
          채팅창
        </s.Switch>
      </s.Toggle>

      {/* 메모 */}
      <s.MemoBox $display={memo}>
        <s.Memo />
      </s.MemoBox>

      {/* 채팅창 */}
      <s.Chat $display={chat}>
        <s.MessageList>
          {messages.map((message, index) => (
            <p key={index}>
              {session.connection.connectionId === message.id ? (
                <s.Message $align="end">
                  <s.Me>{message.message}</s.Me>
                </s.Message>
              ) : (
                <s.Message>
                  <s.You>{message.message}</s.You>
                </s.Message>
              )}
            </p>
          ))}
        </s.MessageList>
        <s.InputBox>
          <s.Input
            // type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <s.Button onClick={() => sendMessage(inputMessage)}>전송</s.Button>
        </s.InputBox>
      </s.Chat>
    </s.Wrapper>
  );
}
