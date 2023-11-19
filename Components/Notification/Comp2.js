import Image from 'next/image'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const Comp2 = () => {
  return (
    <>
    <div className="flex justify-between items-center px-10 mb-5">
        <div className="flex lg:space-x-10 space-x-5">
            <div className='w-[5vw] lg:w-[3vw]'><Image src="/Transaction.png" alt="transaction" width={50} height={5}/></div>
            <p className='text-[#000000] font-medium lg:text-xl text-sm'>Withdraw failed</p>
        </div>
        <div className="">
      <div className="flex items-center space-x-3">
      <AiFillCaretDown className="text-[#FF5252]"/>
      <p className="text-right text-[#6E737F] text-base font-semibold">TLT 9,99,999 </p>
      </div>
      <p className="text-right text-[#6E737F] text-sm font-normal">INR 9,99,999</p>
    </div>
        </div>
    </>
  )
}

export default Comp2