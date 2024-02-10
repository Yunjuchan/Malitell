import { useState } from "react";
import * as s from "../../../styles/common/vendingMachine/content";
import Card from "./card";

interface modalProps {
  contents: string;
}

export default function Content({ contents }: modalProps) {
  // api 연결 후 results에 할당 해줄 것!!
  const results = [0, 1, 2];
  const [flip, setFlip] = useState([
    { id: 0, display: "" },
    { id: 1, display: "" },
    { id: 2, display: "" },
  ]);

  const cardDisplay = (i: number) => {
    const afterFlip = flip.findIndex((item) => item.id === i);
    const copiedFlip = [...flip];
    copiedFlip.map((item, id) => {
      if (id !== afterFlip) {
        copiedFlip[id].display = "none";
      }
    });
    setFlip(copiedFlip);
  };

  return (
    <s.Wrapper $display={contents}>
      {results.map((index) => (
        <Card key={index} cardDisplay={cardDisplay} index={index} flip={flip[index].display} />
      ))}
    </s.Wrapper>
  );
}
