import React from "react";

import styling from "../../Styles/color.module.css";

const Comp2 = () => {
  return (
    <section className="px-4 mt-5">
      <div
        className={`w-[82vw] mx-auto  border-2 ${styling.customborder}  mt-20 rounded-[40px] font-medium shadow-[0_0_5px_0_rgba(0,0,0,0.3)] overflow-x-auto scrollbar-hide`}
      >
        <div
          className={`flex  justify-center items-center py-2  lg:space-x-12 w-[245vw] sm:w-[130vw] lg:w-[86vw] space-x-12 xl:w-[82vw] 2xl:w-[85vw] 2xl:space-x-12 ${styling.button}
text-white rounded-sm font-semibold text-lg `}
        >
          
          <div className="px-2 text-center ">
            <p className={`  text-center lg:w-[12vw] sm:w-[20vw] w-[28vw]  `}>
              Allocated %
            </p>
          </div>
          <div className="px-1 text-center">
            <p className={`  text-center  lg:w-[8vw] w-[28vw] `}>
              Allocated To
            </p>
          </div>
          <div className="px-2  text-center">
            <p className={`  text-center  lg:w-[8vw]  w-[36vw] sm:w-[20vw]`}>
              Allocated TLTs
            </p>
          </div>
          <div className="px-1 text-center">
            <p className={`  text-center  lg:w-[8vw] w-[32vw] sm:w-[14vw] `}>
              Vesting
            </p>
          </div>
        </div>
        <div className="bg-[#68BF7B] h-[1px]  w-[100%]"></div>

        <div className=" px-10 flex  flex-col items-center justify-center">
          <div className=" space-x-12  rounded-lg flex justify-center items-center    py-6   mx-auto  ">
            <div className=" ">
              <p className="lg:w-[8vw] sm:w-[16vw] w-[28vw]">Presale</p>
            </div>

            <div className="px-2 ">
              <p
                className={`text-center py-2 lg:w-[6vw] sm:w-[20vw] w-[20vw] border-2 ${styling.customborder}  rounded-[5px]`}
              >
                100
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center lg:w-[12vw] sm:w-[20vw] w-[40vw] py-2 rounded-[5px]`}
              >
                Private Investors
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[20vw] px-4 w-[80vw] sm:w-[40vw] rounded-[5px] `}
              >
                Experience gradual token allocation and vesting over 6 months, ensuring long-term commitment and sustainability in our crypto project
              </p>
            </div>
            
          </div>
          <div className=" space-x-12  rounded-lg flex justify-center items-center    py-6   mx-auto  ">
            <div className=" ">
              <p className="lg:w-[8vw] sm:w-[16vw] w-[28vw]">Presale</p>
            </div>

            <div className="px-2 ">
              <p
                className={`text-center py-2 lg:w-[6vw] sm:w-[20vw] w-[20vw] border-2 ${styling.customborder}  rounded-[5px]`}
              >
                -
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center lg:w-[12vw] sm:w-[20vw] w-[40vw] py-2 rounded-[5px]`}
              >
                -
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[20vw] px-4 w-[80vw] sm:w-[40vw] rounded-[5px] `}
              >
                Experience gradual token allocation and vesting over 6 months, ensuring long-term commitment and sustainability in our crypto project
              </p>
            </div>
            
          </div>
          <div className=" space-x-12  rounded-lg flex justify-center items-center    py-6   mx-auto  ">
            <div className=" ">
              <p className="lg:w-[8vw] sm:w-[16vw] w-[28vw]">Presale</p>
            </div>

            <div className="px-2 ">
              <p
                className={`text-center py-2 lg:w-[6vw] sm:w-[20vw] w-[20vw] border-2 ${styling.customborder}  rounded-[5px]`}
              >
               -
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center lg:w-[12vw] sm:w-[20vw] w-[40vw] py-2 rounded-[5px]`}
              >
               -
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[20vw] px-4 w-[80vw] sm:w-[40vw] rounded-[5px] `}
              >
                Experience gradual token allocation and vesting over 6 months, ensuring long-term commitment and sustainability in our crypto project
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comp2;
