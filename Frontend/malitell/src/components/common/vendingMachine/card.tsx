import { useEffect, useState } from "react";
import * as s from "../../../styles/common/vendingMachine/card";

interface contentProps {
  cardDisplay: (i: number) => void;
  index: number;
  flip: string;
}

export default function Card({ cardDisplay, index, flip }: contentProps) {
  const [flipped, setFlipped] = useState(false);
  const [display, setDisplay] = useState("");
  const [position, setPosition] = useState(false);

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

  return (
    <s.Wrapper onClick={handleFlip} $display={display} $fadeOut={flip} $position={position}>
      <s.Card $flipped={flipped}>
        <s.Content className="front">{index}</s.Content>
        <s.Content className="back">{index}</s.Content>
      </s.Card>
    </s.Wrapper>
  );
}
