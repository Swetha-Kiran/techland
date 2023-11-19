import React from 'react'
import Image from 'next/image'

function Comp1() {
  return (
    <div className='w-full h-auto  bg-gradient-to-r  from-[#c0E29A] to-[#82AB53] px-4 lg:px-8 py-8'>
      <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
        <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
          <Image className='' src="/aboutPageImages/main.png" width="500" height="600" alt='image'></Image>
        </div>

        <div className='w-full lg:w-[50%] flex flex-col space-y-6 justify-center items-start py-6'>
          <p className='font-bold text-[#035016] text-3xl lg:text-5xl'>Discover Techland Where <br />
            Innovation Meets Investment</p>
          <p className='font-normal text-[#FFFFFF] text-xl lg:text-3xl'>Welcome to TechLand, the premier destination
            for cutting-edge investment opportunities.
            Uncover a realm of unparalleled possibilities,
            all under one roof.</p>
          <p className='font-normal text-[#FFFFFF] text-xl lg:text-3xl'>
            Backed by a legacy of excellence, we provide
            a spectrum of Investment choices tailored to
            fulfill your financial aspirations and long-term
            objectives.
          </p>
          <p className='font-normal text-[#FFFFFF] text-xl lg:text-3xl'>
            Join us on this journey of personal growth and
            become an integral part of our nurturing
            community. Unveil the future with TechLands
            transformative investment solutions.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Comp1