import vector1 from '../../assets/icons/vector1.png'
import vector2 from '../../assets/icons/vector2.png'
import vector3 from '../../assets/icons/vector3.png'


const AdminGame = () => {
    return (
        <div>
            <div className=" text-[#fff] w-[1500px] text-[30px]">
                <span className='ml-[40px]'>Game Reports</span>
            </div>

            <div className=" w-[1500px] text-[#fff] flex justify-evenly">
                <div className="bg-[#16163F]  text-center w-[472px] h-[222px] rounded-[42px]">
                    <img className='m-auto' src={vector1} alt=""/>
                    <span className='relative bottom-[30px]'>Game-1</span>
                    <div className=' w-[180px] m-auto mt-[10px] flex justify-between'>
                        <span>New Wins:</span>
                        <span>6,297</span>
                    </div>

                    <div className=' w-[210px] m-auto mt-[20px] flex justify-between'>
                        <span>RTP</span>
                        <span>+9.38%</span>
                    </div>
                </div>
                <div className="bg-[#16163F]  text-center w-[472px] h-[222px] rounded-[42px]">
                    <img className='m-auto' src={vector2} alt=""/>
                    <span className='relative bottom-[30px]'>Game-2</span>
                    <div className=' w-[180px] m-auto mt-[10px] flex justify-between'>
                        <span>New Wins:</span>
                        <span>9,297</span>
                    </div>

                    <div className=' w-[210px] m-auto mt-[20px] flex justify-between'>
                        <span>RTP</span>
                        <span>+9.38%</span>
                    </div>
                </div>
                <div className="bg-[#16163F]  text-center w-[472px] h-[222px] rounded-[42px]">
                    <img className='m-auto' src={vector3} alt=""/>
                    <span className='relative bottom-[30px]'>Game-3</span>
                    <div className=' w-[180px] m-auto mt-[10px] flex justify-between'>
                        <span>New Wins:</span>
                        <span>16,297</span>
                    </div>

                    <div className=' w-[210px] m-auto mt-[20px] flex justify-between'>
                        <span>RTP</span>
                        <span>+9.38%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminGame