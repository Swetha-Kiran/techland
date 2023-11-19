import React from "react";
import { GoTriangleUp } from "react-icons/go";

const Comp6 = ({portfoliodata}) => {
  // console.log(portfoliodata)
  return (
    <section className="lg:w-[22vw] 2xl:w-[20vw] w-[92vw] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[32px]  mt-14 ">
      <div className="px-6 py-6">
        <p className="text-[12px] md:text-[16px] lg:text-[12px] text-[#6E737F] font-normal">
          Invested Amount
        </p>
        <h3 className="text-[25px] md:text-[35px] lg:text-[25px] text-[#2B5743] font-semibold">
          TLT 
        </h3>
        <div className="bg-black  h-[1px] mt-4 w-[100%] opacity-10"></div>
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="text-[#6E737F] lg:text-base text-base font-normal leading-10 ">
              Monthlys Profit
            </p>
            <h3 className="md:text-3xl text-xl lg:text-2xl font-bold ">
              TLT 
            </h3>
          </div>
          <div className="bg-green-600 flex items-center text-white rounded-3xl px-2 py-1 relative top-3">
            <GoTriangleUp className="text-[20px] mr-2" />
            %
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comp6;
