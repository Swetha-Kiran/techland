import React from 'react'
import { RiPencilFill } from "react-icons/ri";
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
const Comp2 = () => {
  return (
    <section className='lg:w-[40vw] mt-10 lg:mt-0 mx-auto'>
        <div>
            <h2 className='font-medium text-2xl'>Personal Details</h2>
        </div>
        <div className='flex lg:flex-row flex-col lg:space-x-5 mt-5'>
        <div className='flex  justify-between lg:w-[20vw] w-[92vw] items-center shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-3 py-2 rounded-[22px]'>
            <p className='text-[#6E737F] font-medium text-sm'>Date of Birth</p>
            <p className='text-[#6E737F] font-normal text-xs'>27/05/1990</p>
            <RiPencilFill className='text-[#D4D3D7]'/>
        </div>
        <div className='flex justify-between lg:w-[19vw] w-[92vw] mt-5 lg:mt-0 items-center shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-3 py-2 rounded-[22px]'>
            <p  className='text-[#6E737F] font-medium text-sm'>Nationality</p>
            <p className='text-[#6E737F] font-normal text-xs'>Hindu</p>
            <RiPencilFill className='text-[#D4D3D7]'/>
        </div>
        </div>
        <div className='flex justify-between lg:w-[20vw] w-[92vw] items-center shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-3 py-2 rounded-[22px] mt-5'>
            <p  className='text-[#6E737F] font-medium text-sm'>Phone Number</p>
            <p className='text-[#6E737F] font-normal text-xs'>9012314869</p>
            <RiPencilFill className='text-[#D4D3D7]'/>
        </div>
        <div className='shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-3 py-2 w-[92vw] lg:w-[40vw] rounded-[22px] mt-5'>
            <p className='mb-2 text-[#6E737F] font-medium text-sm'>Address</p>
            <p className='text-[#6E737F] font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <Comp3/>
        <Comp4/>
        <Comp5/>
    </section>
  )
}

export default Comp2