import React from "react";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Comp2 from "./Comp2";
const Comp1 = ({packages}) => {
  // console.log(packages)
  return (
    <section className="w-[80vw] mx-auto mt-10">
      <div className="flex justify-center  font-bold text-3xl text-[#2B5743]">
        <h2>Invest Now</h2>
      </div>
      <div className="px-6 py-4 mt-10 shadow-[0_0_5px_0_rgba(0,0,0,0.3)] rounded-[32px]">
      <div > 
        <div className="flex items-center justify-between">
          <h3 className="text-[#2B5743] font-medium text-[22px] mb-5">
            Investment Packages
          </h3>
          <MdKeyboardArrowDown className="text-[#2B5743] text-4xl mr-10" />
          
        </div>
        
      </div>
      <div className="flex    items-center">
            <GoSearch className="text-2xl absolute left-[12vw] text-[#9ca3c1]" />
            <input
              type="text"
              name="searchField"
              id="searchField"
              placeholder="Search and add packages"
              className="w-full min-h-[6vh]  border-[1px] border-solid border-[#428358] opacity-50 px-14 text-lg"
            />
          </div>
          <Comp2 packages={packages}/>
      </div>
      
    </section>
  );
};

export default Comp1;
