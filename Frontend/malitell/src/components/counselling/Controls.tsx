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
}

export default function Controls({ publisher }: Props) {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const toggleAudio = () => {
    setIsAudioActive(!isAudioActive);
    publisher.publishAudio(isAudioActive);
  };

  const toggleVideo = () => {
    setIsVideoActive(!isVideoActive);
    publisher.publishVideo(isVideoActive);
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
