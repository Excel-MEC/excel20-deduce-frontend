import React, { useState } from "react";
import "./Chatarea.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Chat from "../chat/src/App";

function Chatarea(props) {
  const [unread, setUnread] = useState(0);
  return (
    <div
      id="chat-area"
      className={`cha d-flex cursor-default flex-column ${
        props.cha ? "cha-tra" : " "
      }`}
    >
      <div className={"position-sticky"} style={{ top: 0 }}>
        <FontAwesomeIcon
          onClick={() => {
            props.toggle();
            setUnread(0);
          }}
          className={`toggle-3 cursor-pointer ${
            props.cha ? "togg-tra" : "rotate-180 "
          }`}
          icon={faAngleDown}
        />
        <h6 id={"chat-heading"} className="text-center grey-3 pt-2 pb-1">
          DISCUSSION BOARD{unread > 0 && !props.cha ? ` (${unread})` : ""}
        </h6>
      </div>
      <Chat setUnread={setUnread} unread={unread} />
    </div>
  );
}

export default Chatarea;
