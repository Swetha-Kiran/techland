"use client"
import React, { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp4 from './Comp4';
import styling from "../../Styles/color.module.css"

const Comp3 = () => {
  const [showComp, setShowComp] = useState('comp1');

  const handleTabClick = (component) => {
    setShowComp(component);
  };

  return (
    <section className='lg:w-[84vw] mt-16 mx-auto'>
      <div className="flex sm:flex-row flex-col justify-between px-4 md:px-10">
        <h2 className='text-[#2A2B39]  font-bold text-3xl sm:text-4xl md:text-5xl leading-none'>Tokenomics</h2>
        <div
          className="flex lg:w-[40vw] bg-re-200 sm:w-[45vw]  bg-re-300 lg:justify-around justify-between overflow-x-auto mt-10 sm:mt-0 space-x-2  scrollbar-hide" 
          style={{ whiteSpace: 'nowrap' }} 
        >
          <div
            onClick={() => handleTabClick('comp1')}
            className={`px-6 py-2 border-2 ${styling.customborder} rounded-lg cursor-pointer ${
              showComp === 'comp1' ? `${styling.button} text-white` : ''
            }`}
          >
            Sales Details
          </div>
          <div
            onClick={() => handleTabClick('comp2')}
            className={`px-6 py-2 border-2 ${styling.customborder} rounded-lg cursor-pointer ${
              showComp === 'comp2' ? `${styling.button} text-white` : ''
            }`}
          >
            Allocation and Vesting
          </div>
          <div
            onClick={() => handleTabClick('comp4')}

            className={`px-6 py-2 border-2 ${styling.customborder} rounded-lg cursor-pointer ${

              showComp === 'comp4' ? `${styling.button} text-white` : ''
            }`}
          >
            Road Map
          </div>
        </div>
      </div>
      {showComp === 'comp1' && <Comp1 />}
      {showComp === 'comp2' && <Comp2 />}
      {showComp === 'comp4' && <Comp4 />}
    </section>
  );
};

export default Comp3;
