import React from 'react'
import { RiPencilFill } from "react-icons/ri";
const Comp3 = () => {
  return (
    <section className='lg:w-[30vw] mt-10'>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-2xl'>Banking Information</h2>
            <RiPencilFill className='text-[#6E737F] '/>
        </div>
        <div className='shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-3 py-4 space-y-4 rounded-[22px] mt-5'>
        <div className='flex justify-between lg:w-[20vw] w-[80vw]'>
            <p className='text-[#6E737F] font-medium text-sm'>Bank Name</p>
            <p className='text-[#6E737F] font-medium text-sm'>Canra Bank</p>
        </div>
        <div className='flex justify-between lg:w-[18vw] w-[80vw]'>
            <p className='text-[#6E737F] font-medium text-sm'>Account Number</p>
            <p className='text-[#6E737F] font-medium text-sm'>***1102</p>
        </div>
        </div>
    </section>
  )
}

export default Comp3