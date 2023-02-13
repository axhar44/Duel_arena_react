
import { useState } from 'react';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';


const AdminPlayer = () => {

    return (
        <div className="">

            <div className='text-[#fff] w-[1500px] h-[60px] flex justify-between items-center'>
                <div className='text-[30px]  h-[42px]'>
                    Player Report Users
                </div> 

                <div className='flex justify-between  w-[320px]'>

                    <div className='w-[150px]  rounded-[10px] flex'>
                        <div className='bg-[#171799] text-[15px] w-[101px] rounded-l-lg flex justify-center items-center'>
                            Player
                        </div>

                        <div className='border-[#0F0F37] border-[1px] '></div>


                        <div className='bg-[#171799] w-[52px] h-[54px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                            <FaPlusCircle className='' />
                        </div>
                    </div>

                    <div className='w-[150px]  rounded-[10px] flex'>
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
            
            <div className='parent flex w-[1500px] mt-[55px] '>

                <div className='leftChild '>

                    <div className=" w-[1030px] flex justify-between items-center">
                        <div className="bg-[#16163F] border-[#16163F] border-[1px] w-[328px] h-[83px] rounded-[20px] flex justify-center items-center">
                            <div
                                className="border-[#16163F] border-[1px] w-[286px] h-[54px] rounded-[10px] flex justify-center items-center">

                                <div
                                    className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                    <FaSearch />
                                </div>
                                <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>

                                <div className='text-[#FFFFFF]'>
                                    <input type="text" placeholder="User Name" className="bg-[#1B1B85] rounded-r-lg text-lg px-[20px] w-[234px] h-[54px] flex justify-center items-center text-[#FFFFFF] focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#16163F] border-[#16163F] border-[1px] w-[674px] h-[83px] rounded-[20px] flex justify-center items-center">
                            <>
                                <div className='bg-[#1B1B85] w-[150px] m-[6px] h-[54px] rounded-[10px] flex justify-center items-center text-[#fff]'>
                                    Everyone
                                </div>
                                <div className='w-[150px] m-[6px] h-[54px] rounded-[10px] flex justify-center items-center text-[#fff]'>
                                    Agents
                                </div>
                                <div className='w-[150px] m-[6px] h-[54px] rounded-[10px] flex justify-center items-center text-[#fff]'>
                                    Player
                                </div>
                                <div className='w-[150px] m-[6px] h-[54px] rounded-[10px] flex justify-center items-center text-[#fff]'>
                                    Player
                                </div>
                            </>

                        </div>
                    </div>

                    <div className=' mt-[20px] rounded-[20px] h-[140px] w-[1033px]'>
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


                    <div className=' w-[1033px] mt-[20px] flex justify-between items-center'>
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
                                Admin@123
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminPlayer