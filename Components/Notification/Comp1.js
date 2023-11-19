import Image from "next/image";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Comp2 from "./Comp2";

const Comp1 = () => {
  return (
    <section>
      <div>
        <h2 className="text-[#2B5743] font-bold text-3xl px-7 py-5">All Notifications</h2>
      </div>
      <div>
        <p className="p-7 font-medium text-xl text-[#2A2B39] ">Today</p>
        <Comp2/>
      </div>
      <Comp2/>
      <Comp2/>
      <Comp2/>
      <div>
        <p className="p-7 font-medium text-xl text-[#2A2B39] ">Yesterday</p>
        <Comp2/>
      </div>
      <Comp2/>
      <Comp2/>
      <Comp2/>
      <div>
        <p className="p-7 font-medium text-xl text-[#2A2B39] ">Previous</p>
        <Comp2/>
      </div>
      <Comp2/>
      <Comp2/>
      <Comp2/>
    </section>
  );
};

export default Comp1;
