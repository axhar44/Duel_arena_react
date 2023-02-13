import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { hideforgotPassword, hideSignup, showLogin, showSignup, signup } from "../../redux/actions/auth";
import NetworkService from "../../services/network.service";

const networkService = new NetworkService()

const SignUpModal = () => {

  const ShowSignUp = useSelector(state => state.AuthReducer)
  
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setCpassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [rememberme, setRememberme] = useState("")
  const [err, setErr] = useState("") 
 
  useEffect(() => {

    console.log({name, email, password, confirm_password, referralCode, rememberme});

  }, [name, email, password, confirm_password, referralCode, rememberme])
  

  const togglers = () =>{
    // dispatch(showLogin()) ;

    dispatch(hideSignup());
    // dispatch(hideforgotPassword());
    console.log("showLogin: " + ShowSignUp);

  }

  function refreshPage() {
    window.location.reload(false);
  }


  const handleSubmit = async function(){

    
    console.log("handleSubmit")
    let credentials = {name, email, password, confirm_password};
    let res = await networkService.register(credentials);
    console.log({res})
    if(res.bool === false)
    {
      setErr(res);
      console.log("response: " + JSON.stringify(res))
    }
    localStorage.setItem("_token", res.token);
    console.log(localStorage.getItem("_token"))
    // dispatch(hideSignup());
    refreshPage();

  }
  

  return (
    <div className="h-[600px] w-[100%] flex items-center justify-center text-[14px]">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[562px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Sign Up</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
      <div className="mt-[13px] text-[#fff] flex items-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Display name" onChange={(e)=>{setName(e.target.value)}}/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Confirm Password" onChange={(e)=>{setCpassword(e.target.value)}}/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Referral code (optional)" onChange={(e)=>{setReferralCode(e.target.value)}}/>
      </div>

      <div className="flex items-center justify-between mt-[13px] m-auto w-[351px]">
        <div><input className="bg-[#575DE8] text-[#fff]" type="checkbox"/> </div>
        <div className=" text-[#fff] ml-[-300px] w-[95%]">I agree to the Provacy Policy and Terms</div>
      </div> 

      <div className="flex items-center justify-between mt-[13px] m-auto w-[351px]">
        <div><input className="bg-[#575DE8] text-[#fff]" type="checkbox" onChange={(e)=>{setRememberme(e.target.checked)}}/> </div>
        <div className=" text-[#fff] ml-[-300px] w-[95%]">Remember me</div>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px]" onClick={()=>handleSubmit()}>Sign Up</button>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className="flex items-center justify-center bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px]" 
        
        onClick={()=>{
         togglers()
          console.log("hideSignup")

        }}
        >I have an Account</button>
      </div>

      {err.bool  ?  "" :  <div className="text-red-500" key={err.message}>{err.message}{console.log({err})}</div>}
    </div>
    </div>
  )
}

export default SignUpModal;