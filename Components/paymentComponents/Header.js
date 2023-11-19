import React from 'react'
import Image from 'next/image'

import Link from 'next/link'


function PaymentPageHeader() {

  return (
    <div className='h-[70px] w-full space-x-6 px-4 Tablet:px-8 sticky top-0 z-10 flex flex-row items-center justify-between shadow-md bg-[#F7F9FC]'>
      <Link href="/" className='flex flex-row items-center justify-start space-x-2 Tablet:space-x-6 cursor-pointer'>
        <Image src="/paymentPageImages/Arrow.svg" alt="arrow" width="24" height="24"></Image>
          <p className='font-montserrat font-semibold text-sm text-[#BEBEBF]'>Go back</p>
        </Link>

      <div className='flex flex-row items-center justify-start Tablet:space-x-2 pr-4'>
      <Image src="/Home Page Images/NavBar Images/Techland_Logo_New.png" alt="techland logo" width="150" height='50' className="w-[150px] h-[50px]" />

      </div>
    </div>
  )
}

export default PaymentPageHeader;