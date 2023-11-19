import React from 'react';
import { GoSearch } from "react-icons/go";

function staffDetails() {
  return (
    <section className=' rounded-3xl h-[450px px-4 py-3 space-y-3'>
        <h1 className='font-semibold text-lg pl-6'>All Staff</h1>
        <section className='w-full flex justify-between items-center relative space-x-4'>
            <GoSearch className='absolute left-8 text-[#6E737F] text-lg 2xl:text-2xl ' />
            <input type="text" className='w-[40%]  h-[40px] 2xl:h-[50px] pl-12 pr-4  text-[#BEBEBF] text-base 2xl:text-xl font-normal border border-solid border-gray-300' placeholder='Search' />
            <select className='w-[40%]  h-[40px] 2xl:h-[50px] pl-6 pr-4  text-[#BEBEBF] text-base 2xl:text-xl font-normal border border-solid border-gray-300'>
                <option>Staff Role</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Fullstack Developer</option>
            </select>
            <button className='text-[#FFFFFF] bg-[#90BE6D] w-auto h-[40px] px-6 rounded-[32px] font-normal'>Add Packages</button>
         
        </section>
        </section>
  )
}

export default staffDetails