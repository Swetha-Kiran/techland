import React from "react";
import { BiLockOpen } from "react-icons/bi";
import { FaLockOpen, FaLock } from "react-icons/fa";
import Comp2 from "./Comp2";
import styling from "../../Styles/color.module.css";

const Comp1 = () => {
  return (
    <section className="px-4 mt-5">
      <div
        className={`w-[82vw] mx-auto  border-2 ${styling.customborder}  mt-20 rounded-[40px] font-medium shadow-[0_0_5px_0_rgba(0,0,0,0.3)] overflow-x-auto scrollbar-hide`}
      >
        <div
          className={`flex  justify-center items-center py-2  lg:space-x-12 w-[280vw] sm:w-[165vw] lg:w-[88vw] space-x-12 xl:w-[84vw] 2xl:w-[85vw] 2xl:space-x-12 ${styling.button}
text-white rounded-sm font-semibold text-lg `}
        >
          <div className=" ">
            <p className="lg:w-[8vw] sm:w-[16vw]  w-[28vw]"></p>
          </div>
          <div className="px-2 ">
            <p></p>
          </div>
          <div className="px-2 text-center">
            <p className={`text-center lg:w-[6vw] sm:w-[20vw] w-[20vw] `}>Stage</p>
          </div>
          <div className="px-2 text-center ">
            <p
              className={`  text-center lg:w-[12vw] sm:w-[20vw] w-[28vw]  `}
            >
              Quantity
            </p>
          </div>
          <div className="px-1 text-center">
            <p
              className={`  text-center  lg:w-[8vw] w-[20vw] `}
            >
              Price
            </p>
          </div>
          <div className="px-2  text-center">
            <p
              className={`  text-center  lg:w-[8vw] w-[28vw] sm:w-[14vw]`}
            >
              Fund Raised
            </p>
          </div>
          <div className="px-1 text-center">
            <p
              className={`  text-center  lg:w-[8vw] w-[32vw] sm:w-[14vw] `}
            >
              Total Target
            </p>
          </div>
        </div>
        <div className="bg-[#68BF7B] h-[1px]  w-[100%]"></div>

        <div className=" px-10 flex  flex-col items-center justify-center">
          <div className=" space-x-12  rounded-lg flex justify-center items-center    py-6   mx-auto  ">
            <div className=" ">
              <p className="lg:w-[8vw] sm:w-[16vw] w-[28vw]"></p>
            </div>
            <div className="px-2 ">
              <FaLockOpen className="text-xl" />
            </div>
            <div className="px-2 ">
              <p
                className={`text-center py-2 lg:w-[6vw] sm:w-[20vw] w-[20vw] border-2 ${styling.customborder}  rounded-[5px]`}
              >
                Stage 1
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center lg:w-[12vw] sm:w-[20vw] w-[28vw] py-2 rounded-[5px]`}
              >
                50 Lakh
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] w-[20vw] rounded-[5px]`}
              >
                1.0 INR
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] sm:w-[14vw] w-[28vw] rounded-[5px]`}
              >
                -
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] sm:w-[14vw] w-[32vw] rounded-[5px]`}
              >
                50 Lakh
              </p>
            </div>
          </div>
          <div className=" space-x-12  rounded-lg flex justify-center items-center    py-6   mx-auto  ">
            <div className="  bg-rd-300">
              <p className="lg:w-[8vw] sm:w-[16vw] w-[28vw]">Coming Soon</p>
            </div>
            <div className="px-2 ">
              <FaLock className="text-xl" />
            </div>
            <div className="px-2 ">
              <p
                className={`text-center py-2 lg:w-[6vw] w-[20vw] border-2 ${styling.customborder}  rounded-[5px]`}
              >
                Stage 2
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center lg:w-[12vw] sm:w-[20vw] w-[28vw] py-2 rounded-[5px]`}
              >
                80 Lakh
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] w-[20vw] rounded-[5px]`}
              >
                1.25 INR
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] sm:w-[14vw] w-[28vw] rounded-[5px]`}
              >
                -
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] sm:w-[14vw] w-[32vw] rounded-[5px]`}
              >
                1.0 Crore
              </p>
            </div>
          </div>
          <div className=" space-x-12  rounded-lg flex justify-center items-center    py-6   mx-auto  ">
            <div className="  bg-rd-300">
              <p className="lg:w-[8vw] sm:w-[16vw] w-[28vw]">Coming Soon</p>
            </div>
            <div className="px-2 ">
              <FaLock className="text-xl" />
            </div>
            <div className="px-2 ">
              <p
                className={`text-center py-2 lg:w-[6vw] w-[20vw] border-2 ${styling.customborder}  rounded-[5px]`}
              >
                Stage 3
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center lg:w-[12vw] sm:w-[20vw] w-[28vw] py-2 rounded-[5px]`}
              >
                1.25 Crore
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] w-[20vw] rounded-[5px]`}
              >
                2.0 INR
              </p>
            </div>
            <div className="px-2 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] sm:w-[14vw] w-[28vw] rounded-[5px]`}
              >
                -
              </p>
            </div>
            <div className="px-1 ">
              <p
                className={`border-2 ${styling.customborder}  text-center py-2 lg:w-[8vw] sm:w-[14vw] w-[32vw] rounded-[5px]`}
              >
                2.5 Crore
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Comp1;
