
import Ellipse from "../../assets/icons/userImg.png";
import bar from "../../assets/icons/bar.png";
import coin from "../../assets/icons/coin.png";
import copy from "../../assets/icons/copy.png";
import dorbeen from "../../assets/icons/dorbeen.png";
import "./profile_page.css";
import ArrowUp from "../../assets/icons/arrowup.svg";
import Coins from "../../assets/icons/coin.png";
import Dorbeen from "../../assets/icons/dorbeen.png";
import "../../css/home.css";
import "../../css/demo.css";
import "../../css/nucleo-icons.css";
import "../../css/black-dashboard.css";

import {
  FaTimes,
  FaRedoAlt,
  FaAngleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import React,{ useContext, useEffect, useState } from "react";
import  {TaskContext} from '../../ContextApi/Tasksheet';



import { signup, showSignup, hideSignup, hideLogin, showLogin, forgotPassword, hideforgotPassword } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";

import NetworkService from "../../services/network.service";
const networkService = new NetworkService()

const ProfileUsername = () => {

  

  const email= localStorage.getItem("user_email");
  const name= localStorage.getItem("user_name");
  const date= localStorage.getItem("user_date");


  const today = Date.now();

console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));

  return (
    <div className="border-[#23224A] border-[1px] bg-[#23224A] h-[auto] w-[auto] rounded-[16px] p-3">
      <div className="mt-[18px] flex justify-center items-center">
        <img src={Ellipse} alt="Profile" />
      </div>
      <div className="text-[#fff] mt-[10px] flex justify-center items-center">
        <span className="font-medium text-[16px]">{name}</span>
      </div>

      <div className="mt-[10px] text-center pb-3 border-b-[1px] border-b-[#353353]">
        <span className="text-[#BEBEDC] text-[12px] opacity-[0.3]">Joined</span>
        <div className="text-[#fff] text-[14px] font-[400]">{date}</div>
      </div>

      <div className="text-[#fff] mt-[20px] text-center">
        <div className="text-[#BEBEDC] text-[12px] opacity-[0.3]">
          Total Wagered
        </div>
        <div className="text-[14px] font-[400]">0.00</div>
      </div>

      <div className="text-[#fff] mt-[20px] text-center">
        <div className="text-[#BEBEDC ] text-[14px] font-[400] opacity-[0.3]">
          Total Bets
        </div>
        <div className="text-[14px]">0</div>
      </div>

      <div className="text-[#fff] mt-[10px] text-center">
        <div className="flex justify-between items-center p-[10px]">
          <span className="text-[12px] text-[#BEBEDC]">Level 1</span>
          <span className="text-[12px] text-[#BEBEDC]">44/84</span>
        </div>
        <div className="level_div">
          <img className="ml-[14px]" src={bar} alt="" />
        </div>
      </div>

      <div className=" w-[218px] h-[85px] rounded-2xl text-[#fff] mt-[10px] text-center relative">
        <div className="lowOpacityGradient w-[218px] h-[85px] absolute rounded-3xl"></div>
        <div className="bottomline w-[218px] h-[85px] absolute rounded-3xl"></div>
        <div className="ml-[-10px] text-center flex justify-center items-center">
          <img className="m-[5px]" src={coin} alt="" />
          <span>0.00</span>
        </div>
        <div className="text-[#FD9F28]">Cashier</div>
        {/* <div className="bottom_div h-1 w-full"></div> */}
      </div>
    </div>
  );
};

