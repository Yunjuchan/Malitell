import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as s from "../../../styles/common/vendingMachine/modal";
import gatcha from "../../../assets/images/vendingMachine/fast.gif";
import lastFrame from "../../../assets/images/vendingMachine/lastFrame.png";
import bomb from "../../../assets/images/vendingMachine/explosion.gif";
import Content from "./content";

interface machineProps {
  clickGacha: (event: React.MouseEvent) => void;
}

export default function Modal({ clickGacha }: machineProps) {
  // 처음에 뽑기 이미지 및 폭발 효과, 타임아웃 걸기 위한 state
  const [imgSrc, setImgSrc] = useState(gatcha);
  const [explosion, setExplosion] = useState("none");

  // 뽑기 연출 후 카드가 나타나게 하기 위한 state
  const [contents, setContents] = useState("none");

  useEffect(() => {
    // 뽑기 연출 타임아웃
    const stop = setTimeout(() => {
      setImgSrc(lastFrame);
    }, 4220);
    const bomb = setTimeout(() => {
      setExplosion("");
    }, 2900);
    const afterBomb = setTimeout(() => {
      setExplosion("none");
    }, 3600);

    // 카드 페이드인 타임아웃
    const fadeIn = setTimeout(() => {
      setContents("flex");
    }, 3800);

    return () => {
      clearTimeout(stop);
      clearTimeout(bomb);
      clearTimeout(afterBomb);
      clearTimeout(fadeIn);
    };
  }, []);

  return (
    <s.Wrapper>
      <s.GachaClose onClick={clickGacha}>
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "#B197FC" }}
          size="2x"
        />
      </s.GachaClose>
      <s.ContentBox>
        <s.Gatcha src={imgSrc} alt="loading" />
        <s.Bomb src={bomb} alt="bomb" $display={explosion} />
        <Content contents={contents} />
      </s.ContentBox>
    </s.Wrapper>
  );
}
