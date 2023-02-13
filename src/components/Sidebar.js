import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { BsFillFlagFill } from "react-icons/bs";
import { MdHelpCenter, MdHomeFilled } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { CgCardHearts } from "react-icons/cg";
import { GiTwoCoins, GiCarWheel } from "react-icons/gi";
import { TbSword } from "react-icons/tb";

import home from '../assets/icons/home.png' 
import duel from '../assets/icons/talwar.png' 
import poker from '../assets/icons/poker_card.png' 
import pokerchip from '../assets/icons/poker_chip_1.png' 
import fortunewheel from '../assets/icons/fortune-wheel 1.png' 
import flag from '../assets/icons/flag.png' 
import './SideBar.css'

// import Home from '../../public/images/home'

import Duel from "../pages/Duel";
import Error from "../pages/Error";


function poker_game() {
  // 👇️ redirect to external URL
  window.location.replace('http://localhost:3000/');

  return null;
}






const Sidebar = () => {
  let icon = "50";
  const [isActive, setIsActive] = useState(false);
  const [activeKey, setActiveKey] = React.useState('1');

  return (

    <div className="Sidebar font-normal flex items-center flex-col  h-[688px] w-[86px] bg-[#23224A] rounded-[56px] text-[#6E6D90]" activeKey={activeKey} onSelect={setActiveKey}>
      
        <Link to='/'eventKey="1" className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-7 text-sm cursor-pointer text-[#6E6D90] " >
          <div className="text-[20px] text-[#6E6D90] ">
            <MdHomeFilled/>
          </div>
          <div className="leading_div leading-[30px] text-[12px] text-[#6E6D90] active:text-white hover:text-white active:text-white  group-focus::text-white">home</div>
        </div>        
        </Link>


        <Link to="/duel" eventKey="2" className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <img src={duel} alt='duel-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px] active:text-white hover:text-white active:text-white  group-focus::text-white">Dual</div>
        </div>        
        </Link>



        <Link to="/Poker" eventKey="2" className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <img src={duel} alt='duel-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px] active:text-white hover:text-white active:text-white  group-focus::text-white">Poker</div>
        </div>        
        </Link>
   

   
        {/* <Link to="/poker_game" className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className=" flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" eventKey="3">
          <div className="text-[20px] ">
          <img src={poker} alt='poker-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px] active:text-white hover:text-white active:text-white  group-focus::text-white">Poker</div>
        </div>        
        </Link>


<a href="http://logowebtechnologies.com/" target="_blank" rel="noreferrer">
<div className=" flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" eventKey="3">
          <div className="text-[20px] ">
          <img src={poker} alt='poker-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px] active:text-white hover:text-white active:text-white  group-focus::text-white">Poker</div>
        </div>    
        </a> */}





      
      


        
   

        <Link to="/loot" className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm cursor-pointer text-[#6E6D90]" eventKey="4">
          <div className="text-[20px]">
          <img src={pokerchip} alt='poker-chip-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white">Loot</div>
        </div>        
        </Link>
   
        <Link to="/wheel"  eventKey="5" className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm cursor-pointer text-[#6E6D90]">
          <div className="text-[20px]">
          <img src={fortunewheel} alt='fortune-wheel-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white">Wheel</div>
        </div>        
        </Link>


        <Link to="/race"  className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <img src={flag} alt='race-icon'/>
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white" eventKey="6">Race</div>
        </div>        
        </Link>




        <Link to="/profile"  className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <AiFillDollarCircle className="text-[20px] cursor-pointer"  />
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white" eventKey="6">Profile</div>
        </div>        
        </Link>



        <Link to="/support"  className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <MdHelpCenter className="text-[20px] cursor-pointer"  />
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white" eventKey="6">Support</div>
        </div>        
        </Link>


        <Link to="/profile"  className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <HiUser className="text-[20px] cursor-pointer"  />
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white" eventKey="6">Affilate</div>
        </div>        
        </Link>
      



        <Link to='/'eventKey="1"   className=" active:text-white hover:text-white active:text-white  group-focus::text-white">
        <div className="flex flex-col items-center mt-2 text-sm  cursor-pointer text-[#6E6D90]" >
          <div className="text-[20px]">
          <HiUser className="text-[20px] cursor-pointer hover:text-white"  />
          </div>
          <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white" eventKey="6">Home</div>
        </div>        
        </Link>


        <div
          className={`sec2 flex flex-col text-[#6E6D91] text-[16px] space-y-5 mt-2 mb-10`}
          >
          {/* <div className={`sec2 text-[#6E6D91] text-[${'50px'}]`}> */}
          
         {/* <Link eventKey="7" to="/profile"><AiFillDollarCircle className="text-[20px] cursor-pointer"  />
         
         
         <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white">Profile</div>
         </Link> */}
         {/* <Link eventKey="8" to="/home"><BiLink className="text-[20px] cursor-pointer"  />
         <div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white">Home</div></Link> */}


         {/* <Link eventKey="9" to="/support"><MdHelpCenter className="text-[20px] cursor-pointer"  /><div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white">Affilate</div></Link>
         <Link eventKey="10" to="/profile"><HiUser className="text-[20px] cursor-pointer"  /><div className="leading_div leading-[30px] text-[12px]  active:text-white hover:text-white active:text-white  group-focus::text-white">Profile</div></Link> */}
        
        </div>
      
    </div>

 
          
  );
};

export default Sidebar;
