import React from 'react';
import Image from 'next/image';

const Comp_11 = () =>
{
    return(
        <>
           <section id='ourPartners' className="py-16 w-full px-[8vw] space-y-16">
                <div className="space-y-2 text-center">
                <h6 className='text-[14px] font-bold leading-[17px] text-[#333333]'>TechLand Partners</h6>
                <h2 className='text-3xl lg:text-4xl leading-[43px] font-bold text-[#333333] text-left md:text-center'>Strategic Alliance Partners</h2>
                <p className='text-base leading-[19px] font-normal text-[#595959] tracking-wide text-left md:text-center'>TechLand partners with strong leaders to create transformative change.<br />Learn more about our strategic partnerships by clicking on the logos below</p>
                </div>

                <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 max-w-[84vw]'>
                        <div className='inline-flex items-center justify-center'>
                            <a href='/' ><Image src='/Home Page Images/Comp_11 Images/LARF.png' width='150' height='150' alt='image' className='w-[150px] h-[150px]' /> </a>
                        </div>
                        <div className='inline-flex items-center justify-center'>
                            <a href='/' ><Image src='/Home Page Images/Comp_11 Images/organic-chef.png' width='200' height='200' alt='image' className='w-[200px] h-[200px]' /> </a>
                        </div>
                        <div className='inline-flex items-center justify-center'>
                            <a href='/' ><Image src='/Home Page Images/Comp_11 Images/sn-group.png' width='200' height='200' alt='image' className='w-[200px] h-[200px]' /> </a>
                        </div>
                        <div className='inline-flex items-center justify-center'>
                            <a href='/' ><Image src='/Home Page Images/Comp_11 Images/sn-nature.png' width='150' height='150' alt='image' className='w-[150px] h-[150px]'/> </a>
                        </div>
                        <div className='inline-flex items-center justify-center'>
                            <a href='/' ><Image src='/Home Page Images/Comp_11 Images/sn-silos.png' width='150' height='150' alt='image' className='w-[150px] h-[150px]'/> </a>
                        </div>
                        <div className='inline-flex items-center justify-center'>
                            <a href='/' ><Image src='/Home Page Images/Comp_11 Images/soilsense.png' width='200' height='200' alt='image' className='w-[200px] h-[200px]' /> </a>
                        </div>
                </section>
            </section>
        </>
    )
};
export default Comp_11;