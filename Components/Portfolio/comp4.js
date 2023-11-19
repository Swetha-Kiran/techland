"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./chart.js"), { ssr: false });

const Comp4 = ({portfoliodata}) => {
  return (
    <>
      <section className="w-[25vw] mt-10 lg:mt-0 mb-10">
        <h2 className="text-black lg:w-[25vw] w-[40vw] text-[22px] bg-rd-300 font-semibold mb-3 mt-2">
         User Stats
        </h2>
        <div className="flex flex-col lg:flex-row lg:w-[25vw] w-[92vw] justify-around items-center shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[32px] px-2 mb-10">
          <Chart portfoliodata={portfoliodata} />
          <div className="bg-re-200 lg:w-[10vw] w-[70vw] ">
          <div className="flex  justify-between  mb-2 ">
              <div className="flex items-center">
              <div className="w-2 h-2 bg-[#428358] mr-2 rounded-full"></div>
              <p className="text-[#6E737F] text-[12px] md:text-[16px] lg:text-[12px] font-normal">Micro Land</p>
              </div>
              <p className="text-[#428358] text-[14px] font-medium">20%</p>
            </div>
            <div className="flex  justify-between  mb-2 ">
              <div className="flex items-center">
              <div className="w-2 h-2 bg-[#68BF7B] mr-2 rounded-full"></div>
              <p className="text-[#6E737F] text-[12px] md:text-[16px] lg:text-[12px] font-normal">Mini Land</p>
              </div>
              <p className="text-[#68BF7B] text-[14px] font-medium">60%</p>
            </div>
            <div className="flex  justify-between  mb-2 ">
              <div className="flex items-center">
              <div className="w-2 h-2 bg-[#F4B266] mr-2 rounded-full"></div>
              <p className="text-[#6E737F] text-[12px] md:text-[16px] lg:text-[12px] font-normal">Medium Land</p>
              </div>
              <p className="text-[#F4B266] text-[14px] font-medium">20%</p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Comp4;
