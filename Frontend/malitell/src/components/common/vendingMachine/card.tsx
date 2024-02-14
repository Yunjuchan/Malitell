import { useEffect, useState } from "react";
import * as s from "../../../styles/common/vendingMachine/card";
import { capsule } from "../../../store/etc/capsuleSlice";

interface contentProps {
  cardDisplay: (i: number) => void;
  index: number;
  flip: string;
}

interface Result {
  name: string;
  phrases: string;
  videoUrl: string;
}

export default function Card({ cardDisplay, index, flip }: contentProps) {
  const [flipped, setFlipped] = useState(false);
  const [display, setDisplay] = useState("");
  const [position, setPosition] = useState(false);

  const [result, setResult] = useState<Result>();
  const [thumbnail, setThumbnail] = useState("");
  const toVideo = (url: string) => {
    window.open(`${url}`);
  };
  const handleFlip = (e: React.MouseEvent) => {
    setFlipped(true);
    setPosition(true);
    cardDisplay(index);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (flip === "none") {
      timeoutId = setTimeout(() => {
        setDisplay("none");
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [flip]);

  useEffect(() => {
    const fetchCapsule = async () => {
      const res = await capsule();
      setResult(res);
      setThumbnail(
        "https://img.youtube.com/vi/" + res.videoUrl.slice(32) + "/0.jpg"
      );
    };

    fetchCapsule();
  }, []);

  return (
    <s.Wrapper
      onClick={handleFlip}
      $display={display}
      $fadeOut={flip}
      $position={position}
    >
      <s.Card $flipped={flipped}>
        <s.Content className="front"></s.Content>
        <s.Content className="back">
          <s.Result>
            <s.Name>{result ? result.name : "Loading..."}</s.Name>
            <s.Phrases>{result ? result.phrases : "Loading..."}</s.Phrases>
            <s.VideoBox>
              <div>추천 영상</div>
              <s.Video
                onClick={() => result?.videoUrl && toVideo(result?.videoUrl)}
                src={thumbnail}
                alt="video"
              />
            </s.VideoBox>
          </s.Result>
        </s.Content>
      </s.Card>
    </s.Wrapper>
  );
}
