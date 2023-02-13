import React, { useEffect, useState } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoInformationCircle } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import NetworkService from "../../services/network.service";
import Rooms from "./rooms";

const MessageHeader = ({ toggleChat }) => {
  const networkService = new NetworkService();

  const [rooms, setRooms] = useState();
  const [toggler, setToggler] = useState(false);

  const loadRooms = async function () {
    let data = await networkService.getRooms();
    setRooms(data);
    console.log(`rooms message header: ${JSON.stringify(rooms)}`);
  };

  useEffect(() => {
    loadRooms();
  }, [setRooms]);

  // loadRooms()

  return (
    <div className="header-chat flex justify-around items-center h-[60px] w-[300px] py-2 shadow-lg bg-[#191537]">
      {/* <span className="msg-span flex justify-center items-center  w-[38px] h-[38px]">
        <div
          className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#23224A] text-black  hover:bg-[#5a4dba]"
          onClick={() => toggleChat()}
        >
          <BiMessageSquareDetail className="text-white w-[19px] h-[19px]"  />
        </div>
      </span> */}

      <span className="seacrh flex justify-center items-center  md:w-[180px]">
        <div className="">
          <input
            type="text"
            placeholder="General Chat"
            className=" rounded-full w-[190px] h-[38px] bg-[#23224A] text-sm text-[#BEBEDC] px-4 focus:outline-none  hover:bg-[#5a4dba]"
          />
        </div>
      </span>

      <span
        className="flex justify-center items-center  w-[38px] h-[38px]"
        onClick={() => {
          setToggler(!toggler);
        }}
      >
        <div className="rounded-full w-[40px] h-[38px] bg-[#23224A] text-white flex justify-center items-center  hover:bg-[#5a4dba]">
          <IoInformationCircle className="w-[19px] h-[19px]" />
        </div>
      </span>

      {toggler && (
        <div className="w-auto h-auto absolute shadow-xl top-16">
          <Rooms rooms={rooms} />
        </div>
      )}
    </div>
  );
};

export default MessageHeader;
