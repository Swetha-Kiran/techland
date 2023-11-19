import React from 'react'
import Image from 'next/image'

function Confirmation() {
  return (

    //For successful payments dispaly the below div - conditionally

    <div className='w-full  flex flex-col items-center justify-center space-y-[2vh] px-6 m-auto mt-0 object-cover'>
      <Image className="lg:w-[30vw] lg:h-[38vh]" src="/paymentPageImages/success.svg" alt="sucess" width="514" height="299"/>
      <p className='text-[#16A34A] font-extrabold text-2xl text-center'>Successful Payment </p>
      <p className='text-[#858585] font-semibold text-[18px] text-center'>Your Payment is successfully complete! <br />Thank You for Investing. </p>
        </div>

//For failed payments display the below div - conditionally

// <div className='w-full h-full flex flex-col items-center justify-center space-y-6 px-6 py-4'>
// <Image src="/paymentPageImages/failed.svg" alt="failure" width="514" height="299"/>
// <p className='text-[#16A34A] font-extrabold text-2xl text-center'>Failed to Pay</p>
// <p className='text-[#858585] font-semibold text-[18px] text-center'>Your Payment is not complete! <br />
//  Please try again </p>
//   </div>
  )
}

export default Confirmation