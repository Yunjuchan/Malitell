import React, { useState } from "react";
import { Publisher } from "openvidu-browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import * as s from "../../styles/counselling/Controls";

interface Props {
  publisher: Publisher;
  toggleVideo: (event: React.MouseEvent) => void;
  isVideoActive: Boolean;
}

export default function Controls({ publisher, isVideoActive, toggleVideo }: Props) {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const toggleAudio = () => {
    setIsAudioActive(!isAudioActive);
    publisher.publishAudio(isAudioActive);
  };


  return (
    <s.Wrapper>
      {isVideoActive ? (
        <FontAwesomeIcon icon={faVideoSlash} onClick={toggleVideo} />
      ) : (
        <FontAwesomeIcon icon={faVideo} onClick={toggleVideo} />
      )}
      {isAudioActive ? (
        <FontAwesomeIcon icon={faMicrophoneSlash} onClick={toggleAudio} />
      ) : (
        <FontAwesomeIcon icon={faMicrophone} onClick={toggleAudio} />
      )}
    </s.Wrapper>
  );
}
