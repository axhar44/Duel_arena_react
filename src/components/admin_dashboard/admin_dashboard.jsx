import vector1 from '../../assets/icons/vector1.png'
import vector2 from '../../assets/icons/vector2.png'
import vector3 from '../../assets/icons/vector3.png'
import vectorup from '../../assets/icons/vectorup.svg'
import vectordown from '../../assets/icons/vectordown.svg'
import vectoreye from '../../assets/icons/vectoreye.svg'
import group18 from '../../assets/icons/group18.png'
import d5 from '../../assets/icons/d5.svg'
import ellipse27 from '../../assets/icons/ellipse27.svg'
import { FaSearch, FaPlusCircle, FaRegCalendarAlt, FaClock, FaUser, FaInfoCircle } from 'react-icons/fa';



const AdminDash = () => {
    return (
        <div>
            <div className="  text-[#fff] w-[1500px] text-[30px]">
                <span className='ml-[40px]'>Dashboard</span>
            </div>


            <div className=" mt-[20px] w-[1500px] text-[#fff] flex-col justify-around flex-wrap">

                <div className='flex justify-around items-center'>

                    <div className="bg-[#16163F]  text-center w-[472px] h-[262px] rounded-[42px]">
                        <img className='m-auto' src={vector1} alt="" />
                        <span className='relative bottom-[40px] text-[21px]'>Fast Charge</span>

                        <div className='m-auto flex justify-between  w-[430px]'>

                            <div className='w-[202px]  rounded-[10px] flex'>
                                <div className='bg-[#171799] text-[15px] w-[153px] rounded-l-lg flex justify-center items-center'>
                                    Agent
                                </div>

                                <div className='border-[#0F0F37] border-[1px] '></div>


                                <div className='bg-[#171799] w-[52px] h-[54px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                                    <FaPlusCircle className='' />
                                </div>
                            </div>

                            <div className='w-[202px]  rounded-[10px] flex'>
                                <div className='bg-[#171799] text-[15px] w-[153px] rounded-l-lg flex justify-center items-center'>
                                    Agent
                                </div>

                                <div className='border-[#0F0F37] border-[1px] '></div>

                                <div className='bg-[#171799] w-[52px] h-[54px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                                    <FaPlusCircle className='' />
                                </div>
                            </div>


                        </div>

                        <div className="border-[#16163F] border-[1px] m-auto mt-[20px] h-[54px] flex justify-evenly items-center">
                            <div className=' w-[290px] flex'>

                                <div className='bg-[#1B1B85] w-[52px] h-[54px] rounded-l-lg flex justify-center items-center text-[#fff]'>
                                    <FaUser />
                                </div>
                                <div className='border-[#0F0F37] border-[1px] rounded-l-lg'></div>

                                <div
                                    className=''>
                                    <input type="text" placeholder="User Name" className="bg-[#1B1B85] rounded-r-lg text-lg px-[20px] w-[234px] h-[54px] flex justify-center items-center text-[#fff] focus:outline-none" />
                                </div>
                            </div>
                            <div className=' w-[120px] flex justify-between'>
                                <div className='w-[54px] h-[54px] rounded-[100px] border-[#1A710C] border-[1px] bg-[#1A710C] flex items-center justify-center'>
                                    +
                                </div>
                                <div className='w-[54px] h-[54px] rounded-[100px] border-[#DB0E0E] border-[1px] bg-[#DB0E0E] flex items-center justify-center'>
                                    -
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#16163F]  text-center w-[472px] h-[262px] rounded-[42px]">
                        <img className='m-auto' src={vector2} alt="" />
                        <span className='relative bottom-[40px] text-[21px]'>Net Income</span>

                        <div className=' w-[252px] mt-[5px] m-auto flex justify-between'>
                            <span>Current Month:</span>
                            <span>6,297</span>
                        </div>

                        <div className=' w-[258px] m-auto mt-[15px] flex justify-between'>
                            <span>Previous:</span>
                            <span>16.035</span>
                        </div>


                        <div className='m-auto w-[360px] flex justify-between mt-[15px] '>

                            <div className='w-[152px] h-[47px] border-[#DB0E0E] border-[1px] rounded-[10px] flex'>
                                <div className='bg-[#171799] text-[15px] w-[113px] h-[45px] rounded-l-lg flex justify-center items-center'>
                                    <span className='text-[#A31212]'>-4.39%</span>
                                </div>

                                <div className='border-[#DB0E0E] border-[1px] h-[45px]'></div>


                                <div className='bg-[#171799] w-[39px] h-[45px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                                    <img src={vectordown} alt='up' />
                                </div>
                            </div>



                            <div className='w-[152px] h-[47px] border-[#DB0E0E] border-[1px] rounded-[10px] flex'>
                                <div className='bg-[#171799] text-[15px] w-[113px] h-[45px] rounded-l-lg flex justify-center items-center'>
                                    <span className='text-[#1A710C]'>-4.39%</span>
                                </div>

                                <div className='border-[#DB0E0E] border-[1px] h-[45px]'></div>


                                <div className='bg-[#171799] w-[39px] h-[45px] rounded-r-lg flex justify-center items-center text-[#fff]'>
                                    <img src={vectorup} alt='up' />
                                </div>
                            </div>

                            <div className='border-[#C6B710] border-[1px] w-[36px] h-[45px] rounded-[6px] flex justify-center items-center'>
                                <img src={vectoreye} alt="" />
                            </div>


                        </div>



                    </div>

                    <div className="bg-[#16163F]  text-center w-[472px] h-[262px] rounded-[42px]">
                        <img className='m-auto' src={vector3} alt="" />
                        <span className='relative bottom-[40px] text-[21px]'>Net win Monthly</span>


                        <div className=' m-auto w-[422px] h-[96px]'>
                            <img src={group18} alt='graph' />
                        </div>


                        <div className=' m-auto w-[422px] mt-[29px] flex items-center justify-evenly'>
                            <div className=' w-[100px] flex justify-evenly items-center'>
                                <div className='rounded-[100px] w-[30px] h-[30px] bg-[#D49A5E]'>

                                </div>
                                <span>Filled</span>

                            </div>
                            <div className=' w-[100px] flex justify-evenly items-center'>
                                <div className='rounded-[100px] w-[30px] h-[30px] bg-[#2979B6]'>

                                </div>
                                <span>Filled</span>

                            </div>
                            <div className=' w-[110px] flex justify-evenly items-center'>
                                <div className='border-dashed border-[1px]  rounded-[100px] w-[30px] h-[30px] bg-[#BB57F9]'>

                                </div>
                                <span>Dashed</span>

                            </div>

                        </div>





                    </div>

                </div>

                <div  className='flex justify-around items-center'>

                    <div className='bg-[#16163F]  rounded-[42px] mt-[10px] h-[551px] w-[977px]'>
                        <img className='m-auto' src={vector1} alt="" />
                        <span className='relative left-[430px] bottom-[40px] text-[21px]'>Daily Netwin</span>
                    </div>

                    <div className='bg-[#16163F]  rounded-[42px] mt-[10px] h-[551px] w-[472px]'>
                        <img className='m-auto' src={d5} alt="" />
                        <div className='w-[170px] text-center relative left-[155px] bottom-[60px] text-[21px]'>Top Agents of the month</div>

                        <div className='bg-[#D38262] m-auto  w-[284px] h-[284px] rounded-[300px]'>
                            <img className='m-auto' src={ellipse27} alt="" />

                        </div>
                        <div className=' m-auto w-[380px] mt-[60px] flex items-center justify-evenly'>

                            <div className=' w-[200px] flex justify-evenly items-center'>
                                <div className='rounded-[100px] w-[30px] h-[30px] bg-[#C36171]'>

                                </div>
                                <span className='text-[15px] text-[#4C4C76]'>Pirry 2022</span>

                            </div>
                            <div className=' w-[200px] flex justify-evenly items-center'>
                                <div className='  rounded-[100px] w-[30px] h-[30px] bg-[#D38262]'>

                                </div>
                                <span className='text-[15px] text-[#4C4C76]'>July</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminDash