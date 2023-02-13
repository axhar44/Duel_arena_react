import Ellipse from "../../assets/icons/userImg.png";
import bar from "../../assets/icons/bar.png";
import coin from "../../assets/icons/coin.png";
import copy from "../../assets/icons/copy.png";
import dorbeen from "../../assets/icons/dorbeen.png";
import "./profile_page.css";
import ArrowUp from "../../assets/icons/arrowup.svg";
import Coins from "../../assets/icons/coin.png";
import Dorbeen from "../../assets/icons/dorbeen.png";
import {
  FaTimes,
  FaRedoAlt,
  FaAngleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { useState } from "react";

const ProfileUsername = () => {
  return (
    <div className="border-[#23224A] border-[1px] bg-[#23224A] h-[432px] w-[218px] rounded-[16px] ">
      <div className="mt-[18px] flex justify-center items-center">
        <img src={Ellipse} alt="Profile" />
      </div>
      <div className="text-[#fff] mt-[10px] flex justify-center items-center">
        <span className="font-medium text-[16px]">Username</span>
      </div>

      <div className="mt-[10px] text-center pb-3 border-b-[1px] border-b-[#353353]">
        <span className="text-[#BEBEDC] text-[12px] opacity-[0.3]">Joined</span>
        <div className="text-[#fff] text-[14px] font-[400]">07/27/2022</div>
      </div>

      <div className="text-[#fff] mt-[20px] text-center">
        <div className="text-[#BEBEDC] text-[12px] opacity-[0.3]">
          Total Wagered
        </div>
        <div className="text-[14px] font-[400]">0.00</div>
      </div>

      <div className="text-[#fff] mt-[20px] text-center">
        <div className="text-[#BEBEDC ] text-[14px] font-[400] opacity-[0.3]">
          Total Bets
        </div>
        <div className="text-[14px]">0</div>
      </div>

      <div className="text-[#fff] mt-[10px] text-center">
        <div className="flex justify-between items-center p-[10px]">
          <span className="text-[12px] text-[#BEBEDC]">Level 1</span>
          <span className="text-[12px] text-[#BEBEDC]">44/84</span>
        </div>
        <div className="">
          <img className="ml-[14px]" src={bar} alt="" />
        </div>
      </div>

      <div className=" w-[218px] h-[85px] rounded-2xl text-[#fff] mt-[10px] text-center relative">
        <div className="lowOpacityGradient w-[218px] h-[85px] absolute rounded-3xl"></div>
        <div className="bottomline w-[218px] h-[85px] absolute rounded-3xl"></div>
        <div className="ml-[-10px] text-center flex justify-center items-center">
          <img className="m-[5px]" src={coin} alt="" />
          <span>0.00</span>
        </div>
        <div className="text-[#FD9F28]">Cashier</div>
        {/* <div className="bottom_div h-1 w-full"></div> */}
      </div>
    </div>
  );
};

const General = () => {
  return (
    <>
      <div className="accordion grid  w-[610px] h-[auto]  rounded-[16px] overflow-hidden">
        <div className="accordion-item" id="question1">
          <a className="accordion-link grid grid-cols-2 bg-[#191537] min-h-[50px]" href="#question1">
            <div className="flex items-start p-[24px]">General</div>
            {/* <div className="flex justify-end items-center float-left p-[30px] text-xs">
              <img src={ArrowUp} />
            </div> */}
            {/* <img className="icon ion-md-arrow-forward" src={ArrowUp} /> */}
            <i className="icon ion-md-arrow-forward" />
            <a href="#"><i className="icon ion-md-arrow-down" /></a>
          </a>
          <div className="answer">
            <div className="grid grid-cols-2 grid-rows-2 bg-[#23224A] min-h-[50px] ">
              <div className="grid items-start bg-[#23224A] px-[24px] py-[24px] space-y-[12px] border-b-[1px] border-b-[#353353]">
                <div className="flex items-start text-[14px] text-[#BEBEDC] gap-[10px]">
                  <p className="opacity-[0.5]">Email</p>
                  <p className="text-[#4BD078]">Verified</p>
                </div>
                <div className="flex items-start text-[14px] text-[#BEBEDC]">
                  email@exmaple.com
                </div>
              </div>
              <div className="grid w-auto items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px] border-b-[1px] border-b-[#353353]">
                <div className="flex items-start text-[14px] text-[#BEBEDC] opacity-[0.5]">
                  Password
                </div>
                <div className="flex items-start text-[14px] text-[#BEBEDC] ">
                  ********
                </div>
              </div>
              <div className="grid items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px] ">
                <div className="flex items-start opacity-[0.5]">
                  Game account link
                </div>
                <div className="flex items-start  text-[#BEBEDC] text-[14px]">Not linked yet</div>
              </div>
              <div className="grid items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px]">
                <div className="flex items-start opacity-[0.5]">Bet Confirmation</div>
                <div className="flex items-start  text-[#BEBEDC]">
                  <span className="">
                    <label
                      for="default-toggle"
                      class="inline-flex relative items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="default-toggle"
                        class="sr-only peer"
                      />
                      <div class="w-[24px] h-[14px] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[10px] after:w-[10px] after:transition-all dark:border-gray-600 peer-checked:bg-[#575DE8]"></div>
                    </label>
                    <span className="text-[14px]">&nbsp; Enabled</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="accordion-item" id="question2">
              <a className="accordion-link" href="#question2">
                <div className="flex">
                  <h3>UX/UI DESIGN</h3>
                  <ul>
                    <li>#Figma</li>
                    <li>#Sketch</li>
                    <li>#Adobe</li>
                    <li>#Invision</li>
                    <li>#Protopie</li>
                  </ul>
                </div>
                <i className="icon ion-md-arrow-forward" />
                <i className="icon ion-md-arrow-down" />
              </a>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
              <hr />
            </div>
            <div className="accordion-item" id="question3">
              <a className="accordion-link" href="#question3">
                <div className="flex">
                  <h3>FRONTEND DEVELOPMENT</h3>
                  <ul>
                    <li>#Figma</li>
                    <li>#Sketch</li>
                    <li>#Adobe</li>
                    <li>#Invision</li>
                    <li>#Protopie</li>
                  </ul>
                </div>
                <i className="icon ion-md-arrow-forward" />
                <i className="icon ion-md-arrow-down" />
              </a>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
              <hr />
            </div>
            <div className="accordion-item" id="question4">
              <a className="accordion-link" href="#question4">
                <div>
                  <h3>BACKEND DEVELOPMENT</h3>
                  <ul>
                  </ul>
                </div>
                <i className="icon ion-md-arrow-forward" />
                <i className="icon ion-md-arrow-down" />
              </a>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
              <hr />
            </div> */}
      </div>
      {/* <div className="grid  w-[610px] h-[276px]  rounded-[16px] overflow-hidden"> */}
      {/* <div className="grid grid-cols-2 bg-[#191537] min-h-[50px]">
        <div className="flex items-start p-[24px]">General</div>
        <div className="flex justify-end items-center float-left p-[30px] text-xs">
          <img src={ArrowUp} />
        </div>
      </div> */}
      {/* <div className="grid grid-cols-2 grid-rows-2 bg-[#23224A] min-h-[50px] ">
        <div className="grid items-start bg-[#23224A] px-[24px] py-[24px] space-y-[12px] border-b-[1px] border-b-[#353353]">
          <div className="flex items-start text-[14px] text-[#BEBEDC] gap-[10px]">
            <p className="opacity-[0.5]">Email</p>
            <p className="text-[#4BD078]">Verified</p>
          </div>
          <div className="flex items-start text-[14px] text-[#BEBEDC]">
            email@exmaple.com
          </div>
        </div>
        <div className="grid w-auto items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px] border-b-[1px] border-b-[#353353]">
          <div className="flex items-start text-[14px] text-[#BEBEDC] opacity-[0.5]">
            Password
          </div>
          <div className="flex items-start text-[14px] text-[#BEBEDC] ">
            ********
          </div>
        </div>
        <div className="grid items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px] ">
          <div className="flex items-start opacity-[0.5]">
            Game account link
          </div>
          <div className="flex items-start  text-[#BEBEDC] text-[14px]">Not linked yet</div>
        </div>
        <div className="grid items-start bg-[#23224A] px-[24px] py-[32px] text-[14px] gap-[10px]">
          <div className="flex items-start opacity-[0.5]">Bet Confirmation</div>
          <div className="flex items-start  text-[#BEBEDC]">
            <span className="">
              <label
                for="default-toggle"
                class="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle"
                  class="sr-only peer"
                />
                <div class="w-[24px] h-[14px] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[10px] after:w-[10px] after:transition-all dark:border-gray-600 peer-checked:bg-[#575DE8]"></div>
              </label>
              <span className="text-[14px]">&nbsp; Enabled</span>
            </span>
          </div>
        </div>
      </div> */}
      {/* </div> */}
    </>

  );
};

