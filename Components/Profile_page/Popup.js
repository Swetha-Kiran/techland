import Image from "next/image";
import React from "react";
import { RiPencilFill } from "react-icons/ri";
import Comp2 from "./Comp2";
import Comp5 from "../Portfolio/comp5";
import Comp6 from "./Comp6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiToggleRight } from "react-icons/bi";
import { AiFillCheckSquare, AiOutlineCheckSquare } from "react-icons/ai";
const Modal = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-around mt-5 lg:px-10 ">
      <div className="flex flex-col items-center  lg:w-[40vw] space-y-5 px-10">
        <h2 className="text-[#2B5743] font-bold text-4xl">Rahul Verma</h2>

        <p className="text-[#000000] opacity-70 font-bold text-xl">
          @rahulverma
        </p>
        <Image
          src="/profilepage.png"
          alt=""
          width={200}
          height={200}
          className="rounded-full  object-cover aspect-square bg-re-500"
        />
        <p className="bg-[#CA2D2D] text-white rounded-[22px] px-2 py-2">
          Upload New Photo
        </p>
        <div className="lg:w-[22vw] bg-[#D9D9D9] px-4 py-4 rounded-[22px] text-center ">
          <p className=" font-normal text-base ">
            Upload a new avatar. Larger image will be resized automatically.
            <br />{" "}
            <span className="leading-[40px]">
              Max upload size is <span className="font-bold">1</span>mb.
            </span>{" "}
          </p>
        </div>
        <p>
          Member since: <span className="font-bold">9th September 2023</span>
        </p>
      </div>
      <div className="lg:w-[50vw] w-[92vw] mx-auto  bg-slat-400 py-4 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[32px] mt-10 lg:mt-0">
        <h2 className="font-medium text-2xl lg:px-8 px-4">Edit Profile</h2>
        <div className="mt-10 flex flex-col justify-center lg:w-[45vw]  px-4 lg:px-0 mx-auto bg-netral-400 space-y-3">
          <div className="flex lg:flex-row flex-col justify-between lg:w-[45vw]">
            <div>
              <p className="font-medium text-base text-[#1C1C1C]">First Name</p>
              <input
                className="py-2 px-2 rounded-[5px] lg:w-[20vw] w-[85vw]"
                placeholder="Rahul"
              />
            </div>
            <div>
              <p className="font-medium text-base text-[#1C1C1C]">Last Name</p>
              <input
                className="py-2 px-2 rounded-[5px] lg:w-[20vw] w-[85vw]"
                placeholder="Verma"
              />
            </div>
          </div>
          <div className="relative">
            <p className="font-medium text-base text-[#1C1C1C]">Email</p>
            <input
              className="py-2 px-2 rounded-[5px] lg:w-[45vw] w-[85vw]"
              placeholder="rahulverma.business@gmail.com"
            />
            <div className="absolute top-9 md:right-10 right-1">
              <AiFillCheckSquare className="text-xl bg-white text-[#23B000]" />
            </div>
          </div>

          <div>
            <p className="font-medium text-base text-[#1C1C1C]">Address</p>
            <input
              className="py-2 px-2 rounded-[5px] lg:w-[45vw] w-[85vw]"
              placeholder="33062 Zboncak isle"
            />
          </div>
          <div>
            <p className="font-medium text-base text-[#1C1C1C]">
              Contact Number
            </p>
            <input
              className="py-2 px-2 rounded-[5px] lg:w-[45vw] w-[85vw]"
              placeholder="58077.79"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between lg:w-[45vw] w-[85vw]">
            <div>
              <p className="font-medium text-base text-[#1C1C1C]">City</p>
              <select className="py-2 px-2 rounded-[5px] lg:w-[20vw] w-[85vw]">
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Rajasthan</option>
              </select>
            </div>
            <div>
              <p className="font-medium text-base text-[#1C1C1C]">State</p>
              <select className="py-2 px-2 rounded-[5px] lg:w-[20vw] w-[85vw]">
                <option>Uttar Pradesh</option>
                <option>Delhi</option>
                <option>Rajasthan</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <p className="font-medium text-base text-[#1C1C1C]">Password</p>
            <input
              className="py-2 px-2 rounded-[5px] lg:w-[45vw] w-[85vw]"
              placeholder="sbdfbnd65sfdvb s"
            />
            <div className="absolute top-9 md:right-10 right-1 ">
              <AiFillCheckSquare className="text-xl bg-white text-[#23B000]" />
            </div>
          </div>
          <div className="flex justify-between lg:w-[20vw] md:w-[30vw] w-[65vw]">
            <button className="px-5 py-1 font-semibold text-xl bg-white rounded-[5px] border-solid border-2 border-[#FF7008] text-[#FF7008]">
              Cancel
            </button>
            <button className="px-5 py-1 font-semibold text-xl bg-[#FF7008] rounded-[5px]  text-[white]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
