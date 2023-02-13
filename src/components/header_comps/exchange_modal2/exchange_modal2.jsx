import { FaTimes } from "react-icons/fa";
import {  TbChevronLeft } from "react-icons/tb";
import {  TbChevronRight } from "react-icons/tb";
import coin from "../../assets/icons/coin.png";


const ExchangeModal2 = () => {
  return (
    <div className="bg-[#0c0a12f2]  h-[600px] w-[100%]  flex items-center justify-center">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[520px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Exchange</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
  

      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <div className="bg-[#1D1B3F] h-[38px] w-[100%] p-[20px] flex items-center">
            <TbChevronLeft className="text-[#fff]"/>
           <span className="ml-[10px]">Purchase Gift Card</span>
        </div>
      </div>
     
     

      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F] ml-[10px] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-19px]" src={coin} alt="coin"/>
        <span>10.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
<hr/>
      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F]  h-[38px] ml-[10px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-15px]" src={coin} alt="coin"/>
        <span className="ml-[15px]">20.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
      <hr/>
      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F]  h-[38px] ml-[10px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-15px]" src={coin} alt="coin"/>
        <span className="ml-[15px]">50.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
<hr/>
      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F]  h-[38px] ml-[10px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-10px]" src={coin} alt="coin"/>
        <span className="ml-[15px]">100.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
  <hr/>
      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F]  h-[38px] ml-[10px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-10px]" src={coin} alt="coin"/>
        <span className="ml-[15px]">200.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
<hr/>

      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F]  h-[38px] ml-[10px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-7px]" src={coin} alt="coin"/>
        <span className="ml-[15px]">500.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
<hr/>
      <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-between">
        <div className="bg-[#1D1B3F]  h-[38px] ml-[10px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <img className="ml-[-2px]" src={coin} alt="coin"/>
        <span className="ml-[15px]">1000.00</span>
        </div>
        <div className="bg-[#1D1B3F] h-[38px] w-[130px] p-[20px]  flex items-center justify-center justify-around">
            <span>$5.00</span>
            <TbChevronRight/>
            </div>
      </div>
      <hr/>
    </div>
    </div>
  )
}

export default ExchangeModal2;