const General = () => {
  const id =localStorage.getItem("id");
  const { apiResponse, setApiResponse } = useContext(TaskContext);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [isChangeEmail, setIsChangeEmail] = useState(false);
  const [isChangePasswordModal, setIsChangePasswordModal] = useState(false);
  const [isGameAccountModal, setIsGameAccountModal] = useState(false);


  // context api data 

  

  const handleExchange = (isOpen) => {
    setIsExchangeOpen(isOpen);
  }
  const handleChangeEmail = (isOpen) => {
    setIsChangeEmail(isOpen);
  }
  const handleChangePasswordModal = (isOpen) => {
    setIsChangePasswordModal(isOpen);
  }
  const handleGameAccountModal = (isOpen) => {
    setIsGameAccountModal(isOpen);
  }
  console.log("isExchangeOpen" + isExchangeOpen);
  console.log("isChangeEmail" + isChangeEmail);
  console.log("isChangePasswordModal" + isChangePasswordModal);
  console.log("setIsGameAccountModal" + setIsGameAccountModal);


  

  const [err, setErr] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [new_confirm_password, setNewConfirmPassword] = useState("");
  const [success_msg, setSuccessMsg] = useState("");
  


  let credentials1 = { id,new_password,new_confirm_password }
  const change_password_profile = async function () {
    
  
    let response3 = await networkService.change_password(credentials1); 
    if (response3.bool === false) {
      setErr(response3);
      setSuccessMsg("");
      console.log(err+"error");
    }

    console.log(JSON.stringify(response3));
  

    if (response3.user === true) {
      console.warn(response3.msg);
      setErr("");
      setSuccessMsg(response3.msg);
    }



    
  


    // if(res.user.id !=null)
    // {
    //   alert('true');
    //   //  setVerification(true);
    //   //  setAuthData(res);
    //   //  const  { Auth_detail} = useContext(TaskContext);
    //   //  console.log(JSON.stringify(Auth_detail));
    //   //  console.log("Auth Data Context API"+JSON.stringify(Auth_detail));
    // }else
    // {
    //   alert('false');
    // }

    
    // localStorage.setItem("_token", res.token)
    // localStorage.setItem("id", res.user.id)
    // localStorage.setItem("user_email", res.user.email)
    // dispatch(hideLogin());

    // if (res.message ==="User login") {
    //   setVerification(true);
    //   console.log(veryy+"ver false");
    // }
    // refreshPage();
  }
  return (
    <>
      <div className="accordion grid  w-[610px] h-[auto]  rounded-[16px] overflow-hidden">
        <div className="accordion-item" id="question1">
          <a className="accordion-link grid grid-cols-2 bg-[#191537] min-h-[50px]" href="#question1">
            <div className="flex items-start p-[24px]">General</div>
            {/* <div className="flex justify-end items-center float-left p-[30px] text-xs">
              <img src={ArrowUp} />
            </div> */}
            {/* <img className="icon ion-md-arrow-forward" src={ArrowUp} /> */}
            <i className="icon ion-md-arrow-forward" />
            <a href="#"><i className="icon ion-md-arrow-down" /></a>
          </a>
          <div className="answer">
            <div className="grid grid-cols-2 grid-rows-2 bg-[#23224A] min-h-[50px] ">
              <div className="grid items-start bg-[#23224A] px-[24px] py-[24px] space-y-[12px] border-b-[1px] border-b-[#353353]">
                <div className="flex items-start text-[14px] text-[#BEBEDC] gap-[10px]">
                  <p className="opacity-[0.5]">Email</p>
                  <p className="text-[#4BD078]">Verified</p>
                </div>
                <div className="flex items-start text-[14px] text-[#BEBEDC]">
                  email@exmaple.com
                  {/* <span onClick={() => setIsChangeEmail(true)}> <img src={copy}/></span> */}

                </div>
              </div>
              <div className="grid w-auto items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px] border-b-[1px] border-b-[#353353]">
                <div className="flex items-start text-[14px] text-[#BEBEDC] opacity-[0.5]">
                  Password
                  <div className=" flex justify-center items-center  cursor-pointer">
                    <span className="mr-3">
                      {/* <img src={exchange} alt="" className="ml-[2px]" /> */}
                    </span>
                  </div>
                </div>
                <div className="flex items-start text-[14px] text-[#BEBEDC] ">
                  ********
                    <span onClick={() => setIsChangePasswordModal(true)}> <img src={copy}/></span>
                </div>
              </div>
              <div className="grid items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px] ">
                <div className="flex items-start opacity-[0.5]">
                  Game account link

                  {/* <span onClick={() => setIsGameAccountModal(true)}>Game Account</span> */}
                </div>
                <div className="flex items-start  text-[#BEBEDC] text-[14px]" onClick={() => setIsGameAccountModal(true)}>Not linked yet  <img className="mt-1 ml-1" src={copy}/></div>
              </div>
              <div className="grid items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px]">
                <div className="flex items-start opacity-[0.5]">Bet Confirmation</div>
                <div className="flex items-start  text-[#BEBEDC]">
                  <span className="">
                    <label
                      for="default-toggle"
                      class="inline-flex relative items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="default-toggle"
                        class="sr-only peer"
                      />
                      <div class="w-[24px] h-[14px] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[10px] after:w-[10px] after:transition-all dark:border-gray-600 peer-checked:bg-[#575DE8]"></div>
                    </label>
                    <span className="text-[14px]">&nbsp; Enabled</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isExchangeOpen ? <ChangePasswordModal setIsExchangeOpen={setIsExchangeOpen} /> : ''} */}
      {/* {isChangeEmail ? <ChangeEmail setIsChangeEmail={setIsChangeEmail} /> : ''} */}
      {/* {isChangePasswordModal ? <ChangePasswordModal setIsChangePasswordModal={setIsChangePasswordModal} /> : ''} */}
      {isChangeEmail ?
        <div className="modal" id="change_password_modal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title text-white">Change Password</h4>
                <button type="button" className="close" onClick={() => setIsGameAccountModal(false)}>×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <br />
                <br />
                {/* <input type="text" class="modal_text_field" name=""> */}
                <div className="modal" id="change_email_modal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title text-white">Change Email</h4>
                        <button type="button" className="close" onClick={() => setIsChangeEmail(false)}>×</button>
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                        <br />
                        <br />
                        {/* <input type="text" class="modal_text_field" name=""> */}
                        <input type="text" className="modal_text_field" name placeholder="Enter New email" />
                        <input type="text" className="modal_text_field" name placeholder="Confirm New email" />
                        <div className="row">
                          <div className="col-sm-6">
                            <button className="modal_button_cancel" onClick={() => setIsChangeEmail(false)}>Cancel</button>
                          </div>
                          <div className="col-sm-6">
                            <button className="modal_button_open_ticket" onClick={() => setIsChangeEmail(false)}>Open Ticket</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ''}
      {isChangePasswordModal ?
        <div className="modal" style={{ zIndex: '1' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title text-white">Change Password</h4>
                <button className="close" onClick={() => setIsChangePasswordModal(false)}>×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <br />
                <br />
                {/* <input type="text" class="modal_text_field" name=""> */}
                <input type="text" className="modal_text_field" name placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)}  />
                <input type="text" className="modal_text_field" name placeholder="Confirm New Password" onChange={(e) => setNewConfirmPassword(e.target.value)}  />
                <div className="row">
                  <div className="col-sm-6">
                    <button className="modal_button_cancel" onClick={() => setIsChangePasswordModal(false)}>Cancel</button>
                  </div>
                  <div className="col-sm-6">
                    {/* <button className="modal_button_open_ticket" onClick={() => setIsChangePasswordModal(false)}>Set new password</button> */
                    <button className="modal_button_open_ticket" onClick={change_password_profile}>Set new password</button> 
                    }
                  </div>
                  {err.bool ? "" : <div className="text-red-500 m-10px" key={err.message}>{err.message}{console.log({ err })}</div>}
                  { <center>
                    
                    <div style={{marginLeft:'40px'}} className="text-green-500 m-20px" key={success_msg}>    {success_msg}{console.log({ success_msg })}</div>
                    </center>
                    }


                  
                </div>
              </div>
            </div>
          </div>
        </div>
        : ''}
      {isGameAccountModal ?
        <div className="modal" id="game_account_modal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title text-white">Link Your Game Account</h4>
                <button type="button" className="close" onClick={() => setIsGameAccountModal(false)}>×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <br />
                <br />
                {/* <input type="text" class="modal_text_field" name=""> */}
                <input type="text" className="modal_text_field" name placeholder="Enter in-game name" />
                <div className="row">
                  <div className="col-sm-6 ">
                    <button className="modal_button_cancel" onClick={() => setIsGameAccountModal(false)}>Cancel</button>
                  </div>
                  <div className="col-sm-6 p-0">
                    <button className="modal_button_open_ticket" onClick={() => setIsGameAccountModal(false)}>Link Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ''}
    </>

  );
};

