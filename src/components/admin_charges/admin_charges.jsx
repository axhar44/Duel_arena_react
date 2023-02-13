
import { useState } from 'react';
import { FaSearch, FaPlusCircle, FaRegCalendarAlt, FaClock, FaUser, FaInfoCircle } from 'react-icons/fa';


const AdminCharges = () => {

    return (
        <div className=" ">

            <div className='text-[#fff] w-[1500px] h-[60px] flex justify-between items-center'>
                <div className='text-[30px]   h-[42px]'>
                    Charges And Withdrawals
                </div>

                <div className='flex justify-between   w-[320px]'>

                    <div className='w-[150px]   rounded-[10px] flex'>
                        <div className='bg-[#171799] text-[15px] w-[101px] rounded-l-lg flex justify-center items-center'>
                            Agent
                        </div>

                        <div className='border-[#0F0F37] border-[1px] '></div>


                        <div className='bg-[#171799] w-[52px] h-[54px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                            <FaPlusCircle className='' />
                        </div>
                    </div>

                    <div className='w-[150px]   rounded-[10px] flex'>
                        <div className='bg-[#171799] text-[15px] w-[101px] rounded-l-lg flex justify-center items-center'>
                            Agent
                        </div>

                        <div className='border-[#0F0F37] border-[1px] '></div>

                        <div className='bg-[#171799] w-[52px] h-[54px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                            <FaPlusCircle className='' />
                        </div>
                    </div>


                </div>
            </div>

            <div className='parent flex w-[1500px] mt-[55px]  '>

                <div className='leftChild  '>


                    <div className="  w-[1033px] flex items-center justify-evenly">
                        <div className="text-[#fff] text-[18px] bg-[#16163F] border-[#0F0F37] border-[1px] w-[243px] h-[114px] rounded-[20px]">
                            <div className='mt-[10px] ml-[19px]'>Start Date</div>
                            <div className='mt-[5px] w-[205px] h-[54px] m-auto rounded-[10px] flex justify-evenly items-center'>
                                <div className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                    <FaRegCalendarAlt />
                                </div>
                                <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>
                                <div
                                    className='w-[153px]'>
                                    <div type="text" className="text-[18px] bg-[#1B1B85] rounded-r-lg px-[20px] w-[153px] h-[54px] flex justify-center items-center text-[#fff]">
                                        05 sep, 2022
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-[#fff] text-[18px] bg-[#16163F] border-[#0F0F37] border-[1px] w-[243px] h-[114px] rounded-[20px]">
                            <div className='mt-[10px] ml-[19px]'>Start Time</div>
                            <div className='mt-[5px] w-[205px] h-[54px] m-auto rounded-[10px] flex justify-evenly items-center'>
                                <div className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                    <FaClock />
                                </div>
                                <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>
                                <div
                                    className='w-[153px]'>
                                    <div type="text" className="text-[18px] bg-[#1B1B85] rounded-r-lg px-[20px] w-[153px] h-[54px] flex justify-center items-center text-[#fff]">
                                        00.00
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-[#fff] text-[18px] bg-[#16163F] border-[#0F0F37] border-[1px] w-[243px] h-[114px] rounded-[20px]">
                            <div className='mt-[10px] ml-[19px]'>End Date</div>
                            <div className='mt-[5px] w-[205px] h-[54px] m-auto rounded-[10px] flex justify-evenly items-center'>
                                <div className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                    < FaRegCalendarAlt />
                                </div>
                                <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>
                                <div
                                    className='w-[153px]'>
                                    <div type="text" className="text-[18px] bg-[#1B1B85] rounded-r-lg px-[20px] w-[153px] h-[54px] flex justify-center items-center text-[#fff]">
                                        05 sep, 2022
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-[#fff] text-[18px] bg-[#16163F] border-[#0F0F37] border-[1px] w-[243px] h-[114px] rounded-[20px]">
                            <div className='mt-[10px] ml-[19px]'>End Date</div>
                            <div className='mt-[5px] w-[205px] h-[54px] m-auto rounded-[10px] flex justify-evenly items-center'>
                                <div className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                    <FaClock />
                                </div>
                                <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>
                                <div
                                    className='w-[153px]'>
                                    <div type="text" className="text-[18px] bg-[#1B1B85] rounded-r-lg px-[20px] w-[153px] h-[54px] flex justify-center items-center text-[#fff]">
                                        00.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="  w-[1033px] flex items-center justify-around">
                        <div className='w-[205px] h-[54px] rounded-[10px] flex justify-evenly items-center'>
                            <div type="text" className="text-[18px] bg-[#1B1B85] rounded-l-lg px-[20px] w-[150px] h-[54px] flex justify-center items-center text-[#fff]">
                                Player
                            </div>
                            <div className='border-[#1818A1] border-[1px] rounded-r-lg'></div>
                            <div className='bg-[#1B1B85] w-[49px] h-[54px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                                <select className='text-[#fff] bg-[#1B1B85] mr-[10px]'>
                                    <option value="" className=''></option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="border-[#16163F] border-[1px] w-[286px] h-[54px] rounded-[10px] flex justify-center items-center">

                            <div className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                <FaUser />
                            </div>
                            <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>

                            <div className='w-[234px]'>
                                <input type="text" placeholder="User Name" className="bg-[#1B1B85] rounded-r-lg text-lg px-[20px] w-[234px] h-[54px] flex justify-center items-center text-[#fff] focus:outline-none" />
                            </div>
                        </div>


                        <div className='text-[#fff]   w-[107px] flex justify-evenly items-center'>
                            <span className='bg-[#B1A308] w-[18px] h-[23px] rounded-[2px] border-[#B1A308] border-[1px]'></span>
                            <span className=''>Direct</span>
                            <FaInfoCircle />

                        </div>

                        <div className='text-[#fff]   w-[123px] flex justify-evenly items-center'>
                            <span className='bg-[#B1A308] w-[18px] h-[23px] rounded-[2px] border-[#B1A308] border-[1px]'></span>
                            <span className=''>Received</span>
                            <FaInfoCircle />

                        </div>


                        <div className='bg-gradient-to-r from-[#B1A308] to-[#8D790F] text-[#fff]   w-[251px] h-[54px] rounded-[10px] flex justify-center items-center'>
                            <button>Submit</button>
                        </div>
                    </div>









                    <div className='  mt-[20px] rounded-[20px] h-[140px] w-[1033px]'>
                        <div className="bg-[#0F0F37] border-[#16163F] rounded-t-[20px] border-[1px] w-[1030px] h-[56px] flex items-center justify-around">

                            <div className='w-[150px] h-[54px] rounded-t-lg flex justify-center items-center text-[#fff]'>
                                User
                            </div>
                            <div className='border-[#16163F] h-[54px] border-[1px]'></div>

                            <div className='w-[150px] h-[54px] rounded-t-lg flex justify-center items-center text-[#fff]'>
                                Records
                            </div>
                            <div className='border-[#16163F] h-[54px] border-[1px]'></div>

                            <div className='w-[150px] h-[54px] rounded-t-lg flex justify-center items-center text-[#fff]'>
                                Actions
                            </div>
                            <div className='border-[#16163F] h-[54px] border-[1px]'></div>

                            <div className='w-[150px] h-[54px] rounded-t-lg flex justify-center items-center text-[#fff]'>
                                Info
                            </div>
                        </div>

                        <div className='bg-[#060633] text-[#fff] flex justify-center items-center h-[84px] rounded-b-[20px]'>
                            No data available table
                        </div>
                    </div>


                    <div className='  w-[1033px] mt-[20px] flex justify-between items-center'>
                        <div className='bg-[#16163F] text-[#fff] border-[#16163F] border-[1px] w-[242px] h-[54px] rounded-[10px] flex justify-center items-center'>
                            <div className='m-[10px] text-lg'>
                                Show
                            </div>
                            <select className='text-[15px] bg-[#1B1B85] focus:outline-none m-[10px] w-[60px] h-[29px] rounded-[6px] text-center'>
                                <option value="10">10</option>
                                <option value="10">2</option>
                                <option value="10">3</option>
                                <option value="10">4</option>
                            </select>
                            <div className='m-[10px] text-lg'>
                                Entries
                            </div>


                        </div>

                        <div className='text-[#fff] w-[300px] h-[60px] rounded-[10px] flex justify-center items-center'>
                            <div className='bg-[#16163F] m-[10px] text-lg w-[133px] h-[54px] rounded-[10px] flex justify-center items-center'>
                                Previous
                            </div>

                            <div className='bg-[#16163F] m-[10px] text-lg w-[99px] h-[54px] rounded-[10px] flex justify-center items-center'>
                                Next
                            </div>


                        </div>
                    </div>
                </div>

                <div className='rightChild'>
                    <div className='text-[#fff] bg-[#16163F] ml-[30px] w-[420px] h-[139px] rounded-[20px]'>
                        <div className='h-[69.5px] rounded-t-[20px] text-right'>
                            <div className='ml-[217px] w-[200px] h-[69.5px] rounded-t-[20px] flex justify-evenly items-center'>
                                <div className='bg-[#B1A308] w-[23px] h-[23px] rounded-[2px] border-[#B1A308] border-[1px]'>

                                </div>
                                Include Hidden
                            </div>
                        </div>

                        <div className='h-[69.5px] rounded-b-[20px] text-[left]'>
                            <div className='w-[200px] h-[69.5px] rounded-b-[20px] flex justify-evenly items-center'>
                                RsBits
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminCharges
