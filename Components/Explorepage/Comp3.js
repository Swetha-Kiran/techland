import Image from "next/image";
import React, { useState, useEffect } from "react";
import Invest from "./Comp4";
import Link from "next/link";

const Comp3 = ({ packages }) => {
  const [selectedLand, setSelectedLand] = useState("Micro Land");
  const selectedItem = packages.find((item) => item.title === selectedLand);

  return (
    <section className="mb-10 lg:w-[60vw] w-[92vw] lg:ml-10 bg-re-400 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] h-min rounded-[24px] mt-16 lg:mt-0">
      <div className="lg:w-[52vw] flex h-[5vh] flex-row items-center justify-center px-6 border-solid border-2 border-black-500 rounded-[24px] ">
        <h2 className="text-[14px] text-[#2B5743] font-medium">
          Investment Packages
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-around">
        <div className="overflow-x-auto overflow-y-auto">
          <div className="flex flex-row lg:flex-col lg:w-[15vw] w-[400vw] sm:w-[200vw] overflow-x-auto overflow-y-auto lg:h-96  mt-10 space-x-5 lg:space-x-0 scrollbar-hide bg-slae-500">
            {packages.map((item) => (
              <div
                key={item._id}
                className={`lg:w-[15vw] w-[200vw] sm:w-[100vw] bg-rd-400 mb-6  ${
                  item.title === selectedLand
                    ? "bg-[#c9e5d2]" // Selected item has green background
                    : "bg-white border-solid border-2 border-black" // Others have white background
                } rounded-[22px]`}
                onClick={() => setSelectedLand(item.title)}
              >
                <div className="py-2 px-2 space-x-5 flex items-center">
                  <Image
                    src="/Home Page Images/NavBar Images/TLT_logo.jpeg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-[12px] "
                  />
                  <h2 className="text-[16px] font-medium">{item.title}</h2>
                </div>
                <div className="py-2 px-2">
                  <h2 className="text-[22px] font-semibold text-[#428358]">
                    {
                      item.invest_types.find(
                        (type) => type.title === "long Term"
                      ).interestRate
                    }
                    % <span className="text-black">Returns</span>
                  </h2>
                  <p className="text-[#6E737F]">
                    Property that makes your heart skip a beat!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Invest selectedItem={selectedItem} />
      </div>
      
    </section>
  );
};

export default Comp3;
