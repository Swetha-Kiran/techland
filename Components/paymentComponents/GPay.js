import React, { useState } from 'react';

function GPay() {
  // Define a state variable to hold the UPI ID
  const [upiId, setUpiId] = useState('');

  // Define an event handler for the input
  const handleUpiIdChange = (e) => {
    const { value } = e.target;

    // Update the state with the new UPI ID
    setUpiId(value);
  };

  return (
    <>
      <p className='font-semibold text-lg text-[#6E737F]'>Enter the GPay UPI ID :</p>
      <div className='flex flex-row w-full items-center space-x-6 '>
        <div className='flex flex-col space-y-4 text-[#6E737F]  font-semibold text-xs lg:text-sm  w-full md:w-[45%]'>
          <label htmlFor='upiId'>UPI ID</label>
          <input
            id='upiId'
            className='h-10 focus:outline-none font-light border-2 border-[#D4D3D7] rounded-md px-3'
            type='text'
            value={upiId}
            onChange={handleUpiIdChange}
          />
        </div>
      </div>
    </>
  );
}

export default GPay;
