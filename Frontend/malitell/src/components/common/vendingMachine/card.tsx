import { useState } from "react";
import * as s from "../../../styles/common/vendingMachine/card";

export default function Card() {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = (e: React.MouseEvent) => {
    setFlipped(true);
  };

  return (
    <s.Wrapper onClick={handleFlip}>
      <s.Card $flipped={flipped}>
        <s.Content className="front"></s.Content>
        <s.Content className="back"></s.Content>
      </s.Card>
    </s.Wrapper>
  );
}
