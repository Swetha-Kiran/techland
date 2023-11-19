import Image from "next/image";
import React from "react";
import { RiPencilFill } from "react-icons/ri";
const Comp4 = () => {
  return (
    <section className="lg:w-[30vw] mt-10  ">
      <div className="flex justify-between">
        <h2 className="font-medium text-2xl">EKYC</h2>
      </div>
      <div className="shadow-[0_0_5px_0_rgba(0,0,0,0.2)]  px-4 py-3 space-y-2 rounded-[22px] mt-5">
        <div className="flex justify-between lg:w-[22vw] w-[70vw] ">
          <p className="text-[#6E737F] font-medium text-sm">Aadhar Number</p>
          <p className="text-[#6E737F] font-medium text-sm">*8850</p>
        </div>
        <div className="flex justify-between lg:w-[22vw] w-[70vw] ">
          <p className="text-[#6E737F] font-medium text-sm">PAN Number</p>
          <p className="text-[#6E737F] font-medium text-sm">*501A</p>
        </div>
        <div className="flex justify-between lg:w-[22vw] w-[70vw]">
          <p className="text-[#6E737F] font-medium text-sm">Verified</p>
          <Image src="/Vector.png" alt="" width={20} height={20} />
        </div>
      </div>
    </section>
  );
};

export default Comp4;
