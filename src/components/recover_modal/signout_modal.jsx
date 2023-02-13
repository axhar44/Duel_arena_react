import { FaTimes } from "react-icons/fa";

const RecoverModal = () => {
  return (
    <div className="bg-[#0c0a12f2]  h-[600px] w-[100%] flex items-center justify-center">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[220px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Recover Password</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>

      <div className="mt-[20px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Enter Your Email"/>
      </div>

      <div className="mt-[20px] text-[#fff] flex items-center justify-center justify-around">
        <button  className="bg-[#575DE8] h-[38px] w-[361px] rounded-[31px]">Send New Password</button>
      </div>


    </div>
    </div>
  )
}

export default RecoverModal;