import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import * as s from "../../styles/common/notification";

export default function Notification() {
  const [notification, setNotification] = useState(false);

  const onClick = () => {
    setNotification(true);
  };

  const close = () => {
    setNotification(false);
  };

  return (
    <>
      {notification ? (
        <s.Chat>
          <div onClick={close}>x</div>
        </s.Chat>
      ) : (
        <s.Notification onClick={onClick}>
          <FontAwesomeIcon icon={faComments} className="fa-5x" />
        </s.Notification>
      )}
      <Outlet />
    </>
  );
}
