import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const Comp6a = () => {
  return (
   <div className='items-center '>
    <div className="flex  mx-auto items-center justify-between  ">
    <div className="flex space-x-5">
    <div class="w-[0.2vw] h-[60px] bg-[#58C347]"></div>
    <div className="space-y-1">
      <p className="text-[#58C347] text-[10px] font-normal">Withdraw Complete</p>
      <p className="text-[#2A2B39] text-sm font-medium">#ABCD1234567</p>
      <p className="text-[#D4D3D7] text-[10px] font-normal">12/7/2023</p>
    </div>
    </div>
    <div className="">
      <div className="flex items-center space-x-3">
      <AiFillCaretDown className="text-[#FF5252]"/>
      <p className="text-right text-[#6E737F] text-base font-semibold">TLT 9,99,999 </p>
      </div>
      <p className="text-right text-[#6E737F] text-sm font-normal">INR 9,99,999</p>
    </div>
    
    </div>

   </div>
    
  )
}

export default Comp6a