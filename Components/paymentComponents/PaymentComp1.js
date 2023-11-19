'use client'
import React from 'react'
import { useState } from 'react'
import Payment from './Payment';
import Confirmation from './Confirmation';
import httptl from '@/app/utils/httptl';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';
import OrderDetails from './OrderDetails';
import Image from 'next/image';

function PaymentComp1() {

  const [selectedOption, setSelectedOption] = useState('Card');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Order Details', 'Payment', 'Confirmation'];
  const images = [
    "/paymentPageImages/note.png",
    "/paymentPageImages/wallet.png",
    "/paymentPageImages/check-mark.png",
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className='bg-re-300 w-full h-auto lg:h-[calc(100vh-70px)]  mx-auto px-[8px] xsm:px-[16px] pt-[30px] pb-[24px] space-y-16 md:space-y-0'>
      <div className='w-full md:w-[85%] h-auto mx-auto px-2 md:px-6 lg:px-16 py-4  bg-[#FCFDFF] rounded-3xl shadow-custom space-y-[2vh]'>
        <div className="w-full  mx-auto p-4 space-y-[2.8vh]">
          <div className="flex justify-between items-center space-x-2">
            {steps.map((step, index) => (
              <>
                <Image className={` ${currentStep === index ? 'flex' : 'hidden md:flex'}`} alt="image" src={images[index]} width="41" height="28" />

                <div
                  key={index}
                  className={`text-sm md:text-[18px] font-semibold cursor-pointer  md:w-[30%] text-left ${currentStep > index ? 'text-green-500' : currentStep === index ? 'text-red-400' : 'text-[#2A2B39]'}
                   ${currentStep === index ? 'flex' : 'hidden md:flex'} `}
                  onClick={() => setCurrentStep(index)}>
                  {step}
                </div>

                {index < steps.length - 1 && <div className={`h-[2px] w-full  bg-green-500  ${currentStep === index ? 'flex' : 'hidden md:flex'}`} />}
              </>
            ))}
          </div>


          <div className="border-t border-gray-300 w-full"></div>
          {currentStep === 0 ? <OrderDetails /> : currentStep === 1 ? <Payment /> : <Confirmation />}

          <div className="flex justify-center items-center my-0">

            <button
              className={`bg-green-500 text-white px-4 py-2 rounded w-[120px] ${currentStep === steps.length - 2 || currentStep === steps.length - 1 ? 'hidden' : 'block'
                }`}
              onClick={handleNext}>
              Confirm
            </button>
            <button
              className={`bg-green-500 text-white px-4 py-2 rounded w-[200px] ${currentStep < steps.length - 2 || currentStep === steps.length - 1 ? 'hidden' : 'block'
                }`}
              onClick={handlePayment}>
              Confirm Payment
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentComp1;