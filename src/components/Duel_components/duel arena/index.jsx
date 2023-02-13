
import { FaCoins } from 'react-icons/fa';
import { TbSword } from 'react-icons/tb';
// import sword from './sword.png'
import './index.css'

const Comp4 = () => {
    return (
        <div className="main w-[278px] h-[153px] m-[10px] rounded-md flex items-center justify-around ">

            
            <div className="w-[115px] h-[129px] m-[10px] flex-col items-center ">
                <span className=" border-white w-[58px] h=[12px] mr-[40px] font-medium font-Poppins text-[#3CEE4E]">Win</span>
                <img className="rounded-[100%] border-none mx-[31px] my-[-2px]" width={"53px"} height={"53px"} src={"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg"} alt="tiger"/>
                <div className="w-[58px] h-[px] font-400 font-Poppins text-[#fff] ml-[29px] mt-[8px] flex justify-center align-center">Clutch</div>
                <div className='flex w-[80px] mt-[1px] ml-[18px] justify-center items-center'>
                    <FaCoins className='text-[#FD9F28] m-1'/>
                    <div className='text-[#3CEE4E]'>1,000.00</div>
                </div>
            </div>

        <div sstyle={{zIndex: '100'}}  className="border-[#364C60] border-[1px] h-[153px] relative left-[18px] z-[10]"></div>

            <div className='rounded-[100%] w-[39px] h-[39px] z-[20] flex items-center justify-center bg-[#1D1B3F] '>
            {/* <img src={sword} alt="sword"/> */}
            <TbSword className="text-[30px] text-[#FCD24C]"/>
            </div>


            <div className="w-[115px] h-[129px] m-[10px] mt-[55px] flex-col items-center ">
                <img className="rounded-[100%] border-none mx-[9px] my-[-2px]" width={"53px"} height={"53px"} src={"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg"} alt="tiger"/>
                <div className="w-[58px] h-[px] font-400 font-Poppins text-[#fff] ml-[8px] mt-[8px] flex justify-center align-center">Clutch</div>
                <div className='flex w-[80px] mt-[1px] ml-[4px] justify-center items-center'>
                    <FaCoins className='text-[#FD9F28] m-1'/>
                    <div className='text-[#EE3C3C]'>1,000.00</div>
                </div>
            </div>

          

        </div>
    )
}

export default Comp4;
