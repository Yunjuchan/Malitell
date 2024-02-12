import React, { useRef, useEffect } from "react";
import { StreamManager } from "openvidu-browser";
import * as s from "../../styles/counselling/Video";

interface Props {
  streamManager: StreamManager;
}

function Video({ streamManager }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoplay = true;

  useEffect(() => {
    if (streamManager && videoRef.current) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return (
    <s.Video autoPlay={autoplay} ref={videoRef} style={{ width: "100%" }}>
      <track kind="captions" />
    </s.Video>
  );
}

export default Video;
