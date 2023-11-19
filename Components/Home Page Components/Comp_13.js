import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Comp_13 = () => {
  return (
    <>
     <section className='bg-[#2E8B57] mt-28  flex flex-col lg:flex-row-reverse '>
     
     <section className='w-full lg:w-[48vw] 2xl:w-[48vw] -translate-y-10 lg:translate-y-12 2xl:translate-y-16 bg-blu-500 mt-28 justify-center items-center px-4'>
          <div className='space-y-6 text-center md:text-center lg:text-left md:px-0'>
            <p className='text-3xl md:text-4xl font-bold text-white '>Download Our App and <br/> Start Growing Your Capital</p>
            <p className='text-white text-lg md:text-xl font-normal'>Invest in land, purchase organic food products, and track the <br/> live growth of crops all through one application</p>
            
            <div className='flex gap-4 md:gap-6 justify-center md:justify-center lg:justify-start'>
              <a href='https://apps.apple.com/us/app/techland/id6470038004' target='_blank'>
                <Image
                  src='/Home Page Images/Comp_13 Images/download-appstore.webp'
                  height='50'
                  width='120'
                  className=''
                  alt='image'
                />
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.snsilos.techland' target='_blank'>
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
        </section>
        <section className='flex flex-col-reverse bg-blu-400'>
          <div className='relative flex items-center justify-center'>
            {/* Ellipse */}
            <div className='absolute  top-1/2 transform translate-y-8 md:translate-y-4 lg:translate-y-10 mx-auto'>
              <Image src="/Home Page Images/Comp_13 Images/Ellipse 2.png" alt=""
                width={600} // Adjust the width of the ellipse as needed
                height={300} // Adjust the height of the ellipse as needed
              />
            </div>

            {/* Mobile Image */}
            <div className=' lg:-rotate-[11deg] rotate-0  mt-10'>
              <Image src="/Home Page Images/Comp_8 Images/TechLand_Smartphone.png" alt=""
                width={550}
                height={550}
              />
            </div>
          </div>
        </section>
        
      </section>
    </>
  );
};




export default Comp_13;