const Orders = () => {

  
  let data = 0;
  const [list, setList] = useState(data);
  const [orders_data, setOrdersData] = useState([]);
  const [state, setState] = React.useState({ num: 0 });
  const counter = React.useRef(0);

  useEffect(() => {
    if (counter.current < 100) {
      counter.current += 1;
      const timer = setTimeout(() => setState({ num: state.num + 1 }), 10000);
      console.warn("load data");
      get_user_orders_data();
      return () => clearTimeout(timer);
    }
  }, [state]);
  

  const user_id_fk =localStorage.getItem("id");
  let credentials1 = { user_id_fk}

  const get_user_orders_data = async function () {
   // console.warn(credentials1);
    let response3 = await networkService.get_user_orders_data(credentials1);    
    if (response3.query_status === true) {
      console.log("Get Orders data api fetch");
      console.log(response3.user);
      setOrdersData(response3.user);
    }else
    {
      console.log("Get Orders data api fetch error");
    }

    
  }



  return (
    <>
      <div className="accordion grid  w-[610px] h-[auto]  rounded-[16px] overflow-hidden">
        <div className="accordion-item" id="question2">
          <a className="accordion-link grid grid-cols-2 bg-[#191537] min-h-[50px]" href="#question2">
            <div className="flex items-start p-[24px]">Order</div>
            <i className="icon ion-md-arrow-forward" />
            <a href="#"><i className="icon ion-md-arrow-down" /></a>
          </a>
          <div className="answer">

            <div className="selectors flex justify-between py-[24px] bg-[#23224A]">
              <div className="flex">
                <div>
                  <select className="bg-[#23224A] text-[14px] px-4 border-r-4 border-r-[#23224A]">
                    <option>Any thing</option>
                    <option>Any thing</option>
                    <option>Any thing</option>
                    <option>Any thing</option>
                  </select>
                </div>
                <div>
                  <select className="bg-[#23224A] text-[14px] px-4 border-r-4 border-r-[#23224A]">
                    <option>Any thing</option>
                    <option>Any thing</option>
                    <option>Any thing</option>
                    <option>Any thing</option>
                  </select>
                </div>
              </div>
              <div className="px-[24px]">
                <HiRefresh className="text-2xl font-thin" />
              </div>
            </div>
            <div>
    
            <table className="text-[14px] w-full h-[10px] overflow-y-scroll bg-[#23224A]">
              {orders_data.map((t) => {
            return(
                <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]" key={t.order_id}>

                <td className="p-5 ">
                    <tr className=" text-[12px] text-[#BEBEDC]">#{t.order_no}</tr>
                  </td>


                  <td className="p-5 ">
                    <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
                    <tr className="">{t.method_id_fk} </tr>
                  </td>
                  <td className="">
                    <td className="">
                      <img src={Coins} height={"20px"} width={"20px"} />
                    </td>
                    <td className="">{t.token_amount}</td>
                  </td>

                  {t.order_status ==='true' ?  <td className="">
                   
                    <td className="">APROVED</td>
                  </td>
                  
                  : 
                  <td className="">
                  
                  <td className="">PENDING</td>
                </td>}
                </tr>)
              })}
              </table>
              <div className="h-[87px] w-full flex justify-between px-[24px] items-center text-[#6E6D90] text-[14px] bg-[#23224A]">
                <div>1-4 of 10</div>
                <div> {`< >`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Transactions = () => {
  return (
    <>
      <div className="accordion grid  w-[610px] h-[auto]  rounded-[16px] overflow-hidden">
        <div className="accordion-item" id="question3">
          <a className="accordion-link grid grid-cols-2 bg-[#191537] min-h-[50px]" href="#question3">
            <div className="flex items-start p-[24px]">Transactions</div>
            <i className="icon ion-md-arrow-forward" />
            <a href="#"><i className="icon ion-md-arrow-down" /></a>
          </a>
          <div className="answer">
            <div className="bg-[#23224A] ">
              <div className="flex justify-between items-center">
                <div className="text-[#fff] flex justify-center items-center">
                  <div className="text-[14px] text-[#BEBEDC] mx-[10px] mt-[26px]">
                    <select className="focus:outline-none border-none bg-[#23224A] px-[8px]">
                      <option>Any thing</option>
                      <option>Any thing</option>
                      <option>Any thing</option>
                      <option>Any thing</option>
                    </select>
                  </div>
                </div>
                <div className="mr-[30px] text-[#fff] p-[12px]">
                  <FaRedoAlt />
                </div>
              </div>

              <div className=" h-[100px] flex justify-center items-center text-[#fff]">
                <span>No Transactions Yet</span>
              </div>

              <div className="bg-[#23224A] mt-[80px] flex justify-between items-center">
                <div className="text-[#fff] ml-[30px] p-[12px]">1-4 of 10</div>
                <div className="text-[#fff] mr-[30px] flex justify-center items-center">
                  <div className="flex p-[12px]">
                    <FaAngleLeft className="ml-[10px]" />
                  </div>
                  <div className="flex p-[12px]">
                    <FaAngleRight className="ml-[10px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Promotions = () => {
  const [isUseReferralCodeModal, setIsUseReferralCodeModal] = useState(false);

  const handleExchange = (isOpen) => {
    setIsUseReferralCodeModal(isOpen);
  }

  return (
    <>
      <div className="accordion grid  w-[610px] h-[auto]  rounded-[16px] overflow-hidden">
        <div className="accordion-item" id="question4">
          <a className="accordion-link grid grid-cols-2 bg-[#191537] min-h-[50px]" href="#question4">
            <div className="flex items-start p-[24px]">Promotions</div>
            <i className="icon ion-md-arrow-forward" />
            <a href="#"><i className="icon ion-md-arrow-down" /></a>
          </a>
          <div className="answer">

            <div className="selectors flex justify-between py-[24px] bg-[#23224A]">
              <div className="flex justify-between w-full h-full px-[15px] ">
                <div>
                  <input
                    type="text"
                    placeholder="Promocode"
                    className="bg-[#2E2D58] text-[#BEBEDC] text-[14px] rounded-full pl-[16px] py-[12px] w-[412px] h-[38px]"
                  />
                </div>
                <div>
                  <button  onClick={() => setIsUseReferralCodeModal(true)} class="text-white bg-[#575DE8] text-[14px] w-[143px] h-[38px] border-0  focus:outline-none hover:bg-indigo-600 rounded-full ">
                    Use Promocode
                  </button>
                </div>
              </div>
            </div>
            <div>
              <table className="text-[14px] w-full h-[10px] overflow-y-scroll">
                <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
                  <td className="p-5 ">
                    <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
                    <tr className="">Deposit</tr>
                  </td>
                  <td className="">
                    <td className="">
                      <img src={Dorbeen} height={"10px"} width={"10px"} />
                    </td>
                    <td className="">ABCD-EFGH-IJKL</td>
                  </td>
                  <td className="">
                    <td className="">
                      <img src={Coins} />
                    </td>
                    <td className="">2.00 (BTC)</td>
                  </td>
                  <td className="">Cancel</td>
                </tr>
                <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
                  <td className="p-5 ">
                    <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
                    <tr className="">Deposit</tr>
                  </td>
                  <td className="">
                    <td className="">
                      <img src={Dorbeen} height={"10px"} width={"10px"} />
                    </td>
                    <td className="">ABCD-EFGH-IJKL</td>
                  </td>
                  <td className="">
                    <td className="">
                      <img src={Coins} />
                    </td>
                    <td className="">2.00 (BTC)</td>
                  </td>
                  <td className="">Cancel</td>
                </tr>
              </table>
              <div className="h-[87px] w-full flex justify-between px-[24px] items-center text-[#6E6D90] text-[14px]">
                <div>1-4 of 10</div>
                <div> {`< >`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isUseReferralCodeModal ?
        <div className="modal"  style={{ zIndex: '1' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title text-white">Use Referral Code</h4>
                <button type="button" className="close" onClick={() => setIsUseReferralCodeModal(false)}>×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <br />
                <br />
                {/* <input type="text" class="modal_text_field" name=""> */}
                <input type="text" className="modal_text_field" name placeholder="Enter referral code" />
                <div className="row">
                  <div className="col-sm-6">
                    <button className="modal_button_cancel" onClick={() => setIsUseReferralCodeModal(false)}>Cancel</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="modal_button_open_ticket" onClick={() => setIsUseReferralCodeModal(false)}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ''}

    </>
  );
};

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-3 h-[786px]">
      <div className=" float-left ">
        <ProfileUsername />
      </div>
      <div className="space-y-5 overflow-y-scroll col-span-2">
        <div>
          <General />
        </div>

        <div>
          <Orders />
        </div>

        <div>
          <Transactions />
        </div>

        <div>
          <Promotions />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
