import Image from "next/image";
import React from "react";
import Comp7a from "./Comp7a";

const Comp7 = ({ history }) => {
  // Use slice to get the top 4 items
  const top5History = history.slice(0, 5);

  if (history.length === 0) {
    return (
      <section className="lg:w-[22vw] w-[92vw]  shadow-[0_0_5px_0_rgba(0,0,0,0.2)] lg:mt-14 mt-80 md:mt-80 rounded-[20px] mb-10 mx-auto">
        <div className="lg:w-[22vw] w-[92vw] flex justify-between items-center px-6">
          <div>
            <h2 className="text-[#2B5743] text-[14px] relative top-2 font-medium">
              Purchase History
            </h2>
          </div>
          <div className="flex items-center relative top-2">
            <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
            <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
            <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
          </div>
        </div>
        <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0 "></div>
        <div>
          <p className="py-5 text-center font-semibold">Please click on Invest Now to make a purchase.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="lg:w-[22vw]  w-[92vw]  shadow-[0_0_5px_0_rgba(0,0,0,0.2)] lg:mt-14 mt-80 md:mt-80 rounded-[20px] mb-10 mx-auto ">
      <div className="lg:w-[22vw] w-[92vw] flex justify-between items-center px-4">
        <div>
          <h2 className="text-[#2B5743] text-[14px] relative top-2 font-medium">
            Purchase History
          </h2>
        </div>
        <div className="flex items-center relative top-2">
          <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
          <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
          <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
        </div>
      </div>
      <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
      <div>
        {top5History.map((item, index) => (
          <Comp7a item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Comp7;
