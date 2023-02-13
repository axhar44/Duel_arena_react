import { FaTimes } from "react-icons/fa";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import coin from "../../assets/icons/coin.png";
import { useState } from "react"

const ExchangeModal5 = () => {
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [isActive, setActive] = useState(false)



    const descriptionHandler = () => {
        setDescription(true);
        setReviews(false);
    };
    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
    };

    const handleClick = () => {
        setActive(curr => !curr);
        console.log("thi iss work")
    }

    // 
    return (
        <div className="bg-[#0c0a12f2] h-[600px] w-[100%]  flex items-center justify-center">
            <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-auto">
                <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
                    <div className="text-[#fff]">Exchange</div>
                    <div>
                        <FaTimes className="text-[#fff]" />
                    </div>
                </div>


                <div className="bg-[#191537] w-[359px] m-auto mt-[13px] rounded-[31px] text-[#fff] flex items-center justify-center items-center">

                    <div
                        style={{
                            backgroundColor: isActive ? '#191537' : '#23224A',
                            color: isActive ? 'white' : 'white',
                        }}
                        onClick={() => {
                            handleClick();
                            descriptionHandler()
                        }}

                        className="cursor-pointer text-[#fff] bg-[#23224A] flex items-center justify-center h-[38px] w-[177px] rounded-[31px]">
                        Deposite
                    </div>
                    <div
                        style={{
                            backgroundColor: isActive ? '#23224A' : ' #191537',
                            color: isActive ? 'white' : 'white',
                        }}
                        onClick={() => {
                            handleClick();
                            reviewsHandler()
                        }}

                        className="cursor-pointer  text-[#fff] bg-[#191537] flex items-center justify-center   h-[38px] w-[177px]  rounded-[31px]">
                        Withdraw
                    </div>
                </div>



                {description && (

                    <div className="">
                        <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-around">
                            <div className="bg-[#1D1B3F] h-[38px] w-[100%] p-[20px] flex items-center justify-between">
                                <span className="ml-[10px]">Desposite in-Game Gold</span>
                                <TbChevronRight className="text-[#fff]" />
                            </div>
                        </div>

                        <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-around">
                            <div className="bg-[#1D1B3F] h-[38px] w-[100%] p-[20px] flex items-center justify-between">
                                <span className="ml-[10px]">Buy Tokens with Crypto</span>
                                <TbChevronRight className="text-[#fff]" />
                            </div>
                        </div>

                        <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-around">
                            <div className="bg-[#1D1B3F] h-[38px] w-[100%] p-[20px] flex items-center justify-between">
                                <span className="ml-[10px]">Purchase Gift Card</span>
                                <TbChevronRight className="text-[#fff]" />
                            </div>
                        </div>

                        <div className="bg-[#1D1B3F] mt-[13px] mb-[30px] text-[#fff] flex items-center justify-center justify-around">
                            <div className="bg-[#1D1B3F] h-[38px] w-[100%] p-[20px] flex items-center justify-between">
                                <span className="ml-[10px]">Redeem Gift Card</span>
                                <TbChevronRight className="text-[#fff]" />
                            </div>
                        </div>
                    </div>
                )}
                {reviews && (

                    <div className="">

                        <div className=" mt-[13px] text-[#fff] flex">
                            <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[147px] p-[5px]">
                                <input type="radio" className="" />
                                <span className="">
                                    Bitcoin (BTC)
                                </span>
                            </div>
                        </div>

                        <div className=" mt-[13px] text-[#fff] flex">
                            <div className=" flex items-center justify-between ml-[25px] h-[38px] w-[147px] p-[5px]">
                                <input type="radio" className="" />
                                <span className="">
                                    Bitcoin (BTC)
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

                        <div className=" mt-[13px] mb-[35px] text-[#fff] flex items-center justify-center">
                            <div className="bg-[#575DE8] flex items-center justify-center h-[38px] w-[361px] p-[5px] rounded-[31px] focus:outline-none">
                                Create Order
                            </div>
                        </div>


                    </div>

                )}

            </div>
        </div>
    )
}
// function ComponentOne() {

//     return (

//     );
// }
export default ExchangeModal5;