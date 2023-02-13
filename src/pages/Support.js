import React, { useEffect, useState } from "react";
import OpenTicket from "../components/Support/OpenTicket";
import SupportBreadCrum from "../components/Support/SupportBreadCrum";
import Tickets from "../components/Support/Tickets";

const Support = () => {
  let [isTicket, setisTicket] = useState(false);

  const tickets = [
    {
      id: "#13-02",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },
    {
      id: "#13-01",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "open",
    },
    {
      id: "#13-03",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },
    {
      id: "#13-011",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },

    {
      id: "#13-031",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },

    {
      id: "#13-0323",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },

    {
      id: "#13-03321",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },
    {
      id: "#13-21",
      title: "I have an account issue",
      topic: "Account Problem",
      created: "5 days ago",
      update: "13 min ago",
      status: "Solved",
    },
  ];

  useEffect(() => {
    if (tickets.length > 0) {
      setisTicket(true);
      console.log(tickets.length);
      console.log(isTicket);
    } else {
      setisTicket(false);
    }
  }, [isTicket, tickets.length]);

  return (
    <>
      <div className="mt-10">
        <SupportBreadCrum />
      </div>
      <div className="relative mt-11 h-full overflow-auto">
        {isTicket ? (
          <Tickets tickets={tickets} />
        ) : (
          <div className=" h-full translate-x-[0%] translate-y-[50%] justify-center items-center">
            <p className="text-[#BEBEDC] text-[14px]">Ticket not found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Support;
