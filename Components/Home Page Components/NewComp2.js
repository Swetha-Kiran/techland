import React from 'react'
import Image from "next/image"

function NewComp2() {
    return (
        <div className='h-auto w-full  mt-16 xl:px-[10.5vw] lg:px-[9.7vw] md:px-[1.6vw] sm:px-[2vw] px-[1vw]'>
            <div className=' space-y-[60px] py-6 px-6 sm:px-0'>
                <p className='space-y-4 font-montserrat font-bold text-3xl sm:text-[32px] text-[#2A2B39] px-6 lg:px-0'>About the Project</p>
                <div className='w-full space-y-12 h-auto'>
                    <div className=' w-full h-auto space-y-10 sm:space-y-0 sm:space-x-10 flex flex-col sm:flex-row justify-center items-center'>
                        <div className='w-full sm:w-[50%] space-y-10 flex flex-col justify-center items-center '>
                                 <Image src="/viewMoreImages/Icon1.svg" alt="" width="150" height="150"></Image>
                                 <div className='space-y-4 font-montserrat flex flex-col justify-center items-center'>
                                    <p className='font-bold text-2xl'>Unique Vision</p>
                                    <p className='font-normal text-base text-[#6E737F] text-left sm:text-center'>{`Mini India is a unique project within our Global Tourism initiative. We aim to create distinct districts, each representing a different aspect of India's rich cultural heritage. Each district is designed to provide an immersive cultural experience for guests`}</p>
                                 </div>
                        </div>
                        <div className='w-full sm:w-[50%]  space-y-10 flex flex-col justify-start items-center'>
                                 <Image src="/viewMoreImages/Icon2.svg" alt="" width="150" height="150"></Image>
                                 <div className='space-y-4 font-montserrat flex flex-col justify-center items-center'>
                                    <p className='font-bold text-2xl'>Development Plan</p>
                                    <p className='font-normal text-base text-[#6E737F] text-left sm:text-center'>{`We aim to secure $10 million in funding to establish a Mini India comprising (28 States + 8 Union Territory), each with meticulously crafted development plans. As investors, we welcome your ideas and suggestions at all times`}</p>
                                 </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default NewComp2