import React from "react";
import DuelBag from "../components/Duel_components/duel arena/index";
import DuelBagHeader from "../components/Duel_components/duel-arena-header/index";
import Comp7 from "../components/Footer";

const Duel = () => {
  return (

      <div className="flex flex-col justify-center items-center h-[calc(100%+10rem)] w-full ">
        <div className="mt-[40px] shadow-sm  w-full ">
          <DuelBagHeader />
        </div>
        <div className=" flex justify-center items-center flex-wrap mt-[20px] overflow-y-scroll w-full">
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
        </div>

      </div>


  );
};

export default Duel;
