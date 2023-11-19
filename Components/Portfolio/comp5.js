import Image from "next/image";
import React from "react";

const Comp5 = () => {
  return (
    <>
      <section className=" w-[92vw] lg:w-[22vw] bg-pik-300  ">
        <h2 className="text-black text-[22px] font-semibold mb-5 ">
          WatchList
        </h2>
        {/* <div className='flex lg:w-[25vw] w-[92vw] justify-between items-center bg-gree-400 mx-auto rounded-[32px] bg-blu-500 px-6 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] '>
            <Image src="/portfolioimages/Vector.png" alt=""
            width={20}
            height={20}
            />
            <div>
                <h3 className='text-normal text-[#D4D3D7]'>start</h3>
                <p className='font-semibold text-[#428358]'>24/10/2022</p>
            </div>
            <div>
                <h3 className='text-normal text-[#D4D3D7]'>End</h3>
                <p className='font-semibold text-[#428358]'>24/10/2022</p>
            </div>
        </div> */}
        <section className="bg-blu-200 lg:w-[20vw]   rounded-[20px] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-1 py-2">
          <div className="flex h-[10vh] lg:w-[20vw] justify-between items-center px-6 leading-8">
            <div>
              <h3 className="text-[#2A2B39] text-[16px] font-semibold">Mini Land</h3>
              <p className="text-[#BEBEBF] text-[12px] font-medium">22/02/2023</p>
            </div>
            <div>
              <h3 className="text-[#BEBEBF] font-medium">
                Quantity <span className="text-[#6E737F] font-medium">x35</span>
              </h3>
              <p className="text-[#6E737F] font-medium">TLT 9999</p>
            </div>
          </div>
          <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10"></div>
          <div className="flex h-[10vh] lg:w-[20vw] justify-between items-center px-6 leading-8">
            <div>
              <h3 className="text-[#2A2B39] text-[16px] font-semibold">Mini Land</h3>
              <p className="text-[#BEBEBF] text-[12px] font-medium">22/02/2023</p>
            </div>
            <div>
              <h3 className="text-[#BEBEBF] font-medium">
                Quantity <span className="text-[#6E737F] font-medium">x35</span>
              </h3>
              <p className="text-[#6E737F] font-medium">TLT 9999</p>
            </div>
          </div>
          <div className="bg-black h-[1px] mt-4 w-[100%] opacity-10"></div>
          <div className="flex h-[11vh] lg:w-[20vw] justify-between items-center px-6 leading-8">
            <div>
              <h3 className="text-[#2A2B39] text-[16px] font-semibold">Mini Land</h3>
              <p className="text-[#BEBEBF] text-[12px] font-medium">22/02/2023</p>
            </div>
            <div>
              <h3 className="text-[#BEBEBF] font-medium">
                Quantity <span className="text-[#6E737F] font-medium">x35</span>
              </h3>
              <p className="text-[#6E737F] font-medium">TLT 9999</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Comp5;
