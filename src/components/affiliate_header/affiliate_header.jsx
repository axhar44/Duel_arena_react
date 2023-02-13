// import { TbSword } from 'react-icons/tb';
import question from './../../assets/icons/question_mark.png'



const AffiliateHeader = () => {
    return (
        <div className="bg-[#1D1B3F] w-[1200px] h-[38px] flex justify-center items-center justify-between">


            <div className='flex justify-between items-center h-[38px] w-[200px]'>
                <span className='font-medium text-[28px] text-[#fff]'>Affiliate</span>
            </div>

            <div className='w-[80px] h-[38px] flex justify-center items-center justify-between'>

                <div className='text-[#fff]'>
                    Tier 1
                </div>
                <div className=''>
                    <img src={question} alt="icon" />
                </div>

            </div>


        </div>
    );
}

export default AffiliateHeader;