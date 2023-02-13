import React, { useState, useContext } from "react";
import "./tickets.css";
import { openTicket, closeTicket } from "../../redux/actions/support";
import {useSelector, useDispatch} from "react-redux"
import { TaskContext } from '../../ContextApi/Tasksheet';



import NetworkService from "../../services/network.service";
const networkService = new NetworkService()

const OpenTicket = (props) => {
  
  const dispatch = useDispatch();
  const Toggle = useSelector(state => state.TogglerReducer)
  const [err, setErr] = useState("");
  const [msg, setSuccess_Msg] = useState("");
  const user_id_fk =localStorage.getItem("id");
  const [ussue_name, setIssue] = useState("");
  const [ticket_name, setTicket_Name] = useState("");
  const [description, setTicket_Description] = useState('');
  const {support_ticket_live,setSupport_Ticket_Live} = useContext(TaskContext)

  

  // let credentials1 = { id,ussue_name,ticket_name,ticket_description}
 
  
  let credentials1 = { user_id_fk,ussue_name,ticket_name,description}

  const create_support_ticket_post = async function () {

    let response3 = await networkService.create_support_ticket(credentials1); 
    if (response3.bool === false) {
      console.log(err+"false condition work");
      setErr(response3);
      setSuccess_Msg("");
      
    }else
    {
      console.log("true condition work");
      setSuccess_Msg("Your Ticket Has Been Created Successfully");
      setSupport_Ticket_Live(true);
      setErr('');
      
    }
  }


  console.log("toggle: "+Toggle)
  return (
    <div style={{zIndex:'-5'}} className="w-[603px] h-[555px] rounded-3xl  font-normal  text-white">
      <div className="ticketHeader w-full h-[56px] bg-[#191537] text-white flex justify-between items-center px-[16px]">
        <p>Open Ticket</p>
        <button
          onClick={() => {
            console.log(Toggle)
            dispatch(closeTicket());
          }}
        >
          &nbsp;X&nbsp;
        </button>
      </div>
      <div   className="ticketBody w-full h-[auto] bg-[#1D1B3F] flex flex-col justify-center items-center space-y-[16px] text-[14px] font-normal pt-[23px] px-[22px]">
        {/* <select className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px] border-r-[17px] border-r-[#23224A]">
          <option value="Payment">Payment</option>
          <option value="Urgent">Urgent</option>
          <option value="Issue with ID">Issue with ID</option>
          <option value="Questions related to platform">Questions related to platform</option>
        </select> */}
{/* <select className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px] border-r-[17px] border-r-[#23224A]" >
{options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
</select> */}

<select
      value={ussue_name} // ...force the select's value to match the state variable...
      onChange={e => setIssue(e.target.value)} // ... and update the state variable on any change!
      className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px] border-r-[17px] border-r-[#23224A]"
    >
      <option value="Payment">Payment</option>
      <option value="Urgent">Urgent</option>
      <option value="Issue with ID">Issue with ID</option>
      <option value="Questions to related platform">Questions to related platform</option>
    </select>


       

        <input
          type="text"
          placeholder="Enter Ticket name"
          className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px]"
          onChange={e => setTicket_Name(e.target.value)}
        />
        <textarea
          placeholder="Provide as much information as possible"
          className="bg-[#23224A] w-full h-[176px] rounded-2xl p-[14px]"
          onChange={(e) => setTicket_Description(e.target.value)}
        />
        {/* <div className="drag&drop bg-[#23224A] text-center w-full h-[60px] flex flex-col justify-center border-[1px] border-opacity-5 border-dashed rounded-2xl">
          <p className="text-[#BEBEDC] text-[12px]">
            Drop an image here or click to browse files
          </p>
          <p className="text-[#BEBEDC] text-[12px] opacity-40">
            PNG or JPG, up to 3MB
          </p>
        </div> */}
        <div className="flex w-full gap-[10px]">
          <button className="bg-[#23224A] h-[38px] w-full rounded-3xl"  onClick={() => {
            console.log(Toggle)
            dispatch(closeTicket());
          }}>
            cancel
          </button>
          <button className="bg-[#575DE8] h-[38px] w-full rounded-3xl mb-[10px]" onClick={() => create_support_ticket_post()}>
            Open Ticket
          </button>
        </div>
      </div>
      <div className="ticketFooter openTicket w-full h-[63px] flex justify-center items-center text-[12px]  text-[#BEBEDC] font-normal bg-[#1D1B3F] ">
        By submitting you agree to Privacy Policy and Terms of Service.
      </div>

      <center>   { 
      err.bool  ?  "" :  <div className="text-red-500 m-25px" key={err.message}>{err.message}{console.log({err})}</div>
      
      }</center>
      


      <center>  { 
 <div  className="text-green-500 m-25px" key={msg}>    {msg}{console.log({ msg })}</div>
        
  }</center>


    </div>
  );
};

export default OpenTicket;
