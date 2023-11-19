import React, { useState } from 'react';
import Link from 'next/link';

const PopupModel = ({popUpClose}) =>
{
    const handlePopUpClose = (e) =>
    {
      if(e.target.id === 'outerDiv')
      {
        popUpClose();
      }
    };

  return (
    <>
        <div id='outerDiv' className="fixed top-0 left-0 w-screen h-screen bg-opacity-75 bg-black flex items-center justify-center z-10">
          <div id='innerDiv' className="bg-white rounded-lg p-4 w-[90%] sm:w-1/2 md:w-[40%] xl:w-1/4 space-y-20">
            {/* <div className="flex items-end mb-3">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none text-xl" onClick={() => popUpClose()} >X</button>
            </div> */}
            <p className="flex-1 text-gray-800 text-lg font-medium text-center">Click on &quot;Proceed&quot;, If you have made the payment successfully?</p>
            <div className='flex justify-between'>
                <button onClick={() => popUpClose()} className='px-8 py-2 2xl:px-12 2xl:py-4 rounded-[44px] bg-red-500 text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold'>Cancel</button>
                <Link href='/paynow/payment/confirmation' className='px-8 py-2 2xl:px-12 2xl:py-4 rounded-[44px] bg-[#2A2B39] text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold'>Proceed</Link>
          </div>
          </div>

        </div>
    </>
  );
};

export default PopupModel;
