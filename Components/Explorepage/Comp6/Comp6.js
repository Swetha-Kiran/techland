import React from "react";
import { GoX } from "react-icons/go";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import Comp6a from "./Comp6a";
import Comp6b from "./Comp6b";
const Comp6 = ({closeModal,buttonName}) => {
  return (
    <section className="">
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-4">
        <h2 className="text-2xl text-[#2B5743] font-medium">Deposit Money</h2>
        <GoX className="text-5xl font-bold" onClick={closeModal}/>
      </div>

      <div className="flex lg:flex-row flex-col lg:w-[60vw] w-[92vw] mx-auto justify-between mt-10">
      <div className="flex items-center justify-between lg:w-[20vw] px-4 py-6 bg-rd-400 rounded-[32px] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] ">
        <div className="space-y-2">
            <p  className="text-[#2A2B39] font-medium text-xs">INR</p>
            <p className="text-[#428358] font-semibold text-base">9,99,999,999</p>
            <p className="text-[#D4D3D7] font-normal text-[10px]">Minimum 100000 INR</p>
        </div>
        <div><BsFillArrowRightSquareFill className="text-2xl text-[#BEBEBF] bg-white "/></div>
        <div className="space-y-2">
            <p className="text-[#2A2B39] font-medium text-right text-xs">TLT</p>
            <p className="text-[#6E737F] font-semibold text-right text-base">9,99,999</p>
            <p className="text-[#D4D3D7] font-normal text-[10px]">Available 999999 TLT</p>
        </div>
      </div>
      <p className="text-[#BEBEBF] text-xs font-normal text-center mt-5 lg:mt-0">1 TLT = 1.2 INR</p>
      <div className="lg:translate-y-3 lg:w-[14vw] sm:w-[30vw] w-[60vw] mx-auto lg:mx-0 mt-5">
        <h2 className="font-medium text-xs text-[#6E737F]  mb-3">Select Account</h2>
        <div className="flex items-center justify-between lg:w-[14vw] sm:w-[30vw] w-[60vw] mx-auto shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[20px] px-4 py-2 ">
        <FcGoogle className="text-3xl"/>
        <div>
          <p className="text-[#2A2B39] font-semibold text-base">Google Bank</p>
          <p className="text-[#D4D3D7] font-normal text-xs">xxxx xxxx xxxx 1234</p>
        </div>
        <MdKeyboardArrowRight className='text-[#6E737F] font-medium text-xl'/>
        </div>
      </div>

      
      </div>
      <div className="text-center mt-5">
        <button className="bg-[#68BF7B] text-white font-semibold text-xl px-24 py-5 rounded-[22px]">{buttonName}</button>
      </div>

      <div className="flex justify-between px-4 mt-5">
        <h2 className=" text-[#2A2B39] text-2xl font-medium">Transactions</h2>
        <p className=" text-[#428358] text-sm font-medium">view All</p>
      </div>
      <div className="shadow-[0_0_5px_0_rgba(0,0,0,0.2)] lg:w-[60vw] w-[92vw] h-[30vh] scrollbar-hide mx-auto rounded-[20px] mt-10 px-4 py-4 overflow-y-auto">
        <Comp6a/>
        <div className="bg-black h-[1px] mt-2 mb-2 w-[100%] opacity-10"></div>
        <Comp6b/>
        <div className="bg-black h-[1px] mt-2 mb-2 w-[100%] opacity-10"></div>
        <Comp6a/>
        <div className="bg-black h-[1px] mt-2 mb-2 w-[100%] opacity-10"></div>
        <Comp6b/>
        <div className="bg-black h-[1px] mt-2 mb-2 w-[100%] opacity-10"></div>
        <Comp6a/>
      </div>
      
    </section>
  );
};

export default Comp6;
