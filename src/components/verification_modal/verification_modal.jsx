import { FaTimes } from "react-icons/fa";
import { signup, showSignup, hideSignup, hideLogin, showLogin, forgotPassword, hideforgotPassword } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import NetworkService from "../../services/network.service";
import { useEffect, useState,useContext } from "react";
import  TaskContext from '../../ContextApi/Tasksheet';
import './VerificationModal.css'
const networkService = new NetworkService()

const VerificationModal = () => {

  const showSignUp = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [rememberme, setRememberme] = useState("");
  const [err, setErr] = useState("");





  const handleverify_otp = async function () {

    let email=localStorage.getItem("user_email")
    // alert(email);
    console.log("handleVeryfyOTp")
 

    let credentials = { email, otp }
    console.warn(credentials)
    let res = await networkService.verify_otp(credentials);

    console.log(JSON.stringify(res));
    console.log("false condition work");


    if (res.bool === false) {
      setErr(res);
    }

    if(res.user.id !=="")
    {
    console.warn("otp verified");
    dispatch(hideLogin());
    refreshPage();
    }else{
      console.warn("otp failed");
    }

    
    
  }

  function refreshPage() {
    window.location.reload(false);
  }




  return (
    <div className="  h-[440px] w-auto  flex  justify-around text-[12px]  rounded-3xl">
      <div className="bg-[#1D1B3F] rounded-[16px]  w-[405px] h-[px]">
        <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
          <div className="text-[#fff]">Enter Your Otp</div>
          <div>
            <FaTimes className="text-[#fff]" />
          </div>
        </div>


        <div className="mt-[13px] text-[#fff] flex items-center  justify-around">
          <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Enter Your Otp Code" onChange={(e) => setOtp(e.target.value)} />
        </div>

        

        <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px] hover:bg-[#494ef1]" onClick={handleverify_otp}>Submit</button>
        </div>

        <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          
        </div>
        <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          
          </div>
          <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          
          </div>


          <div className="mt-[13px] text-[#fff] flex items-center justify-center mb-5 ">
          <button className="flex items-center justify-center h-[38px] w-[361px] p-[20px] rounded-[31px] "
          // onClick={()=>dispatch(forgotPassword())}
          ><p className="hover:text-[#494ef1]"> A OTP (One Time Passcode) has been sent to please enter the OTP in the field below to verify your phone</p></button>
        </div>
        


       

        {err.bool ? "" : <div className="text-red-500 m-10px" key={err.message}>{err.message}{console.log({ err })}</div>}
        {/* <div className="login absolute w-full h-full" ></div> */}
      </div>
    </div>
  )
}

export default VerificationModal;