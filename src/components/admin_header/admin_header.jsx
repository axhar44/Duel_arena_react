import header1 from '../../assets/icons/header1.png'
import header2 from '../../assets/icons/header2.png'
import header3 from '../../assets/icons/header3.png'


const AdminHeader = () => {
    return (
        <div className='bg-[#08081F]  h-[89px] flex justify-end'>
            <div className=' w-[400px] text-[#fff] flex justify-around items-center'>
                <div className='border-[#34346F] border-[1px] w-[124px] h-[48px] rounded-[10px] flex justify-around items-center'>
                    <img src={header1} alt="" />
                    <span>$0.00</span>
                </div>
                <div className='border-[#34346F] border-[1px] w-[49px] h-[48px] rounded-[10px] flex justify-around items-center'>
                    <img src={header2} alt="" />
                </div>
                <div className='border-[#34346F] border-[1px] w-[124px] h-[48px] rounded-[10px] flex justify-around items-center'>
                    <img src={header3} alt="" />
                    <span>ADmin</span>
                </div>
            </div>

        </div>
    )
}

export default AdminHeader