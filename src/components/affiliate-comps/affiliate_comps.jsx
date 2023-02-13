// import "./affiliate_comps.css"
import coin from "./../../assets/icons/coin.png"
import copy from "./../../assets/icons/copy.png"

const AffiliateComps = () => {
    return (
        <div className="mt-[100px] bg-[#1D1B3F] border-black border-[1px] w-[50%] flex-wrap flex justify-center items-center justify-between">

            <div className="border-[#23224A] border-[1px]  m-[10px] w-[267px] h-[158px] bg-[#23224A] rounded-[16px]">
                <div className="text-[#BEBEDC] mt-[32px] ml-[61px]">Available Earnings</div>
                <div className=" rounded-[16px] text-center">
                    <img className="ml-[70px] mt-[20px]" src={coin} alt="coin" />
                    <div className="text-3xl mt-[-30px] font-extrabold text-[#FFFFFF]">2.00</div>
                <div className="mt-[10px] text-[#FD9F28]">claim</div>
                </div>
            </div>




            <div className="border-[#23224A] border-[1px] w-[267px] h-[158px] bg-[#23224A] rounded-[16px]">
                <div className="text-[#BEBEDC] mt-[32px] ml-[70px]">Total Earnings</div>
                <div className=" rounded-[16px] text-center">
                    <img className="ml-[70px] mt-[20px]" src={coin} alt="coin" />
                    <div className="text-3xl mt-[-30px] font-extrabold text-[#FFFFFF]">2.00</div>
                </div>
            </div>



            <div className="border-[#23224A] border-[1px] w-[267px] h-[158px] bg-[#23224A] rounded-[16px]">
                <div className="text-[#BEBEDC] mt-[32px] ml-[70px]">Total Affiliates</div>
                <div className=" rounded-[16px] text-center">
                    <div className="text-3xl mt-[10px] font-extrabold text-[#FFFFFF]">12</div>
                </div>
            </div>




            <div className="w-[300px] h-[60px] m-auto mt-[50px]  flex flex-wrap justify-center items-center">
                <div className=" text-[#fff] w-[200px] flex justify-center items-center">Referral Link</div>
                <div className=" w-[290px] text-[#fff] flex justify-center items-center justify-between">
                    httpssdkdsjdjask
                    <img src={copy} alt="copy"/>
                </div>
            </div>
        </div>
    )
}
export default AffiliateComps
