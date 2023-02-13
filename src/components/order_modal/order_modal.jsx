import React, { useContext,useEffect,useState } from "react";
import "./order_modal.css";
import { openOrderModal, closeOrderModal } from "../../redux/actions/support";
import {useSelector, useDispatch} from "react-redux"
import NetworkService from "../../services/network.service";
import { TaskContext } from '../../ContextApi/Tasksheet';

const networkService = new NetworkService()




    const OrderModal = () => {
  const {apiResponse, setApiResponse, order_modal,setOrderModal } = useContext(TaskContext)

//   const [user_id_fk, setUser_Id_Fk] = useState("");
  const user_id_fk =localStorage.getItem("id");
  const [method_id_fk, setMethod_Id_Fk] = useState("");
  const [token_amount, setTokenAmount] = useState("");


  const [order_status, setOrderStatus] = useState("false");
  const [err, setErr] = useState("false");
  const [success_msg, setSuccessMsg] = useState("");

  

  function changeMethod(event){
    setMethod_Id_Fk('OSRS GOLD')
    
  }


  const sent_order = async function () {
    console.log("sent order")
    let credentials = { user_id_fk, method_id_fk,token_amount,order_status }
    // console.warn(credentials);
    // console.warn("order data here");
     let res2 = await networkService.sent_order(credentials);

    
    if (res2.bool === false) {
      setErr(res2);
      setSuccessMsg("");
    }


    console.log(JSON.stringify(res2));
    console.log(res2.msg);
  

    if (res2.msg === "Your Order Has Been Created Successfully") {
      
      console.warn("if condition");
      setErr("");
      setSuccessMsg(res2.msg);
      
    }else
    {
        console.warn("else condition");
    }


    

  
  }


  function  testModal123(){
    setOrderModal(false);
    console.warn(order_modal);
  }




  return (
    <div className="w-[400px] h-[450px] rounded-3xl  font-normal  text-white">
      <div className="ticketHeader w-full h-[56px] bg-[#191537] text-white flex justify-between items-center px-[16px]">
        <p>Create Order</p>
        <button
         onClick={() => testModal123(false)}  
        >
          &nbsp;X&nbsp;
        </button>
      </div>
       
      
      <div className="ticketBody w-full h-[auto] bg-[#1D1B3F] flex flex-col justify-center   space-y-[16px] text-[14px] font-normal pt-[23px] px-[22px]">
        <select className="bg-[#23224A] w-full h-[38px]  pl-[12px]  rounded-full"  onClick={() => changeMethod()}  >
        <option >Select Payment Method</option>
          <option  value="1">OSRS GOLD</option>
          <option  value="2">RS3 GOLD</option>
        </select>


       

         <label className="text-left">Enter Amount</label>
        <input
          type="number"
          placeholder="0.00"
          className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px]"
          onChange={(e) => setTokenAmount(e.target.value)}
        />
       
        <div className="flex w-full gap-[10px]">
          <button className="bg-[#23224A] h-[38px] w-full rounded-3xl" onClick={() => testModal123(false)}  >
            cancel
          </button>
          <button className="bg-[#575DE8] h-[38px] w-full rounded-3xl mb-[10px]" onClick={()=>sent_order()}>
          Create Order
          </button>
        </div>
      </div>
      <div className="ticketFooter openTicket w-full h-[113px] flex justify-center items-center text-[12px]  text-[#BEBEDC] font-normal bg-[#1D1B3F] ">
        By submitting you agree to Privacy Policy and Terms of Service.
      </div>

      {err.bool  ?  "" :  <div className="text-red-500" key={err.message}>{err.message}{console.log({err})}</div>}


       { <center>
 <div  className="text-green-500 m-20px" key={success_msg}>    {success_msg}{console.log({ success_msg })}</div>
         </center>
                    }
    </div>










    
  );
};

export default OrderModal;
