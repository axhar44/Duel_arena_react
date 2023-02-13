import React, { useEffect, useRef, useState,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IconContext } from "react-icons";
// import Chat from "../components/Chat";
import Chat2 from "../components/Chat2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../css/home.css";
import "../css/responsive.css";
import Logo from "../assets/icons/logo.png";
import SignOutModal from "../components/signout_modal/signout_modal";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import OpenTicket from "../components/Support/OpenTicket";
import OrderModal from '../components/order_modal/order_modal';
import LoginModal from "../components/login_modal/login_modal";
import SignUpModal from "../components/signup_modal/signup_modal";

import RecoverModal from "../components/recover_modal/recover_modal";

// redux
import { openTicket,closeOrderModal } from "../redux/actions/support";
import { signup,closeOrderModalTicket } from "../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import * as AiIcons from "react-icons/ai";

import { TaskContext } from '../ContextApi/Tasksheet';


const Home = () => {

  const {apiResponse, order_modal } = useContext(TaskContext)
  const [isToken, setToken] = useState(false);
  const [isToggeld, setIsToggeld] = useState(true);

  const dispatch = useDispatch();
  const ticketToggler = useSelector((state) => state.TogglerReducer);
  const ShowSignUp = useSelector((state) => state.AuthReducer);
  const forgotPassword = useSelector((state) => state.AuthReducer);
  let isLoggedIn = false;

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  // localStorage.removeItem("_token")
  const token = localStorage.getItem("_token");
  const verification_status = localStorage.getItem("set_verify");


  const  local_token = localStorage.getItem("_token");
  // console.warn(local_token);
  // console.warn("local token here");

  useEffect(() => {
    
    
    if (token) {
      console.log("useEffect token : " + token);
      setToken(false);
      isLoggedIn = true;
      console.log("istoken:" + token);
    }
  }, [local_token]);

  console.log("ticket toggler: " + ticketToggler);

  // let chatClass = 'translate-x-0'
  // const [isSignOut, setisSignOut] = useState(true)

  const chat = useRef();
  const chatButton = useRef();

  const toggleChat = () => {
    let transition = "translate-x-full";
    let chatClass = "translate-x-0";
    setIsToggeld(!isToggeld);

    console.log("toggle chat" + isToggeld);

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

    // <center style={{overflow: 'hidden'}} >
<>
   





    {order_modal ===false ? (
        null
      ) : <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center">
      {""}
      <OrderModal />{" "}
    </div>}




{local_token ? (
        null
      ) : <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center">
      {""}
      <LoginModal />{" "}
    </div>}




      
      {ShowSignUp ? (
        <div className="absolute h-[100vh] w-full bg-black bg-opacity-50 z-10  flex justify-center items-center">
          {""}
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

      <div className="flex  relative h-[auto] w-[auto] text-white P-0" >
        {/* sidebar */}
        <IconContext.Provider value={{ color: "#FFF" }} >
          <div className="siderbar h-[auto] w-[auto]  px-10" >
            {/* <Chat2 /> */}
            <nav className={sidebar ? "nav-menu" : "nav-menu active"} >
            
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
              </ul>
              <Chat2 />
            </nav>

            <div className="logo h-[50px] mb-3 ">
              <Link to="/">
                <img src={Logo} className="logo" alt="dual-arena-logo" />
              </Link>
            </div>

            <Sidebar />
          </div>

          {/* content */}

          <div className={sidebar ? "main_content active px-20" : "main_content  px-20"}>
            <div className="realtive h-[30px] flex justify-content-between">
              <div className="col-10">
                <Header />
              </div>
              <div className="col-2">
                  <Link to="#" >
                    <span className="msg-span flex justify-center items-center ">
                      <div
                        className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#23224A] text-black  hover:bg-[#5a4dba]">
                        <BiMessageSquareDetail className="text-white w-[19px] h-[19px]" onClick={showSidebar} />
                      </div>
                    </span>
                  </Link>
              </div>
            </div>

            <div className="h-[auto] rounded-3xl px-10 ">
              <Outlet />
            </div>
            <div className="h-[25px] mt-[156px] ">
              <Footer />
            </div>
          </div>
        </IconContext.Provider>

        {/* chat */}

        <div className="overflow-x-hidden w-auto h-full">
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
      </>
  );

  
};

export default Home;
