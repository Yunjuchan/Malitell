import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as s from "../../../styles/common/vendingMachine/modal";
import loading from "../../../assets/images/vendingMachine/fast.gif";
import lastFrame from '../../../assets/images/vendingMachine/lastFrame.png';

interface machineProps {
  clickGacha: (event: React.MouseEvent) => void;
}

export default function Modal({ clickGacha }: machineProps) {
  const [imgSrc, setImgSrc] = useState(loading);
  const gifDuration = 4220;
  useEffect(() => {
    const timer = setTimeout(() => {
      setImgSrc(lastFrame);
    }, gifDuration);

    return () => clearTimeout(timer);
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
      </s.ContentBox>
    </s.Wrapper>
  );
}
