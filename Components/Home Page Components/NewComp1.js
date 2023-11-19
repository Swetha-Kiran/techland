import React from 'react'
import Image from 'next/image';

function NewComp1() {
    return (
        <div className='w-full h-auto lg:h-[calc(100vh-82px)] 2xl:h-[calc(80vh-82px)]  mt-16 xl:px-[10.5vw] lg:px-[9.7vw] md:px-[1.6vw] sm:px-[2vw] px-[1vw]'>
            <div className='w-full px-6 lg:px-24 lg:relative py-8 space-y-[60px]  flex flex-col  items-center '>
                <div className='w-full  space-y-6 text-left lg:text-center'>
                    <p className=' font-bold text-xl md:text-3xl lg:text-4xl text-[#2A2B39]'>Become a Techland Investor</p>
                    <p className=' font-normal text-base text-[#6E737F]'>Embark on a unique investment journey with Mini India. Transform a piece of land into a vibrant district, showcasing the rich cultural heritage of India</p>
                </div>

                <div className='w-full text-[#6E737F]  static space-y-16 flex flex-col items-center justify-center lg:absolute top-[36vh] '>
                    <div className='static lg:absolute -left-[7vw] -top-[15vh] w-auto sm:w-[360px] lg:space-y-2 lg:flex flex-col items-center'>
                        <Image src='/Home Page Images/newCompImages/mini-india.png' height={80} width={80} alt='miniindia' className='hidden lg:block' />

                        <div className='bg-[#FFFFFF] border rounded-3xl shadow-custom  font-normal text-base text-center p-6'>
                            Embark on a unique investment journey with Mini India
                        </div>
                    </div>
                    <div className='static lg:absolute left-[25vw] -top-[9vh] w-auto sm:w-[360px] lg:space-y-2 lg:flex flex-col items-center'>
                        <Image src='/Home Page Images/newCompImages/Section1.svg' height={80} width={80} alt='globalTourism' className='hidden lg:block' />

                        <div className='bg-[#FFFFFF] border rounded-3xl shadow-custom  font-normal text-base text-center p-6'>
                        Consider investing in our Global Tourism Initiative to create 36 Home Vacation (28 States + 8 Union Territory)
                        </div>
                    </div>

                    <div className='static lg:absolute left-[60vw] -top-[24vh] w-auto sm:w-[360px] lg:space-y-2 lg:flex flex-col items-center'>
                        <Image src='/Home Page Images/newCompImages/investment.png' height={80} width={80} alt='investment' className='hidden lg:block' />

                        <div className='bg-[#FFFFFF] border rounded-3xl shadow-custom  font-normal text-base text-center p-6'>
                        Gain numerous advantages from our Alliance Partners by investing in TechLand
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewComp1