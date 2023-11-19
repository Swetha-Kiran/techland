import React from 'react';
import Image from 'next/image';


const Comp_8 = () => {
    return (
        <>
            <section className='bg-re-200 mt-28 mb-24 w-[84vw] mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between pl-6 '>
                <div className='w-[84vw] h-[70vh] lg:w-[50vw] lg:h-[75vh] md:w-[90vw] md:h-[50vh]  md:bg-contain md:bg-no-repeat bg-no-repeat bg-blu-300 bg-cover bg-center -translate-x-5 md:-translate-x-1 lg:-translate-x-5   mb-4 md:mb-4  bg-Comp8_bg_Image lg:bg-cover'></div>

                <section className="h-full w-[84vw] text-center lg:text-start mx-auto -translate-x-5 lg:translate-x-0 bg-yello-200">
                    <h1 className="text-[25px] md:text-[36px] lg:text-[48px] leading-[39px] lg:leading-[52px] font-extrabold">
                        Wondering<br />
                        <span className='text-green-600'>How is that Possible?</span>
                    </h1>

                    <div className="flex flex-col lg:flex-row mt-10">
                        <div className="bg-re-200 w-full lg:w-[25vw] lg:mr-5">
                            <h2 className="text-[20px] lg:text-[24px] leading-6 font-bold text-green-600 mb-5">1. Select</h2>
                            <div className="bg-pin-200 h-[13vh] md:h-[8vh]">
                                <p className="text-[15px]  font-medium leading-[22px] text-[#28272c]">
                                Choose the best investment opportunity available for you
                                </p>
                            </div>
                            <div className="bg-green-600 h-[2px] mt-4 w-[100%]"></div>
                        </div>

                        <div className="bg-re-200 w-full lg:w-[25vw] lg:ml-5 lg:mr-5 mt-5 lg:mt-0">
                            <h2 className="text-[20px] lg:text-[24px] leading-6 font-bold text-green-600 mb-5">2. Invest</h2>
                            <div className="bg-pin-200 h-[13vh] md:h-[8vh]">
                                <p className="text-[15px]  font-medium leading-[22px] text-[#28272c]">
                                Nurture Growth with Secure Crypto Investment

                                </p>
                            </div>
                            <div className="bg-green-600 h-[2px] mt-4 w-[100%]"></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row mt-5">
                        <div className="bg-re-200 w-full lg:w-[25vw] lg:mr-5">
                            <h2 className="text-[20px] lg:text-[24px] leading-6 font-bold text-green-600 mb-5">3. Track</h2>
                            <div className="bg-pin-200 h-[13vh] md:h-[8vh]">
                                <p className="text-[15px]  font-medium leading-[22px] text-[#28272c]">
                                A technology driven dashboard to stay updated on the progress

                                </p>
                            </div>
                            <div className="bg-green-600 h-[2px] mt-4 w-[100%]"></div>
                        </div>

                        <div className="bg-re-200 w-full lg:w-[25vw] lg:ml-5 lg:mr-5 mt-5 lg:mt-0">
                            <h2 className="text-[20px] lg:text-[24px] leading-6 font-bold text-green-600 mb-5">4. Earn</h2>
                            <div className="bg-pin-200 h-[13vh] md:h-[8vh]">
                                <p className="text-[15px]  font-medium leading-[22px] text-[#28272c]">
                                Get best returns up to 16% APR

                                </p>
                            </div>
                            <div className="bg-green-600 h-[2px] mt-4 w-[100%]"></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row mt-5">
                        <div className="bg-re-200 w-full lg:w-[25vw] lg:mr-5">
                            <h2 className="text-[20px] lg:text-[24px] leading-6 font-bold text-green-600 mb-5">5. Exit</h2>
                            <div className="bg-pin-200 h-[13vh] md:h-[8vh]">
                                <p className="text-[15px]  font-medium leading-[22px] text-[#28272c]">
                                Share the Future of Farming and Crypto, Reap Rewards
                                </p>
                            </div>
                            <div className="bg-green-600 h-[2px] mt-4 w-[100%]"></div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Comp_8;
