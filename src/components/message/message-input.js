import React, { useEffect, useState } from "react";
import { FiSmile } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import NetworkService from "../../services/network.service";
const MessageInput = ({setChatRef}) => {
  const networkService = new NetworkService();
  const room_id = localStorage.getItem("id");
  console.log("room id: "+room_id)
  // const [chat, setchat] = useState();
  const [message, setMessage] = useState();
  const [r_id, set_rid] = useState(1);


  const SendMsg = async () =>{
    console.log({message})
    const res = await networkService.sendChatMsg({"id": room_id,"chat_room_id": 1,"message": message});
     setMessage('');
    setChatRef(true);
        // const allMessages = await networkService.get_chat_room_list_by_id({"chat_room_id": r_id});
    // setMessage(allMessages);
  }
  const PressEnter = (e) =>
  {
    console.log(e.key)
    if(e.key == 'Enter')
    {
      setMessage(e.target.value);
      SendMsg()
      // setMessage('')
    }
  }
  // useEffect(() => {
  //   console.log({message})
  //   set_rid(localStorage.getItem('r_id'))
  // }, [SendMsg, localStorage.getItem('r_id')])
  return (
    <div className="  pt-[0px] w-[100%] mb-3 bg-[#191537] mt-3 overflow-x-hidden overflow-y-hidden flex justify-center items-center">
      <center>
        <div className="texting flex justify-center items-center w-[267px] h-[40px] bg-[#23224A] rounded-full ">
          <input
            type="text"
            placeholder="Type your messages"
            className="bg-[#23224A] h-[30px] text-[12px] focus:outline-none"
            onChange={(e)=>setMessage(e.target.value)}
            // onKeyPress={(e)=>PressEnter(e)}
            value = {message}
          />
          <div className="flex gap-3">
            <div className="emoji h-[18px] w-[18px]">
              <FiSmile />
            </div>
            <div className="send h-[18px] w-[18px]" onClick={ () => { console.log("send mesg");
            // SendMsg()
            } } >
              <IoIosSend  onClick={ () => { console.log("send mesg");
              SendMsg() }
              } />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
export default MessageInput;