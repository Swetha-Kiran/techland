import React from 'react';
import Image from 'next/image';

const Comp_15 = () =>
{
    return (
        <>
            <section className="h-fit w-full py-12 px-[8vw]">
                <h5 className='text-3xl lg:text-4xl leading-[42px] font-bold text-center w-[80vw] mx-auto text-[#333333]'>A Transparent Ownership Structure</h5>

                <section className='flex  flex-col md:flex-row justify-between mt-16 bg-yello-300'>
                    <div className='bg-gree-300 md:w-1/2'>
                        <Image src='/Home Page Images/Comp_15 Images/comp15.png' width='450' height='600' alt='image' />
                    </div>

                    <div className='bg-gre-300 w-full md:w-[35vw] space-y-6 py-5 flex flex-col justify-center'>
                        <p className='text-base md:text-xl lg:text-2xl  font-normal  text-[#666666] text-left'>We openly disclose the identities and roles of all key stakeholders, ensuring complete visibility into who drives our operations and decisions. This commitment to clarity fosters trust and assures our investors of our dedication to ethical and responsible management</p>
                        {/* <p className='lg:text-base text-sm font-normal text-[#666666] text-left'>We divide each SPV into one million shares and allocate your shares proportionate to your investment. This means that you own the SPV, which in turn owns the investment property. It’s all regulated and transparent!</p> */}
                    </div>
                </section>

            </section>
        </>
    )
};
export default Comp_15;