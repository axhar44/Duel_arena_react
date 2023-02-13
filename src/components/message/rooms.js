import React, { useEffect, useState } from "react";
import NetworkService from "../../services/network.service";

// CHAT/CHAT-ROOM  api for rooms

const Rooms = (props) => {
  console.log({ props });

  const networkService = new NetworkService()

  const handleRoom =  (r_id) =>
  {
    console.log({r_id});
    localStorage.setItem('r_id', r_id);
    
  }

  return (
    <div>
      <div className="flex h-auto w-auto bg-[#23224A] text-[14px] text-[#6E6D90] font-normal rounded-[16px] left-0 top-[50px] px-[13px] py-[20px] flex-col z-10 justify-evenly items-start ">
        {props.rooms &&
          props.rooms.map((room) => {
            return (
              <div className="cursor-pointer" key={room.id}>
                <div className="px-10 py-1">
                  <span className="py-1 hover:underline" onClick={()=>handleRoom(room.id)}>{room.name}</span>
                </div>
              </div>
            );
          })}
        
      </div>
    </div>
  );
};

export default Rooms;
