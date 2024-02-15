import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as s from "../../styles/common/vendingmachine";
import * as g from "../../styles/grid";
import normal from "../../assets/images/vendingMachine/normal.gif";
import Modal from "./vendingMachine/modal";

export default function Vendingmachine() {
  const [gachaClose, setGachaClose] = useState(false);
  const [gachaClick, setGachaClick] = useState(false);

  const closeGacha = (e: React.MouseEvent) => {
    setGachaClose(true);
  };

  const clickGacha = (e: React.MouseEvent) => {
    setGachaClick(!gachaClick);
    setGachaClose(!gachaClose);
  };

  return (
    <>
      {gachaClose ? null : (
        <s.Box>
          <s.Close onClick={closeGacha}>
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </s.Close>
          <img onClick={clickGacha} src={normal} />
        </s.Box>
      )}
      {gachaClick ? (
        <>
          <g.Background />
          <Modal clickGacha={clickGacha} />
        </>
      ) : null}
      <Outlet />
    </>
  );
}
