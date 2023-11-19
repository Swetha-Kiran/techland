"use client";
import React from "react";
import { GoTriangleUp } from "react-icons/go";
import Comp4 from "./comp4";
import Comp6 from "./Comp6";
import Comp5 from "./comp5";

const Comp1 = ({portfoliodata,porfoliouserdetails}) => {

  console.log(porfoliouserdetails)
  return (
    <section className=" w-[92vw] mx-auto flex flex-col lg:flex-row h-56  lg:space-x-5 justify-around lg:px-10 mt-96 md:mt-96 lg:mt-0 ">
      <section className="lg:w-[25vw] 2xl:w-[22vw] w-[92vw] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[32px] mt-14  ">
        <div className=" px-6 py-3">
          <p className="text-[12px] md:text-[16px] lg:text-[12px] text-[#6E737F] font-normal">NetWorth</p>
          <h3 className="text-[25px] md:text-[35px] lg:text-[25px]  text-[#2B5743] font-semibold">
            {porfoliouserdetails.netWorth} TLT
          </h3>
        </div>
        <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
        <div className="flex   justify-between items-center px-6 lg:py-2 py-4 lg:relative lg:top-3">
          <h3 className="text-[#6E737F] font-medium lg:text-sm md:text-xl  text-xs ">
            1 TLT = 1 INR
          </h3>
          <div className="bg-black text-white font-semibold rounded-3xl  px-4 ">
           1 TLT = 1 CM <sup>2</sup>
          </div>
        </div>
      </section>
      <section className="lg:w-[22vw] 2xl:w-[20vw] w-[92vw] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[32px]  mt-14 ">
      <div className="px-6 py-6">
        <p className="text-[12px] md:text-[16px] lg:text-[12px] text-[#6E737F] font-normal">
          Invested Amount
        </p>
        <h3 className="text-[25px] md:text-[35px] lg:text-[25px] text-[#2B5743] font-semibold">
          {porfoliouserdetails.investedAmount} TLT
        </h3>
        <div className="bg-black  h-[1px] mt-4 w-[100%] opacity-10"></div>
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-[#6E737F] lg:text-base text-base font-normal leading-10 ">
              Total Profit
            </p>
            <h3 className="md:text-3xl text-xl lg:text-2xl font-bold ">
             {porfoliouserdetails.totalProfitAmount} TLT
            </h3>
          </div>
          <div className="bg-green-600 flex items-center text-white rounded-3xl px-2 py-1 ">
            <GoTriangleUp className="text-[20px] mr-2" />
            {porfoliouserdetails.totalProfitPercent} %

          </div>
        </div>
      </div>
    </section>
      {/* <Comp6 portfoliodata={portfoliodata}/> */}
      <Comp4 portfoliodata={portfoliodata}/>
      {/* <Comp5/> */}
    </section>
  );
};

export default Comp1;
