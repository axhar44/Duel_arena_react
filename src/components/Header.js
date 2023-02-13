import React, { useEffect, useRef, useState,useContext } from "react";
import coin from "../assets/icons/coin.png";
import Logo from "../assets/icons/logo.png";
import user from "../assets/icons/user11.png";
import Group from "../assets/icons/Group.png";
import exchange from "../assets/icons/exchange11.png";
import ring from "../assets/icons/ring.png";
import ExchangeModal from "./header_comps/exchange_modal/exchange_modal";
import SignoutModal from "./signout_modal/signout_modal";
import { RiSettings4Fill } from "react-icons/ri";
import { CgEnter } from "react-icons/cg";
import { Link } from "react-router-dom";
import Toast_message from '../components/Toast';

import { TaskContext } from '../ContextApi/Tasksheet';

import NetworkService from "../services/network.service";
import { ToastContainer, toast } from 'react-toastify';


const networkService = new NetworkService()



const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [order_notification, setOrderNotification] = useState(false);
  const [get_responce, setGetResponce] = useState("");

  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [isSignoutOpen, setIsSignoutOpen] = useState(false);
  const {apiResponse, setApiResponse, order_modal,setOrderModal } = useContext(TaskContext)

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };





  // useEffect(() => {
   
  //    console.warn(order_notification+" use effect state check");
   
  //     const interval = setInterval(() => 
  //   { 
  //    console. log('This will run every  5 second!' );
  //    get_latest_user_coin();
     
  //   }
  //    , 5000); 
  //   return () => clearInterval(interval); 
    
  //  }, ); 





  const id =localStorage.getItem("id");
  let credentials = { id }
  const get_latest_user_coin = async function () {
    
  
    let response3 = await networkService.get_last_order_id(credentials); 
    if (response3.bool === false) {
      // setErr(response3);
      // setSuccessMsg("");
      console.log("error");
    }

   

    console.log(JSON.stringify(response3));
  

  





    // setGetResponce(response3);
    // console.log(response3+" actual data");
    // console.log(get_responce.msg+" lund data");
  

    // if (response3.status === true) {
    //   // console.warn("true condition work");
    //   console.warn("success");
    //   console.log(get_responce+"lund data");
    //   setOrderNotification(true);

    // }

    // if(order_notification===true)
    // {
    //   notify();
    //   //  interval1();
    //  console.warn("notification on");
    // }
  


  


    // const interval1 = setInterval(() => 
    // { 
    //  console. log('second timer working !' );

    //  setOrderNotification(false);
    // console.warn("notification on");
    
     
    // }
    //  , 5000); 
    // return () => clearInterval(interval1); 

    


  }




  const notify = () => toast("Wow so easy!");


  function testModal123()
  {
    setOrderModal(true);
  }

  const handleExchange = (isOpen) =>{
    console.log("isExchangeOpen 1"+isExchangeOpen);
    setIsExchangeOpen(isOpen);
  }
  // const handleSignout = (a) =>{
  //   setIsSignoutOpen(!isSignoutOpen)
  // }
console.log("isExchangeOpen"+isExchangeOpen);
console.log("isSignoutOpen"+isSignoutOpen);
  return (

<>





    {order_notification ===true? (
         // eslint-disable-next-line react/jsx-pascal-case
         <Toast_message />
      ) : null}



       
     
    
      <div className="header flex justify-between w-auto  items-center">
       
          <div className="nothing div"></div>

          <div style={{cursor: 'pointer'}} className="header-gradient flex justify-center items-center gap-6 text-[12px] h-[38px] w-[152px] rounded-full font-normal " onClick={() => testModal123(true)} >
            <p className="flex gap-2 text-white">
              <img src={coin} alt="cashier-coins" />
              0.00
            </p>
            <p className="text-[#FD9F28] text-[12px]"   >cashier</p>
          </div>
       
        <div className="setting flex h-auto w-auto space-x-3 ">
          {/* <select className="bg-[#1D1B3F] pr-3 border-none text-white text-[12px] focus:outline-none" onClick={get_latest_user_coin}>
            <option>absolute</option>
            <option>bar</option>
            <option>center</option>
            <option>d1</option>
            <option>element</option>
          </select> */}

          <div className="relative">
            <span
              className=" flex justify-center items-center h-[38px] w-[38px] bg-[#575DE8] rounded-full"
              onClick={toggleMenu}
            >
              <RiSettings4Fill className="text-white text-[19px]" />
            </span>

            {/* onclick settings */}
            {isMenuOpen ? (
              <div style={{zIndex:'10'}} className="flex h-[164px] w-[150px] bg-[#191537] text-[14px] text-[#6E6D90] font-normal rounded-[16px] -left-10 top-[50px] px-[13px] py-[10px] flex-col z-10 justify-evenly items-start absolute">
                {/* <div className="flex h-[164px] w-[128px] bg-[#191537] text-[14px] text-[#6E6D90] font-normal rounded-[16px] relative top-[84px] px-[13px] py-[10px] right-[460px] flex-col z-10 justify-start justify-evenly items-start"> */}
                <Link to='/profile'>
                <div className="flex justify-center items-center cursor-pointer">
                  <span className="mr-3">
                    <img src={user} alt="" className="" />
                  </span>
                  <span>Profile</span>
                </div>
                </Link>

                
                <div className=" flex justify-center items-center text-white  cursor-pointer">
                  <span className="mr-3">
                    <img src={exchange} alt="" className="ml-[2px]" />
                  </span>
                  <span className="text-white" onClick={()=>setIsExchangeOpen(true)}>Exchange</span>
                </div>
                

                <Link to='/support'>
                <div className=" flex justify-center items-center cursor-pointer">
                  <span className="mr-3">
                    <img src={ring} alt="" className="" />
                  </span>
                  <span>Support</span>
                </div>
                </Link>

                
                <div className=" flex justify-center items-center cursor-pointer">
                  <span className="mr-3">
                    <img src={Group} alt="" className="" />
                  </span>
                  <span className="cursor-pointer text-white" onClick={()=>setIsSignoutOpen(true)} >Sign Out</span>
                </div>
       
              </div>
            ) : null}
          </div>
        </div>
        
        {isExchangeOpen ? <div  className="absolute "><ExchangeModal  setIsExchangeOpen={setIsExchangeOpen}/></div> : ''}
        {isSignoutOpen ? <div  className="absolute "><SignoutModal  setIsSignoutOpen={setIsSignoutOpen}/></div> : ""}
      </div>
      </>
  );
};

export default Header;
