import React from "react";
import Comp5 from "../Portfolio/comp5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Comp6 = () => {
  return (
    <section >
      <div className="lg:translate-x-10">
      <Comp5  />
      </div>
      <div className="mt-10 lg:w-[20vw] w-[92vw] lg:-translate-x-8 ">
        <h2 className="font-medium text-2xl">Help & Support</h2>
      </div>
      <div className="shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-4 py-4 rounded-[22px] lg:w-[25vw] w-[92vw] mx-auto space-y-5 mt-5 lg:-translate-x-8 ">
        <div className="flex items-center justify-between lg:w-[20vw]  ">
          <div className="flex space-x-4">
            <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
            <p className="text-[#6E737F] font-medium text-sm">Frequently Asked Questions</p>
          </div>
          <MdKeyboardArrowRight className="text-[#6E737F] font-medium text-xl" />
        </div>
        <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
        <div className="flex items-center justify-between lg:w-[20vw] ">
          <div className="flex space-x-4">
            <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
            <p className="text-[#6E737F] font-medium text-sm">Customer Support</p>
          </div>
          <MdKeyboardArrowRight className="text-[#6E737F] font-medium text-xl" />
        </div>
        <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
        <div className="flex items-center justify-between lg:w-[20vw] ">
          <div className="flex space-x-4">
            <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
            <p className="text-[#6E737F] font-medium text-sm">Help Center</p>
          </div>
          <MdKeyboardArrowRight className="text-[#6E737F] font-medium text-xl" />
        </div>
      </div>
      <div className="mt-10 lg:-translate-x-8 ">
        <h2 className="font-medium text-2xl">Terms & Conditions</h2>
      </div>
      <div className="shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-4 py-4 rounded-[22px] lg:w-[25vw] w-[92vw] mx-auto space-y-5 mt-5 lg:-translate-x-8 ">
        <div className="flex items-center justify-between lg:w-[20vw]  ">
          <div className="flex space-x-4">
            <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
            <p className="text-[#6E737F] font-medium text-sm">Terms & Conditions</p>
          </div>
          <MdKeyboardArrowRight className="text-[#6E737F] font-medium text-xl" />
        </div>
        <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
        <div className="flex items-center justify-between lg:w-[20vw] ">
          <div className="flex space-x-4">
            <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
            <p className="text-[#6E737F] font-medium text-sm">Privacy Policies</p>
          </div>
          <MdKeyboardArrowRight className="text-[#6E737F] font-medium text-xl" />
        </div>
       
      </div>
    </section>
  );
};

export default Comp6;
