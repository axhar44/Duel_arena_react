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
  const [sidebar, setSidebar] = useState(false);
  
  const [chatRef, setChatRef] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar" style={{zIndex:0}}>
          {/* <div className="h-[50px] w-[50px] mt-3 mb-3">
            <Link to="/">
              <img src={Logo} className="logo" alt="dual-arena-logo" />
            </Link>
          </div> */}
          <Link to="#" className="menu-bars">
            {/* <FaIcons.FaBars onClick={showSidebar}  className="w-[15000%]"/> */}
            {/* <span className="msg-span flex justify-center items-center w-[4200%] h-[38px]"> */}
            <span className="msg-span flex justify-center items-center w-[10%] h-[38px]">
              <div
                className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#23224A] text-black  hover:bg-[#5a4dba]">
                <BiMessageSquareDetail className="text-white w-[19px] h-[19px]"  onClick={showSidebar}/>
              </div>
            </span>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul> */}
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
        </nav>
      </IconContext.Provider>
    </>
  );
}
