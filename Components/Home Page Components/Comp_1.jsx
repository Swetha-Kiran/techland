import React from 'react/jsx-runtime';
import Image from 'next/image';

const Comp_One = () => {
    return (
        <>
            <section id='mainContainer' className='bg-[#effbfe w-[84vw] mx-auto pt-6 pb-16 mt-28 rounded-3xl shadow-[0_0_5px_0_rgba(0,0,0,0.3)]'>
                <div className='space-y-16'>
                    <h1 className='text-[28px] leading-[30px] font-semibold text-[#333333] text-center'>Our Working Model</h1>

                    {/* Use flex-col for mobile and tablet devices */}
                    <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-center'>

                        {/* Use w-full to center the div on mobile and tablet devices */}
                        <div className='flex justify-center items-center w-full md:w-[16vw] space-y-4 bg-blu-300 flex-col'>
                            <Image src='/Home Page Images/Comp_1 Images/img_1.png' alt='image' height='35' width='35' />
                            <p className='text-lg font-normal leading-[26px] text-[#202222] text-center'> 100% Digital<br />KYC</p>
                        </div>

                        {/* Repeat the same classes for the other four items */}
                        <div className='flex justify-center items-center w-full md:w-[16vw] space-y-4 bg-blu-300 flex-col'>
                            <Image src='/Home Page Images/Comp_1 Images/img_2.png' alt='image' height='35' width='35' />
                            <p className='text-lg font-normal leading-[26px] text-[#202222] text-center'> Assured Transaction<br />Time </p>
                        </div>
                        
                        <div className='flex justify-center items-center w-full md:w-[16vw] space-y-4 bg-blu-300 flex-col'>
                            <Image src='/Home Page Images/Comp_1 Images/img_3.png' alt='image' height='35' width='35' />
                            <p className='text-lg font-normal leading-[26px] text-[#202222] text-center'> Seamless Investor<br />Education</p>
                        </div>

                        <div className='flex justify-center items-center w-full md:w-[16vw] space-y-4 bg-blu-300 flex-col'>
                            <Image src='/Home Page Images/Comp_1 Images/img_4.png' alt='image' height='35' width='35' />
                            <p className='text-lg font-normal leading-[26px] text-[#202222] text-center'> Library Of Income<br />Securities</p>
                        </div>

                        <div className='flex justify-center items-center w-full md:w-[16vw] space-y-4 bg-blu-300 flex-col'>
                            <Image src='/Home Page Images/Comp_1 Images/img_5.png' alt='image' height='35' width='35' />
                            <p className='text-lg font-normal leading-[26px] text-[#202222] text-center'> Realtime<br />Prices Discovery</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comp_One;
