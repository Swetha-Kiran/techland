import React, { useState } from 'react';

function RazorPay() {
 
  const [razorPayUpiId, setRazorPayUpiId] = useState('');


  const handleRazorPayUpiIdChange = (e) => {
    const { value } = e.target;
    setRazorPayUpiId(value);
  };

  return (
    <>
      <p className='font-semibold text-lg text-[#6E737F]'>Enter the RazorPay UPI ID :</p>
      <div className='flex flex-row w-full items-center space-x-6 '>
        <div className='flex flex-col space-y-4 text-[#6E737F]  font-semibold text-xs lg:text-sm w-full md:w-[45%]'>
          <label htmlFor='razorPayUpiId'>UPI ID</label>
          <input
            id='razorPayUpiId'
            className='h-10 focus:outline-none font-light border-2 border-[#D4D3D7] rounded-md px-3'
            type='text'
            value={razorPayUpiId}
            onChange={handleRazorPayUpiIdChange}/>
        </div>
      </div>
    </>
  );
}

export default RazorPay;
