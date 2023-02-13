import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import Chat from "../components/Chat";
import Chat2 from "../components/Chat2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../css/home.css";
// import "../css/demo.css";
// import "../css/nucleo-icons.css";
// import "../css/black-dashboard.css";
import Logo from "../assets/icons/logo.png";
import SignOutModal from "../components/signout_modal/signout_modal";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import OpenTicket from "../components/Support/OpenTicket";
import LoginModal from "../components/login_modal/login_modal";
import SignUpModal from "../components/signup_modal/signup_modal";

import RecoverModal from "../components/recover_modal/recover_modal";

import HomeMain from "../components/home_main/home_main";

// redux
import { openTicket } from "../redux/actions/support";
import { signup } from "../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [isToken, setToken] = useState(false);
  const [isToggeld, setIsToggeld] = useState(true);

  const dispatch = useDispatch();
  const ticketToggler = useSelector((state) => state.TogglerReducer);
  const ShowSignUp = useSelector((state) => state.AuthReducer);
  const forgotPassword = useSelector((state) => state.AuthReducer);
  let isLoggedIn = false;

  // localStorage.removeItem("_token")

  const token = localStorage.getItem("_token");

  useEffect(() => {
    console.log("HOME useEffect");
    if (token) {
      console.log("useEffect token : " + token);
      setToken(true);
      isLoggedIn = true;
      console.log("istoken:" + isToken);
    }
  }, []);

  console.log("ticket toggler: " + ticketToggler);

  // let chatClass = 'translate-x-0'
  // const [isSignOut, setisSignOut] = useState(true)

  const chat = useRef();
  const chatButton = useRef();

  const toggleChat = () => {
    let transition = "translate-x-full";
    let chatClass = "translate-x-0";
    setIsToggeld(!isToggeld);

    console.log("toggle chat"+isToggeld);
    
    console.log(chat.current.classList.contains(chatClass));
    console.log(chat.current.classList.contains(chatClass));

    if (chat.current.classList.contains(chatClass)) {
      chat.current.classList.remove(chatClass);
      chat.current.classList.add(transition);
      chat.current.classList.add("hidden");
      chatButton.current.classList.remove("hidden");
      // chat.current.classList.add("hidden")
    } else if (!chat.current.classList.contains(chatClass)) {
      chat.current.classList.remove(transition);
      chat.current.classList.remove("hidden");
      chat.current.classList.add(chatClass);
      chatButton.current.classList.add("hidden");
    }
  };

  // console.log("open"+openTicket)

  return (
    <center>
      {isToken ? null : (
        <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center">
          {" "}
          <LoginModal />{" "}
        </div>
      )}
      {ShowSignUp ? (
        <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center">
          {" "}
          <SignUpModal />{" "}
        </div>
      ) : null}
      {ticketToggler ? (
        <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center">
          {" "}
          <OpenTicket />{" "}
        </div>
      ) : null}
      {/* {forgotPassword ? <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center"> <RecoverModal/> </div>  : null} */}

      <div className="flex justify-between relative h-[auto] w-[auto] text-white ">
        {/* sidebar */}

        <div className="siderbar h-auto w-auto  px-5">
            <Chat2/>
          {/* <div className="h-[50px] mt-3 mb-3 "> */}
          <div className="logo h-[50px] mb-3 ">
            <Link to="/">
              <img src={Logo} className="logo" alt="dual-arena-logo" />
            </Link>
          </div>
            <Sidebar />
        </div>

        {/* content */}

        {/* <div className="gap w-[20px] "></div> */}
        <div className="h-[100vh] w-[calc(100%-500px)] mt-2">
          <div className="realtive h-[30px] mb-4"  style={{zIndex:30}}>
            <Header className="" />
          </div>

          <div className="h-[650px] w-[100%] rounded-3xl">
            <Outlet />
            {/* <HomeMain/> */}
          </div>

          <div className="h-[25px] mt-[156px] ">
            <Footer />
          </div>
        </div>
        <div className="gap w-[50px] "></div>

        {/* chat */}

        <div className="overflow-x-hidden w-auto h-full">
          <div
            className="w-auto h-full transform transition-transform translate-x-0"
            ref={chat}
          >
            {/* <Chat onClick={toggleChat} toggleChat={toggleChat} /> */}
          </div>


          {isToggeld ? (
            ""
          ) : (
            <div className="ion-fab-button ">
              <div
                className=" flex justify-center items-center rounded-full h-[50px] w-[50px] bg-[#191537] hover:bg-[#5a4dba] mt-[10px] mr-[10px] transition duration-150 ease-in-out hover:h-[60px] hover:w-[60px] hidden "
                onClick={toggleChat}
                ref={chatButton}
              >
                <BsFillChatLeftTextFill />
              </div>
            </div>
          )}
        </div>
      </div>
    </center>
  );
};

export default Home;
