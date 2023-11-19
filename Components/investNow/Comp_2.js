import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';
import Image from 'next/image';

const Comp_2 = () => {
  return (
    <section className='mx-auto w-[89vw] flex flex-col lg:flex-row justify-around py-8 lg:py-8 items-center mt-5 mb-10 bg-blu-300'>
      {/* Mobile App Info */}
      <div className='w-full lg:w-[40vw]   flex flex-col items-center justify-center mb-8 lg:mb-0 bg-blu-400 rounded-[32px] shadow-[0_0px_5px_0_rgba(0,0,0,0.5)] px-6 py-10  lg:mr-6'>
        <h3 className=' 2xl:text-[50px] lg:text-[40px] md:text-[50px] text-[25px]  font-extrabold font-sans text-center lg:text-left'>Download Our App and </h3>
        <h3 className='md:text-[45px] lg:text-[30px] text-[20px] font-extrabold text-[#68BF7B] font-sans text-center lg:text-left'>Get Upto 16% Annual Return</h3>
        <p className='text-[15px] md:text-[18px] font-normal mt-6 text-[#6E737F] text-center lg:text-left'>Invest in land, purchase organic food products, and track the live growth of  crops all through one application</p>
        <div className='flex gap-4 md:gap-6 justify-center md:justify-center lg:justify-start mt-6'>
              <a href='https://apps.apple.com/us/app/techland/id6470038004' target='_blank'>
                <Image
                  src='/Home Page Images/Comp_13 Images/download-appstore.webp'
                  height='50'
                  width='120'
                  className=''
                  alt='image'
                />
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.snsilos.techland'target='_blank'>
                <Image
                  src='/Home Page Images/Comp_13 Images/download-googleplay.webp'
                  height='50'
                  width='130'
                  className=''
                  alt='image'
                />
              </a>
            </div>
      </div>

      {/* Mobile App Images */}
      <section className='flex flex-col items-center justify-center relative lg:flex-row mt-8 bg-re-400'>
        <div className='mb-6 lg:mb-0 w-[45vh] md:w-[45vh]  lg:w-[60vh] bg-re-400 '>
          <Image src="/investNowImages/Ellipse 14.png" alt="mobile"
            width={600}  // Adjust the width for smaller screens
            height={600} // Adjust the height for smaller screens
          />
        </div>
        <div className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-re-400  lg:w-[35vh] w-[26vh] md:w-[26vh] '>
          <Image src="/investNowImages/Mobile.png" alt="mobile"
            width={500} // Adjust the width for smaller screens
            height={500} // Adjust the height for smaller screens
            className='rotate-[3deg] lg:rotate-0'
          />
        </div>
      </section>
    </section>
  );
};

export default Comp_2;
