import { useContext, useState } from "react";
import OpenTicket from "./Support/OpenTicket";
import { TbSword } from "react-icons/tb";
import duel from '../assets/icons/talwar.png' 
import poker from '../assets/icons/poker_card.png' 
import pokerchip from '../assets/icons/poker_chip_1.png' 
import fortunewheel from '../assets/icons/fortune-wheel 1.png' 
import flag from '../assets/icons/flag.png' 
// import { SupportToggleContext } from '../../ContextApi/supportToogleContext';

const WheelBreadCrum = () => {

  // let [open, setOpen] = useContext(SupportToggleContext);
  // console.log(open)
  // const ToggleOpenTicket = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="bg-[#1D1B3F]  w-[100%] h-[40px] flex items-center justify-between ">
      <div className="flex flex-row justify-around items-center h-[38px] w-[auto] gap-2">
      {/* <img src={fortunewheel} className='h-[23px] w-[23px]' /> */}
        <span className=" font-medium text-[28px] text-[#fff]">Wheel</span>
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
          <select style={{zIndex: 'auto'}}  className="focus:outline-none bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-[31px] px-[15px] text-[12px] border-r-[14px] border-r-[#23224A]">
            <option value="Whip" className="">
              Whip
            </option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
          </select>
          <select style={{zIndex: 'auto'}}  className="focus:outline-none bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-full px-[15px] text-[12px] border-r-[14px] border-r-[#23224A]">
            <option value="Any Bet Size">Any Bet Size</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
          </select>

          {/* {open ? ( */}
            {/* <div className="fixed w-[100vw] h-[100vh] bg-black bg-opacity-[50%] translate-x-[25%] translate-y-[40%] z-10 p-[10%]">
              <OpenTicket/>
            </div> */}
          {/* ) : ( */}
            <button
              // onClick={ToggleOpenTicket}
              className="bg-[#575DE8] text-[#fff] h-[36px] w-[103px] rounded-[31px] p-[5px] text-[12px]"
            >
              Open Tickets
            </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default WheelBreadCrum;
