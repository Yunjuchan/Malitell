import React from "react";
import { useState, useEffect } from "react";
import { Publisher, Subscriber } from "openvidu-browser";
import Video from "./Video";
import * as s from "../../styles/counselling/Session";
import cat from '../../assets/images/malitell.png'

interface SessionProps {
  subscriber: Subscriber;
  publisher: Publisher;
  isVideoActive: Boolean;
}

function Session({ subscriber, publisher, isVideoActive }: SessionProps) {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    if (subscriber) {
      setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
    }
  }, [subscriber]);

  return (
    <s.Wrapper>
      <s.Pub>
        {isVideoActive ? <s.Image src={cat} /> : <Video streamManager={publisher} />}
      </s.Pub>
      <s.Sub>
        {subscribers.map((subscriberItem) => (
          <div key={subscriberItem.id}>
            <Video streamManager={subscriberItem} />
          </div>
        ))}
      </s.Sub>
    </s.Wrapper>
  );
}

export default Session;
