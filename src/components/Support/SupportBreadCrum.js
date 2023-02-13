import { useContext, useState } from "react";
import OpenTicket from "./OpenTicket";
import { TbSword } from "react-icons/tb";


//  ************************** redux ******************************
import { openTicket, closeTicket } from "../../redux/actions/support";


import {useSelector, useDispatch} from "react-redux"
//  ************************** redux ******************************


const SupportBreadCrum = () => {

  const dispatch = useDispatch()
  const toggle = useSelector(state => state.TogglerReducer);
  
  // let [open, setOpen] = useState(false);
  // const ToggleOpenTicket = (status) => {
  //   open = status 
  //   setOpen(open);
  // };
  // console.log(open)
  
  return (
    <div className="bg-[#1D1B3F]  w-[100%] h-[40px] flex items-center justify-between ">
      <div className=" flex justify-around items-center h-[38px] w-[auto]">
        <span className=" font-medium text-[28px] text-[#fff]">Support</span>
      </div>

      <div className=" w-[590px] h-[38px] flex justify-end items-center ">
        <div className=" w-[130px] h-[38px] flex justify-evenly items-center">
          <a href="#" className="text-[#BEBEDC] text-[12px]">
            All
          </a>
          <a href="#" className="text-[#BEBEDC] text-[12px]">
            High Rollers
          </a>
        </div>

        <div className="w-[440px] h-[38px] flex items-center justify-end gap-4">
          <select style={{zIndex:'auto'}} className="focus:outline-none bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-[31px] px-[15px] text-[12px] border-r-[14px] border-r-[#23224A]">
            <option value="Whip" className="">
              Whip
            </option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
          </select>
          <select style={{zIndex:'auto'}} className="focus:outline-none bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-full px-[15px] text-[12px] border-r-[14px] border-r-[#23224A]">
            <option value="Any Bet Size">Any Bet Size</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
          </select>

            <button
              onClick={()=> {{ dispatch(openTicket()); console.log("OPEN TICKET TOGGLE: " + toggle) }}}
              className="bg-[#575DE8] text-[#fff] h-[36px] w-[103px] rounded-[31px] p-[5px] text-[12px]"
            >
              Open Tickets
            </button>
        </div>
      </div>
     
    </div>
  );
};

export default SupportBreadCrum;
