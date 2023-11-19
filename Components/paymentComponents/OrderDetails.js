import React from 'react'
import Image from 'next/image'

function OrderDetails() {
    return (
        <div className='w-full h-full space-y-4'>
            <p className='text-center font-bold text-xl md:text-2xl text-[#16A34A]'>Order Details</p>
            <div className='w-full md:w-[80%] h-full flex flex-col justify-center items-center space-y-14 md:m-auto px-2 md:px-6 py-6 border-2 border-black-300 rounded-xl '>
                <div className='w-full flex flex-col space-y-4'>
                <div className='w-full flex flex-row justify-between items-center '>
                    <p className='font-semibold text-sm md:text-[18px] text-[#2A2B39] text-center'>Product</p>
                    <p className='font-semibold text-sm md:text-[18px] text-[#2A2B39] text-center'>Sub Total</p>
                </div>
                <hr className='w-full h-[2px] bg-black-300' />
                <div className='w-full flex flex-row justify-between items-center space-x-4'>
                    <div className='flex flex-row items-center justify-start space-x-4'>
                        <Image src="/paymentPageImages/2miniland.svg" alt="miniland" width="46" height="47" />
                        <p className='font-medium text-xs md:text-base text-[#2A2B39]'>Mini Land</p>
                    </div>
                    <div className='flex flex-col items-center justify-start'>
                        <p className='font-medium text-sm md:text-[18px] text-[#535353]'>TLT 9999</p>
                        <p className='font-normal text-sm md:text-sm text-[#BEBEBF]'>Rs 9999</p>
                    </div>
                </div>
                </div>
               
                <div className='w-full flex flex-row justify-between items-center space-x-4'>
                    <div className='flex flex-row items-center justify-start space-x-4'>
                        <p className='font-medium text-base md:text-xl text-[#2A2B39]'>Total Payable Amount</p>
                    </div>
                    <div className='flex flex-col items-center justify-start'>
                    <p className='font-medium text-[18px] text-[#535353]'>Rs 99999</p>
                    </div>
                    </div>

            </div>
        </div>
        

    )
}

export default OrderDetails