const Orders = () => {
  let data = 0;
  const [list, setList] = useState(data);

  return (
    <div className=" w-[610px] h-[auto] rounded-2xl overflow-hidden">
      <div className="header flex justify-between p-[24px] bg-[#191537]">
        <div>Order</div>
        <div>
          <img src={ArrowUp} />
        </div>
      </div>
      <div className="selectors flex justify-between py-[24px] bg-[#23224A]">
        <div className="flex">
          <div>
            <select className="bg-[#23224A] text-[14px] px-4 border-r-4 border-r-[#23224A]">
              <option>Any thing</option>
              <option>Any thing</option>
              <option>Any thing</option>
              <option>Any thing</option>
            </select>
          </div>
          <div>
            <select className="bg-[#23224A] text-[14px] px-4 border-r-4 border-r-[#23224A]">
              <option>Any thing</option>
              <option>Any thing</option>
              <option>Any thing</option>
              <option>Any thing</option>
            </select>
          </div>
        </div>
        <div className="px-[24px]">
          <HiRefresh className="text-2xl font-thin" />
        </div>
      </div>
      <div>
        <table className="text-[14px] w-full h-[10px] overflow-y-scroll bg-[#23224A]">
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
        </table>
        <div className="h-[87px] w-full flex justify-between px-[24px] items-center text-[#6E6D90] text-[14px] bg-[#23224A]">
          <div>1-4 of 10</div>
          <div> {`< >`}</div>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  return (
    <div className="bg-[#23224A] w-[610px] h-[272px] border-[#191537] border-[1px] rounded-[16px]">
      <div className="bg-[#191537] h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Transactions</div>
        <div>
          <FaAngleUp className="text-[#fff]" />
        </div>
      </div>

      <div className="bg-[#23224A] ">
        <div className="flex justify-between items-center">
          <div className="text-[#fff] flex justify-center items-center">
            <div className="text-[14px] text-[#BEBEDC] mx-[10px] mt-[26px]">
              <select className="focus:outline-none border-none bg-[#23224A] px-[8px]">
                <option>Any thing</option>
                <option>Any thing</option>
                <option>Any thing</option>
                <option>Any thing</option>
              </select>
            </div>
          </div>
          <div className="mr-[30px] text-[#fff] p-[12px]">
            <FaRedoAlt />
          </div>
        </div>

        <div className=" h-[100px] flex justify-center items-center text-[#fff]">
          <span>No Transactions Yet</span>
        </div>

        <div className="bg-[#23224A] mt-[80px] flex justify-between items-center">
          <div className="text-[#fff] ml-[30px] p-[12px]">1-4 of 10</div>
          <div className="text-[#fff] mr-[30px] flex justify-center items-center">
            <div className="flex p-[12px]">
              <FaAngleLeft className="ml-[10px]" />
            </div>
            <div className="flex p-[12px]">
              <FaAngleRight className="ml-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Promotions = () => {
  return (
    <div className="mt-[100px] w-[610px] h-[auto] rounded-2xl overflow-hidden bg-[#23224A]">
      <div className="header flex justify-between p-[24px] bg-[#191537]">
        <div>Promotions</div>
        <div>
          <img src={ArrowUp} />
        </div>
      </div>
      <div className="selectors flex justify-between py-[24px] bg-[#23224A]">
        <div className="flex justify-between w-full h-full px-[15px] ">
          <div>
            <input
              type="text"
              placeholder="Promocode"
              className="bg-[#2E2D58] text-[#BEBEDC] text-[14px] rounded-full pl-[16px] py-[12px] w-[412px] h-[38px]"
            />
          </div>
          <div>
            <button class="text-white bg-[#575DE8] text-[14px] w-[143px] h-[38px] border-0  focus:outline-none hover:bg-indigo-600 rounded-full ">
              Use Promocode
            </button>
          </div>
        </div>
      </div>
      <div>
        <table className="text-[14px] w-full h-[10px] overflow-y-scroll">
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
          <tr className=" border-b-[1px] w-full h-[87px] border-b-[#353353]">
            <td className="p-5 ">
              <tr className=" text-[12px] text-[#BEBEDC]">2 min ago</tr>
              <tr className="">Deposit</tr>
            </td>
            <td className="">
              <td className="">
                <img src={Dorbeen} height={"10px"} width={"10px"} />
              </td>
              <td className="">ABCD-EFGH-IJKL</td>
            </td>
            <td className="">
              <td className="">
                <img src={Coins} />
              </td>
              <td className="">2.00 (BTC)</td>
            </td>
            <td className="">Cancel</td>
          </tr>
        </table>
        <div className="h-[87px] w-full flex justify-between px-[24px] items-center text-[#6E6D90] text-[14px]">
          <div>1-4 of 10</div>
          <div> {`< >`}</div>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-3 h-[786px]">
      <div className=" float-left ">
        <ProfileUsername />
      </div>
      <div className="space-y-5 overflow-y-scroll col-span-2">
        <div>
          <General />
        </div>

        <div>
          <Orders />
        </div>

        <div>
          <Transactions />
        </div>

        <div>
          <Promotions />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
