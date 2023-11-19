import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LeftSection = () =>
{
    return (
        <>
            <section className='bg-yello-300 lg:w-4/5 h-auto flex flex-col items-center justify-center px-4 pt-6 pb-3'>
                <div className='space-y-4'>
                    <h1 className='text-4xl md:text-5xl lg:text-5xl 2xl:text-7xl font-bold text-center text-[#2a2b39]'>Give yourself an <span className='text-[#68BF7B]'>unfair advantage</span></h1>
                    <p className='text-base md:text-lg 2xl:text-lg text-[#6E737F] text-center font-medium'>Unlock your financial future: choose your path to prosperity with our 5 investment packages </p>
                </div>
                {/* <Link href='/'>
                    <button className='px-10 py-4 2xl:px-12 2xl:py-6 rounded-[44px] bg-[#2A2B39] text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold 2xl:hidden'>Invest Now</button>
                </Link> */}
                <div className='w-[80%] sm:w-auto flex sm:flex-row flex-col bg-ed-300 items-center gap-x-6 px-2 py-2 rounded-[24px] shadow-[0_0_5px_0_rgba(0,0,0,0.3)] my-3'>
                    <div className='w-[20vw] sm:w-[10vw] lg:w-[5vw] flex justify-center'>
                    <Image src="/Home Page Images/Hero Section Images/TLT_circular.jpeg" alt="" width={60} height={60} className='rounded-full' />
                    </div>
                    <div className='mb-5 mt-5 sm:mt-0 sm:mb-0'>
                        <p className='text-center font-medium text-base text-[#6E737F]'>Finance</p>
                        <p className='font-semibold text-center text-sm'>1 TLT = 1 INR</p>
                        <p className='font-medium text-center text-sm'>TLT = Techland Token </p>
                    </div>
                    <div className='mb-5  sm:mb-0'>
                        <p className='text-center font-medium text-[#6E737F] text-base'>Measurement</p>
                        <p className='font-semibold text-center text-sm'>1 TLT = 1 cm<sup>2</sup></p>
                        <p className='font-medium text-center text-sm'>APR = Annual Percentage rate </p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default LeftSection;