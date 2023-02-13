import { FaTimes } from "react-icons/fa";


const SignOutModal = (props) => {
  return (
    <div className="bg-[#0c0a12f2] flex items-center justify-center absolute translate-x-[70%] translate-y-[100%] " style={{zIndex:'1'}}>
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[196px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff] text-[14px]">Sign Out</div>
        <div> 
            <FaTimes className="text-[#fff] text-[14px]" onClick={()=>{props.setIsSignoutOpen(false)}}/>
        </div>
      </div>
      <div className="mt-[20px] text-[#fff] flex items-center justify-center text-[14px]">
        Are You Sure You want to Sign Out ?
      </div>

      <div className="mt-[20px] text-[#fff] flex items-center justify-center justify-around">
        <button className="bg-[#23224A] h-[38px] w-[174px] rounded-[31px] text-[14px]" onClick={()=>{props.setIsSignoutOpen(false)}}>Cancel</button>
        <button  className="bg-[#575DE8] h-[38px] w-[174px] rounded-[31px] text-[14px]" onClick={setLogout()}>SignOut</button>
      </div>


    </div>
    </div>
  )
}

function setLogout(){
  localStorage.removeItem("_token");
  window.location.reload();
}

export default SignOutModal;