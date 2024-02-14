import React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  OpenVidu,
  Session as OVSession,
  Publisher,
  Subscriber,
} from "openvidu-browser";
import axios, { AxiosError } from "axios";
import Form from "../../components/counselling/Form";
import Session from "../../components/counselling/Session";
import Chat from "../../components/counselling/Chat";
import Controls from "../../components/counselling/Controls";
import logo from "../../assets/images/nav/logo.png";
import * as s from "../../styles/counselling/Counselling";

export default function Counselling() {
  const [session, setSession] = useState<OVSession | "">("");
  const [sessionId, setSessionId] = useState<string>("");
  const [subscriber, setSubscriber] = useState<Subscriber | null>(null);
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [OV, setOV] = useState<OpenVidu | null>(null);

  const OPENVIDU_SERVER_URL = `https://i10c208.p.ssafy.io:8443`;
  const OPENVIDU_SERVER_SECRET = "MALITELL";

  const leaveSession = useCallback(() => {
    if (session) session.disconnect();

    setOV(null);
    setSession("");
    setSessionId("");
    setSubscriber(null);
    setPublisher(null);
  }, [session]);

  const joinSession = () => {
    const OVs = new OpenVidu();
    setOV(OVs);
    setSession(OVs.initSession());
  };

  useEffect(() => {
    window.addEventListener("beforeunload", leaveSession);

    return () => {
      window.removeEventListener("beforeunload", leaveSession);
    };
  }, [leaveSession]);

  const sessionIdChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSessionId(event.target.value);
  };

  useEffect(() => {
    if (session === "") return;

    session.on("streamDestroyed", (event) => {
      if (subscriber && event.stream.streamId === subscriber.stream.streamId) {
        setSubscriber(null);
      }
    });
  }, [subscriber, session]);

  useEffect(() => {
    if (session === "") return;

    session.on("streamCreated", (event) => {
      const subscribers = session.subscribe(event.stream, "");
      setSubscriber(subscribers);
    });

    const createSession = async (sessionIds: string): Promise<string> => {
      try {
        const data = JSON.stringify({ customSessionId: sessionIds });
        const response = await axios.post(
          `${OPENVIDU_SERVER_URL}/openvidu/api/sessions`,
          data,
          {
            headers: {
              Authorization: `Basic ${btoa(
                `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
              )}`,
              "Content-Type": "application/json",
            },
          }
        );

        return (response.data as { id: string }).id;
      } catch (error) {
        const errorResponse = (error as AxiosError)?.response;

        if (errorResponse?.status === 409) {
          return sessionIds;
        }

        return "";
      }
    };

    const createToken = (sessionIds: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const data = {};
        axios
          .post(
            `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionIds}/connection`,
            data,
            {
              headers: {
                Authorization: `Basic ${btoa(
                  `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
                )}`,

                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            resolve((response.data as { token: string }).token);
          })
          .catch((error) => reject(error));
      });
    };

    const getToken = async (): Promise<string> => {
      try {
        const sessionIds = await createSession(sessionId);
        const token = await createToken(sessionIds);
        return token;
      } catch (error) {
        throw new Error("Failed to get token.");
      }
    };

    getToken()
      .then((token) => {
        session
          .connect(token)
          .then(() => {
            if (OV) {
              const publishers = OV.initPublisher(undefined, {
                audioSource: undefined,
                videoSource: undefined,
                // 입장시 음소거
                publishAudio: true,
                publishVideo: true,
                mirror: true,
              });

              setPublisher(publishers);
              session
                .publish(publishers)
                .then(() => {})
                .catch(() => {});
            }
          })
          .catch(() => {});
      })
      .catch(() => {});
  }, [session, OV, sessionId, OPENVIDU_SERVER_URL]);

  // 상담 종료버튼 액션
  const handleEixt = () => {
    console.log("닫기");
    window.close();
  };

  // 화면 전환용 코드
  const [isVideoActive, setIsVideoActive] = useState(false);
  const toggleVideo = () => {
    setIsVideoActive(!isVideoActive);
    // publisher.publishVideo(isVideoActive);
  };

  // 세션 진행시간 표시용 코드
  const [sessionTime, setSessionTime] = useState<number>(0);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prevTime) => prevTime + 1);
    }, 1000); // 1초마다 시간을 증가합니다.

    return () => {
      clearInterval(timer); // 세션을 떠날 때 타이머를 정리합니다.
    };
  }, [sessionId]);

  // 상대방 정보를 받기 위한 state
  const [info, setInfo] = useState<{ seq: string; role: string }>();

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <>
      <s.Wrapper>
        {!session && (
          <Form
            joinSession={joinSession}
            sessionId={sessionId}
            sessionIdChangeHandler={sessionIdChangeHandler}
          />
        )}
        {session && (
          <>
            <s.TopBox>
              <s.Logo src={logo} alt="logo" />
              <s.InnerBox>
                상담 시간: {formatTime(sessionTime)}
                <s.Button onClick={handleEixt}>상담 종료</s.Button>
              </s.InnerBox>
            </s.TopBox>
            <s.BottomBox>
              <Session
                isVideoActive={isVideoActive}
                publisher={publisher as Publisher}
                subscriber={subscriber as Subscriber}
              />
              <s.Chat>
                <Chat session={session as OVSession} setInfo={setInfo} />
              </s.Chat>
              {publisher && (
                <Controls
                  publisher={publisher}
                  toggleVideo={toggleVideo}
                  isVideoActive={isVideoActive}
                />
              )}
            </s.BottomBox>
          </>
        )}
      </s.Wrapper>
    </>
  );
}
