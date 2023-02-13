import { message } from "antd";
import Pusher from "pusher-js";
import React, { useEffect, useState, useRef } from "react";
import NetworkService from "../../services/network.service";
// import { requestForToken } from "../../firebase/firebase";

const Message = ({chatRef, setChatRef}) => {
  const networkService = new NetworkService();
  var [messages, setMessages] = useState();
  const [message, setMessage] = useState("");
  // const allMessages = [];
  const messagesEndRef = useRef(null);
  // let chats=[]
  // let id = localStorage.getItem("r_id");
  // let chats =  networkService.get_chat_room_list_by_id({
  //   chat_room_id: id,
  // });
  // setMessages(chats);
  const getchat = async () => {
    let id = localStorage.getItem("id");
    let chats = await networkService.get_chat_room_list_by_id({
      chat_room_id: 1,
    });

    console.log({chats})

    setMessages(chats);

    // console.log({messages})
    // allMessages.push(chats)
    // console.log({this_allMessages: allMessages})
    // console.log({this_message: messages})
    // console.log({this_chat:chats})
    // setMessages(chats)
    // console.log({this_message: messages})
  };

  // useEffect(() => {
  //   // getchat();
  //   // setMessages(messages);
  //   console.log("message useeffect");
  //   console.log({ message_body: messages });
  // }, []);

   useEffect(() => {
    console.log("chatRef",chatRef);
    if(chatRef){
      getchat();
      setChatRef(false);
    }

  }, [chatRef]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    // getchat();

    Pusher.logToConsole = true;
    var pusher = new Pusher("781df2fba5c20dd72df9", {
      cluster: "ap2",
      forceTLS: true,
    });

    const this2 = this;
    var channel = pusher.subscribe("group-chat-channel");
    channel.bind("group-chat-event", function (data) {
      console.log("PNGY", data);
      // allMessages.push(data);
      // setMessages([...allMessages]);
    });
    // messagesEndRef.current?.scrollIntoView();
    // console.log({ messages, chats });
  }, []);

  // useEffect( () => {

    
  //   console.log(messages)
  // }, [messages]);

  return (
    <div className="main-message-body mx-4 overflow-y-scroll overflow-hidden">
      {messages &&
        messages.map((message) => {
          return (
            <div className="chat flex flex-start mt-4 w-full " key={message.id}>
              <div className="h-auto w-auto pr-3 ">
                <img
                  src="https://img.freepik.com/premium-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg"
                  alt="user"
                  className="h-[32px] w-[32px] rounded-full"
                />
              </div>

              <div className="d2 w-4/5 text-left">
                <span className="username text-[14px]">{message.name}</span>
                <span className="msg-time text-[#4C4B6A] mx-2 text-[12px]">
                  {message.created_at}
                </span>
                <div className="text-left text-[#9996BA] w-[224px] h-full mr-5 text-[12px] mt-[4px]">
                  {message.message}
                  {/* this is message */}
                </div>
              </div>
            </div>
          );
        })}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Message;
