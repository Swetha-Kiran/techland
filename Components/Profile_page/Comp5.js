import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { MdDeleteOutline,MdKeyboardArrowRight } from "react-icons/md";
const Comp5 = () => {
  return (
    <section className='lg:w-[20vw] w-[92vw] mt-10 mb-10 lg:mb-0'>
        <h2 className='font-medium text-2xl'>Account</h2>
       <div className='lg:w-[20vw] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-4 py-4 space-y-3 rounded-[22px] mt-5'>
       <div className='flex items-center space-x-2  '>
        <IoLogOutOutline className='text-[#6E737F] font-medium text-sm'/>
        <p className='text-[#6E737F] font-medium text-sm '>Log Out</p>
       </div>
       <div className='flex items-center justify-between'>
        <div className='flex items-center  space-x-2'>
        <MdDeleteOutline className='text-[#6E737F] font-medium text-sm'/>
        <p className='text-[#6E737F] font-medium text-sm'>Delete Account</p>
        </div>
        <MdKeyboardArrowRight className='text-[#6E737F] font-medium text-xl'/>
       </div>
       </div>
    </section>
  )
}

export default Comp5