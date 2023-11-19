import React from 'react';

const Comp_Three = () =>
{
    return (
        <>
            <section className='bg-re-300 w-[84vw] md:h-fit flex flex-col lg:flex-row md:justify-between space-y-10 md:space-y-0 py-6 mt-28 mx-auto'>

                <div className="h-[35vh] sm:h-[70vh]  w-full md:w-[84vw] md:h-[50vh] lg:w-[40vw] bg-blu-300 bg-cover bg-center bg-Comp3_bg_Image rounded-2xl"></div>
                <div className='bg-Comp3_bg1_Image  lg:w-[20vw] md:w-[40vw] md:h-[40vh] w-[50vw] h-[40vh] lg:h-[60vh]  translate-y-6 lg:translate-y-16 2xl:translate-x-[0.5vw] lg:-translate-x-0 sm:translate-y-36  bg-contain bg-no-repeat absolute bg-ed-400'>

                </div>

                <div className=' bg-blu-200 w-full md:w-[45vw] lg:w-[35vw] h-fit pl-0 lg:pl-6 mx-auto'>
                    <h1 className='text-[30px] font-semibold leading-[40px] lg:leading-[45px] text-green-600'>Start Investing in just<br />3 minutes</h1>
                    <p className="text-base font-normal leading-6 lg:leading-8 mt-4">
                        Gain entry to carefully selected opportunities that have been specifically designed for individual investors
                    </p>

                    <div className='space-y-4 lg:space-y-6 mt-4'>
                        <div>
                            <h4 className='text-[30px] font-semibold leading-[48px]'>01</h4>
                            <p className="text-base font-normal leading-6 lg:leading-8">Sign up to create your account</p>
                        </div>

                        <div>
                            <h4 className='text-[30px] font-semibold leading-[48px]'>02</h4>
                            <p className="text-base font-normal leading-6 lg:leading-8">Enter Id proofs and get your KYC done</p>
                        </div>

                        <div>
                            <h4 className='text-[30px] font-semibold leading-[48px]'>03</h4>
                            <p className="text-base font-normal leading-6 lg:leading-8">Start exploring exclusive opportunities, TLT token and invest</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Comp_Three;