import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const IntroVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function ComingSoon() {
  return (
    <Wrapper>
      <IntroVideo>
        <Video autoPlay>
          <source src="/videos/comingSoon.mp4" type="video/mp4" />
        </Video>
      </IntroVideo>
    </Wrapper>
  );
}
