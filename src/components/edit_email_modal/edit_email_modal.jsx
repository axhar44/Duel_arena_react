import { FaTimes } from "react-icons/fa";


const EditEmailModal = () => {
  return (
    <div className="bg-[#0c0a12f2]  h-[600px] w-[100%]  flex items-center justify-center">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[274px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Login</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
 

      <div className="text-[#fff] flex items-center justify-center mt-[22px]">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Enter new email"/>
      </div>

      <div className="text-[#fff] flex items-center justify-center mt-[22px]">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Confirm new email"/>
      </div>

    

      <div className="text-[#fff] flex items-center justify-center mt-[22px]">
        <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px]">Change Email</button>
      </div>

      

    </div>
    </div>
  )
}

export default EditEmailModal;