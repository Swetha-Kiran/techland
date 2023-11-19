import Image from "next/image";
import React from "react";
import { RiPencilFill } from "react-icons/ri";
import Comp2 from "./Comp2";
import Comp5 from "../Portfolio/comp5";
import Comp6 from "./Comp6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiToggleRight } from "react-icons/bi";
const Comp1 = () => {
  
  
  return (
    <section className="flex lg:flex-row flex-col justify-between mt-5 px-4">
      <div className="flex flex-col items-center  lg:w-[30vw] mt-20">
        <h2 className="text-[#2B5743] font-bold text-5xl">Rahul Verma</h2>
        <p className="text-[#000000] font-normal text-base mb-5">
          tahulverma@gmail.com
        </p>
        <p className="text-[#000000] opacity-70 font-bold text-xl">
          @rahulverma
        </p>
        <Image
          src="/profile.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full  object-cover aspect-square bg-re-500"
        />
         <div className="bg-[#1BAD03] rounded-full text-white px-2 py-2 absolute translate-x-20  translate-y-64 "> 
          <RiPencilFill className="text-xl" />
        </div>
        <div className="lg:w-[25vw] w-[92vw] bg-rd-400 mt-10">
          <h2 className='font-medium text-2xl '>Preferences/Settings</h2>
          <div className="shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-4 py-4 rounded-[22px] space-y-5 mt-5">
          <div className="flex items-center justify-between   ">
            <div className="flex space-x-4">
              <div className="rounded-full bg-white  w-[1.5vw] h-[1.5vw]"></div>
              <p className="text-[#6E737F] font-medium text-sm">Notifications</p>
            </div>
            <MdKeyboardArrowRight className="text-[#6E737F] font-medium text-xl" />
          </div>
          <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
          <div className="flex items-center justify-between  ">
            <div className="flex space-x-4">
              <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
              <p className="text-[#6E737F] font-medium text-sm">Dark Mode</p>
            </div>
            <BiToggleRight className="text-[#6E737F] font-medium text-xl" />
          </div>
          <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
          <div className="flex items-center justify-between  ">
            <div className="flex space-x-4">
              <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
              <p className="text-[#6E737F] font-medium text-sm">Settings</p>
            </div>
            <BiToggleRight className="text-[#6E737F] font-medium text-xl" />
          </div>
          <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10 px-0"></div>
          <div className="flex items-center justify-between  ">
            <div className="flex space-x-4">
              <div className="rounded-full bg-white w-[1.5vw] h-[1.5vw]"></div>
              <p className="text-[#6E737F] font-medium text-sm">More Details</p>
            </div>
            
          </div>
          </div>
        </div>
        
      </div>

      <Comp2/>
      <Comp6 />
      
    </section>
  );
};

export default Comp1;