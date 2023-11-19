'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import Card from './Card';
import GPay from './GPay';
import RazorPay from './RazorPay';

function Payment() {
    const [selectedOption, setSelectedOption] = useState('Card');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    
     <>
        <p className='text-center font-bold text-xl md:text-2xl text-[#16A34A]'>Payment Gateway</p>
        <div className='w-full h-full flex flex-col lg:flex-row justify-between p-4'>
          <div className='w-full lg:w-[25%] h-full flex flex-col justify-start items-start space-y-[2.8vh] py-2'>
            <p className='font-semibold text-base md:text-lg text-[#6E737F]'>Payment Method :</p>

            <div className='w-full flex flex-col space-y-[2.8vh] text-[#6E737F] font-medium text-base'>
          <div className='flex flex-row justify-between items-center '>
              <label for="card">
                <input id='card' type="radio" value="Card" checked={selectedOption === 'Card'} onChange={handleOptionChange} />

                {`  Card`}
              </label>
              <Image src="/paymentPageImages/Mastercard-logo 1.svg" alt="card" width="41" height="28"/>
              </div>
             
              <div className='flex flex-row justify-between items-center '>
              <label for="gpay">
                <input id="gpay" type="radio" value="GPay" checked={selectedOption === 'GPay'} onChange={handleOptionChange} />
                {`  GPay`}
              </label>
              <Image src="/paymentPageImages/GPay-logo.svg" alt="gpay" width="41" height="28"/>
              </div>

              <div className='flex flex-row justify-between items-center '>
              <label for="razorpay">
                <input id='razorpay' type="radio" value="RazorPay" checked={selectedOption === 'RazorPay'} onChange={handleOptionChange} />
                {`  RazorPay`}
              </label>
              <Image src="/paymentPageImages/RazorPay.svg" alt="razorpay" width="100" height="40"/>
              </div>
           


            </div>
          </div>
          <div className='w-[2px] h-full  bg-gray-300'></div> 
           <div className=' w-full lg:w-[70%] h-full flex flex-col  space-y-6 px-6 py-6 border-2 border-black-300 rounded-xl '>
            {selectedOption === 'Card' ? <Card /> : selectedOption === 'GPay' ? <GPay /> : <RazorPay />}
            <div className='flex justify-center items-center '>
            
            </div>
          </div>
        </div>
    
      </>

  )
}

export default Payment