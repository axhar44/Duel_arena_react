import React, { useState,useEffect } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Chat2.css";
import Logo from "../assets/icons/logo.png";

import MessageHeader from "./message/message-header";
import MessageBody from "./message/message-body";

import { AiOutlineUser } from "react-icons/ai";
// import { Link } from "react-router-dom";
import MessageInput from "./message/message-input";

export default function Chat2() {
  // const [sidebar, setSidebar] = useState(false);
  
  const [chatRef, setChatRef] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
          <div className="Chat relative flex flex-col text-white bg-[#191537] h-[100vh]
             w-[400px] 
              justify-between">
              <div>
              <MessageHeader  /> 
              </div>

              <div>
                <MessageBody chatRef={chatRef} setChatRef={setChatRef} />
              </div>
 
              <div>
                <MessageInput setChatRef={setChatRef} />
              </div>
          </div>
    </>
  );
}
