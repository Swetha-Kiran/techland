"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Card = ({ title, color, description }) => {
  return (
    <div className={`card w-[80vw] md:w-[40vw] md:h-[30vh] lg:w-[16vw] lg:h-[35vh] h-full bg-[rgb(245,248,238)] pt-6 flex items-center flex-col space-y-6 border-[1px] border-solid border-[#e3e3e3] rounded-xl`}>
      <div className='h-[8vh]'>
        <h1 className='text-lg font-semibold text-center capitalize text-[#68BF7B]'>{title}</h1>
      </div>
      <div className='h-[40px] px-4'>
        <p className='text-sm font-medium text-[#000000] text-center'>{description}</p>
      </div>
      <Link href=''>
        <button className='text-sm font-semibold leading-[15px] uppercase text-[#68BF7B] px-7 py-3 border-[1px] border-solid border-green-500 rounded-3xl'>Learn More</button>
      </Link>
      
    </div>
    
  );
};

const Comp_Two = () => {
  const cardsData = [
    {
      title: 'Land Leasing',
      description: 'A virtual data room that you own',
    },
    {
      title: 'Crowdfunding',
      description: 'Connect your service providers',
    },
    {
      title: 'Mutual TechLand Investment',
      description: 'Agricultural + Land Leasing + Crowdfunding',
    },
    {
      title: 'Agricultural Investment',
      description: 'Streamline your processes',
    },
    {
      title: 'Private Debt',
      description: 'Enable secondary trading of your fund',
    },
    {
      title: 'Convertible Debt',
      description: 'A virtual data room that you own',
    },
  ];
 
  const scrollContainerRef = useRef(null);
  const cardWidthRef = useRef(null); 

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
    
      const cardsPerScreen = 1; 
      const cardWidth = container.clientWidth / cardsPerScreen;
      cardWidthRef.current = cardWidth+50;
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current && cardWidthRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = cardWidthRef.current; 
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && cardWidthRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = cardWidthRef.current; 
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    <section className='w-[82vw] mx-auto mt-28 bg-white pt-6 pb-12 rounded-3xl shadow-[0_0_5px_0_rgba(0,0,0,0.3)] overflow-hidden'>
      <h1 className='text-[28px] leading-[30px] font-semibold text-[#333333] text-center capitalize'>Types of Digital Investments</h1>

      <div className='overflow-x-auto scrollbar-hide' ref={scrollContainerRef}>
        <div className='CardsDiv w-fit h-[35vh] mt-12 flex gap-14 sm:px-12'>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="absolute flex items-center justify-center -translate-y-52 lg:translate-x-12 lg:-translate-y-52 xl:-translate-y-48 left-0 md:-translate-y-72  bg-re-400" onClick={scrollLeft}>
        <MdOutlineKeyboardDoubleArrowLeft className="text-[#333333] lg:w-[5vw] w-[10vw] h-[10vh] lg:h-[12vh] bg-slat-600" />
      </div>

      <div className="absolute flex items-center justify-center -translate-y-52 lg:-translate-y-52 md:-translate-y-72 xl:-translate-y-48 lg:-translate-x-12 bg-re-300 right-0 bg-rd-400" onClick={scrollRight}>
        <MdOutlineKeyboardDoubleArrowRight className="text-[#333333] lg:w-[5vw] w-[10vw] h-[10vh] lg:h-[12vh] bg-slat-600" />
      </div>
    </section>
  </>
  );
};
export default Comp_Two;
