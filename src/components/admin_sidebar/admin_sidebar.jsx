import sidebar from "../../assets/icons/sidebar.jpg"
import adminlogo from "../../assets/icons/adminlogo.png"
import sidebar1 from "../../assets/icons/sidebar1.svg"
import sidebar2 from "../../assets/icons/sidebar2.png"
import sidebar3 from "../../assets/icons/sidebar3.png"
import sidebar4 from "../../assets/icons/sidebar4.png"
import sidebar5 from "../../assets/icons/sidebar5.png"
import sidebar6 from "../../assets/icons/sidebar6.png"
import sidebar7 from "../../assets/icons/sidebar7.png"
import { FaAngleRight } from "react-icons/fa";

const AdminSideBar = () => {

    return (
            <div className="border-[#0F0F37] border-[1px] bg-[#0F0F37] rounded-r-[150px] h-[1080px] w-[299px]">

                <div className=" ml-[28px] mt-[40px] w-[150px] text-[#fff]">
                    <img src={adminlogo} alt="" />
                </div>

                <div className=" mt-[100px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[140px] flex justify-between items-center">
                        <img src={sidebar1} alt="" />
                        <div className="text-[18px]">Statistics</div>
                    </div>
                </div>

                <div className=" mt-[30px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[105px] flex justify-between items-center">
                        <img src={sidebar2} alt="" />
                        <div className="text-[18px] text-[#68688D]">Users</div>
                    </div>
                </div>

                <div className=" mt-[30px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[220px] flex justify-between items-center">
                        <img src={sidebar3} alt="" />
                        <div className="text-[18px] text-[#68688D]">Global Reports</div>
                        <FaAngleRight className="text-[#68688D]"/>
                    </div>
                </div>
                
                <div className=" mt-[30px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[186px] flex justify-between items-center">
                        <img src={sidebar4} alt="" />
                        <div className="text-[18px] text-[#68688D]">File Reports</div>
                        <FaAngleRight className="text-[#68688D]"/>
                    </div>
                </div>
                <div className=" mt-[30px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[174px] flex justify-between items-center">
                        <img src={sidebar5} alt="" />
                        <div className="text-[18px] text-[#68688D]">Game Reports</div>
                    </div>
                </div>

                <div className=" mt-[30px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[120px] flex justify-between items-center">
                        <img src={sidebar6} alt="" />
                        <div className="text-[18px] text-[#68688D]">Finance</div>
                    </div>
                </div>

                <div className=" mt-[30px] h-[61px] w-[299px] text-[#fff] flex items-center">
                    <div className=" ml-[30px] w-[165px] flex justify-between items-center">
                        <img src={sidebar7} alt="" />
                        <div className="text-[18px] text-[#68688D]">My Summary</div>
                    </div>
                </div>





            </div>


    )
}

export default AdminSideBar