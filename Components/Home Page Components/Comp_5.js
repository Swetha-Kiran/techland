
import React from 'react';
import Image from 'next/image';

const Comp_Five = () => {
  return (
    <>
       <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-orang-400 w-[84vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] mx-auto flex flex-col items-center justify-between space-y-6">
          <h1 className="text-[32px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-semibold leading-[32px] sm:leading-[40px] text-[#141f4d] text-left lg:text-center">
            Direct to investors
          </h1>
          <p className="text-base sm:text-lg font-normal leading-[22px] sm:leading-[24px] text-[#515151] text-left lg:text-center">
            A unique opportunity to list your qualified properties to our curated internal network of sophisticated and active institutional-level SFR investors
          </p>
        </div>

        <div className="bg-re-400 mt-10 space-y-6 px-4 sm:px-8 md:px-12 lg:px-16">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-9">
            {/* First Feature */}
            <div className="w-full h-[35vh] bg-[#fcfdff] px-6 space-y-5 flex flex-col justify-center rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <Image src="/Home Page Images/Comp_5 Images/img_1.png" alt="image" width="65" height="65" />
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[26px] text-[#2a364f]">Access</h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] text-[#2a364f]">Buyers, or their representatives, can directly submit and settle deals with you</p>
            </div>

            {/* Second Feature */}
            <div className="w-full h-[35vh] bg-[#fcfdff] px-6 space-y-5 flex flex-col justify-center rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <Image src="/Home Page Images/Comp_5 Images/offers.svg" alt="image" width="65" height="65" />
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[26px] text-[#2a364f]">Initial Offerings</h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] text-[#2a364f]"> Early investors have the opportunity to access discounted prices and participate in our initial offering</p>
            </div>

            {/* Third Feature */}
            <div className="w-full h-[35vh] bg-[#fcfdff] px-6 space-y-5 flex flex-col justify-center rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <Image src="/Home Page Images/Comp_5 Images/img_3.png" alt="image" width="65" height="65" />
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[26px] text-[#2a364f]">Real Time Updates</h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] text-[#2a364f]">Provide real time updates regarding the investment or the property listed by sellers</p>
            </div>

            {/* Fourth Feature */}
            <div className="w-full h-[35vh] bg-[#fcfdff] px-6 space-y-5 flex flex-col justify-center rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <Image src="/Home Page Images/Comp_5 Images/img_4.png" alt="image" width="65" height="65" />
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[26px] text-[#2a364f]">Efficient and Secure Transactions</h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] text-[#2a364f]">Handling the necessary documentation, fund transfers, and legal procedures associated with Digital Farming investments</p>
            </div>

            {/* Fifth Feature */}
            <div className="w-full h-[35vh] bg-[#fcfdff] px-6 space-y-5 flex flex-col justify-center rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <Image src="/Home Page Images/Comp_5 Images/img_5.png" alt="image" width="65" height="65" />
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[26px] text-[#2a364f]">Ownership and Control</h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] text-[#2a364f]">Direct ownership and control on your investment</p>
            </div>

            {/* Sixth Feature */}
            <div className="w-full h-[35vh] bg-[#fcfdff] px-6 space-y-5 flex flex-col justify-center rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <Image src="/Home Page Images/Comp_5 Images/img_6.png" alt="image" width="65" height="65" />
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[26px] text-[#2a364f]">Streamlined Communication</h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] text-[#2a364f]">Customers can communicate directly with investors</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Comp_Five;
