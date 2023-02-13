import React from "react";
import MessageHeader from "./message/message-header";
import MessageBody from "./message/message-body";

import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import MessageInput from "./message/message-input";
import { useState } from "react";
import { useEffect } from "react";

const Chat = ({ toggleChat }) => {

  const [chatRef, setChatRef] = useState(false);

  return (
    <div className="Chat relative flex flex-col text-white bg-[#191537] h-[100vh] w-[300px]  justify-between">
      <div>
        <MessageHeader toggleChat={toggleChat} />
      </div>

      <div>
        <MessageBody chatRef={chatRef} setChatRef={setChatRef} />
      </div>
 
      <div>
        <MessageInput setChatRef={setChatRef} />
      </div>
    </div>
  );
};

export default Chat;
