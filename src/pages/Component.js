import React from "react";
import { Link, Outlet } from "react-router-dom";
import Comp1 from "../components/Home_Components/comp 1";
import Comp2 from "../components/Home_Components/comp 2";
import Comp3 from "../components/Home_Components/comp 3";
import Comp4 from "../components/Home_Components/comp4";
import Comp5 from "../components/Home_Components/comp5";
import Comp6 from "../components/Home_Components/comp6";
import Footer from "../components/Footer";
import "../css/component.css";
// md:space-y-0 md:space-x-3 md:justify-center md:items-center

// md:flex md:justify-center md:items-center md:mt-3 md:ml-[35px]
const Component = () => {
  return (
    <>
    <center className="px-40">
      <div className=" mt-10 ">
        <div className="row ">
          <div className="block1 mt-3 py-1 space-y-3 col-xs-6 col-md-12 col-xl-4">
              <Comp1 />
              <Comp2 />
          </div>
          <div className="block2 mt-3 col-xs-6 col-md-12 col-xl-8">
            <Comp3 />
          </div>
        </div>

        {/*second  */}
        <div className="relative comp45 flex justify-center items-center space-x-3 mt-6 w-[full]  overflow- row" >
          <div className="comp4 flex justify-center items-center mt-3 col-sm-12 col-md-6 col-lg-5 col-xl-6">
            <div className="absolute mt-10 blur-xl rounded-full opacity-50">
            <Comp4/>
            </div>
            <div className="blur_box ">
            <Comp4 />
            </div>
          </div>
          <div className="comp5 flex justify-center items-center mt-3 col-sm-12 col-md-6 col-lg-5 col-xl-6">
            <div className="absolute mt-10 blur-xl rounded-full opacity-50">
            <Comp5 />
            </div>
            <div className="blur_box ">
            <Comp5 />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[40px] mb-[40px]">
        <Comp6/>
      </div>
    </center>
    </>
  );
};

export default Component;
