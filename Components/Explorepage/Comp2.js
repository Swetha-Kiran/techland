import React from 'react'
import dynamic from "next/dynamic"
import Image from 'next/image'
import Comp3 from './Comp3'
const ApexColumnBarChart=dynamic(()=>import('./Chart'),{ssr:false})
const Comp2 = ({packages}) => {
  
  return (
    <section className=' lg:w-[40vw] w-[92vw] mx-auto lg:ml-10  mt-28 flex flex-col lg:flex-row  '>
       <div className='shadow-[0_0_5px_0_rgba(0,0,0,0.2)] h-min rounded-[24px]'>
       <div className=' lg:w-[40vw] w-[92vw] flex flex-row justify-between items-center px-4 border-solid border-2 border-black-500 rounded-[24px] py-2'>
            <h3 className='text-[14px] font-medium text-[#2B5743]'>Revenue</h3>
            <div className='flex'>
            <div className="w-1 h-1 bg-[#A7A9C0]  mr-2 rounded-full"></div>
            <div className="w-1 h-1 bg-[#A7A9C0]  mr-2 rounded-full"></div>
            <div className="w-1 h-1 bg-[#A7A9C0] mr-2 rounded-full"></div>
            </div>
        </div>
        <div className='flex justify-between px-10 mt-10 mb-10'>
        <div>
            <select className='border-0 '>
                <option>Monthly</option>
                <option>Yearly</option>
            </select>
        </div>
        
        </div>
       <ApexColumnBarChart/>
       </div>
       <Comp3 packages={packages}/>
    </section>
  )
}

export default Comp2