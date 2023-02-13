import { FaTimes } from "react-icons/fa";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import coin from "../../assets/icons/coin.png";


const ExchangeModal3 = () => {
    return (
        <div className="bg-[#0c0a12f2]  h-[800px] w-[100%]  flex items-center justify-center">
            <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[738px]">
                <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
                    <div className="text-[#fff]">Exchange</div>
                    <div>
                        <FaTimes className="text-[#fff]" />
                    </div>
                </div>


                <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-around">
                    <div className="bg-[#1D1B3F] h-[38px] w-[100%] p-[20px] flex items-center">
                        <TbChevronLeft className="text-[#fff]" />
                        <span className="ml-[10px]">Purchase Gift Card</span>
                    </div>
                </div>

                <div className=" mt-[13px] text-[#fff] flex items-center justify-center">
                    <select className="bg-[#23224A] flex items-center justify-center h-[38px] w-[361px] p-[5px] rounded-[31px] focus:outline-none">
                        <option value="example">exmaple</option>
                        <option value="example">example</option>
                        <option value="example">example</option>
                        <option value="example">example</option>
                        <option value="example">example</option>
                    </select>
                </div>

                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[147px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Bitcoin (BTC)
                        </span>
                    </div>
                </div>

                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[168px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Ethereum (ETH)
                        </span>
                    </div>
                </div>

                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[152px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Litecoin  (LTC)
                        </span>
                    </div>
                </div>

                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[152px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Tether  (USDT)
                        </span>
                    </div>
                </div>


                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[210px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Binanace Coin (BNB)
                        </span>
                    </div>
                </div>


                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[150px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Solana (SOL)
                        </span>
                    </div>
                </div>


                <div className=" mt-[13px] text-[#fff] flex">
                    <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[147px] p-[5px]">
                        <input type="radio" className="" />
                        <span className="">
                            Ripple (XRP)
                        </span>
                    </div>
                </div>

                <div className="h-[92px] w-[357px] rounded-[12px] text-[#fff] bg-[#23224A] mt-[20px] m-auto">
                    <div className="flex items-center justify-between p-[10px] h-[45px] rounded-t-lg">
                        <span>0.00</span>
                        <span>USD</span>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-[10px] rounded-b-lg h-[45px]">
                        <span>0.00</span>
                        <span>USD</span>
                    </div>

                </div>

                <div className=" mt-[13px] text-[#fff] flex items-center justify-center">
                    <div className="bg-[#575DE8] flex items-center justify-center h-[38px] w-[361px] p-[5px] rounded-[31px] focus:outline-none">
                       Create Order
                    </div>
                </div>








            </div>
        </div>
    )
}

export default ExchangeModal3;