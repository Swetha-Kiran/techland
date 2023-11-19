"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styling from "../../Styles/comp_12.module.css";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Testimonial = ({ imageSrc,src, name, message, heading }) => (
  <div className="bg-white h-[90%] md:h-[60%] lg:h-[90%] w-[85vw] md:w-[40vw] lg:w-[23vw] inline-block rounded-2xl px-6 py-6 sm:shadow-[0_0_5px_0_rgba(0,0,0,0.3)]">
    <div className="min-h-[20vh] md:min-h-[15vh] lg:min-h-[25vh]">
      <p className="text-sm leading-[30px] font-bold  ">{heading}</p>
      <p className="text-sm leading-[22px] font-normal text-[#6b6b80] min-h-[135px]">
        {message}
      </p>
    </div>
    <hr className="bg-[#e5e5e5] h-[2px] mt-4" />
    <div className="mt-4 flex gap-3 items-center">
      <Image
        src={`/aboutPageImages/employee images/${src}.png`}
        height={60}
        width={60}
        alt="image"
        className="w-[65px] h-[65px] rounded-full"
      />
      <div className="space-y-1">
        <div className="flex gap-2">
          <span className="text-[15px] font-bold">{name}</span>
          <svg
            stroke="currentColor"
            fill="navy"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
          </svg>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-gray-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166.32.166.5 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.18.057-.35.166-.5zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            ></path>
          </svg>
          <span className="text-[14px] font-medium leading-[20px] text-[#6b7280]">
            Verified Investor
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Comp_12 = () => {
  const scrollContainerRef = useRef(null);
  const cardWidthRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      const cardsPerScreen = 1;
      const cardWidth = container.clientWidth / cardsPerScreen;
      cardWidthRef.current = cardWidth+37
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
  const testimonials = [
    {
      src:'ashish',
      name: "Ashish",
      heading: "You need this service.",
      message:
        "Organic food products are so good in taste and healthy too. I am so impressed with the organic chef.",
    },
    {
      src:'Syed',
      name: "Syed Uvais",
      heading: "Thank you 👍🏻 SN Silos",
      message:
        "I am extremely satisfied with the alternate investment products offered by TechLand, which otherwise not possible for small retail investors. TechLand has bridged the gap and provided a solution to its investors.",
    },
    {
      src:'Kartikey-1',
      name: "Kartikeya",
      heading: "😻Too good to be true.😃🥺😃🔥",
      message:
        "SN Silos helped a lot in the growth of my business. Thank you soooooo much!! 🖤🖤🖤🖤",
    },
    {
      src:'jugal',
      name: "Jugal Boro",
      heading: "I love it!",
      message:
        "I have downloaded the techland app and it really helped me to understand how to invest in land and how to get returns. Sn silos make investment very easy.",
    },
    {
      src:'swetha',
      name: "Swetha Reddy",
      heading: "It really works!",
      message:
        "SN Silos helped me increase my capital by investing in techland and got huge interest.",
    },
    {
      src:'vaibhav',
      name: "Vaibhav Porwal ",
      heading: "Bridging Agriculture and Crypto",
      message:
        "A visionary company revolutionizing farming through innovative blockchain and cryptocurrency solutions. Invest for change!",
    },

    // Add more testimonials here
  ];

  return (
    <>
      <div>
        <h3 className="text-[20px] md:text-[40px]  font-bold text-center text-[#333333] mb-2">
          Wall of <span className="text-red-500">Love</span> @ TechLand
        </h3>
        <h5 className="text-[20px] md:text-[40px] font-extrabold leading-[36px] text-[#059669] text-center">
          WE CARE
        </h5>
        <p className="text-lg font-normal leading-[36px] text-[#4b5563] text-center">
          What people think about us
        </p>
      </div>
      <section className="w-[82vw] mx-auto py-5 bg-white lg:pt-6 lg:pb-6 mt-5 rounded-3xl shadow-[0_0_5px_0_rgba(0,0,0,0.3)] overflow-hidden">
        <div
          className="overflow-x-auto scrollbar-hide bg--300"
          ref={scrollContainerRef}
        >
          <div className="CardsDiv w-fit  py-4 flex gap-6 lg:gap-14 sm:px-6 lg:px-12">
            {testimonials.map((card, index) => (
              <Testimonial key={index} {...card} />
            ))}
          </div>
        </div>

        <div
          className="absolute flex items-center justify-center -translate-y-52 lg:translate-x-12 lg:-translate-y-60 xl:-translate-y-52 left-0 md:-translate-y-64  bg-re-400"
          onClick={scrollLeft}
        >
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#333333] lg:w-[5vw] w-[10vw] h-[10vh] lg:h-[12vh] bg-slat-600" />
        </div>

        <div
          className="absolute flex items-center justify-center -translate-y-52 lg:-translate-y-60 md:-translate-y-64 xl:-translate-y-52 lg:-translate-x-12 bg-re-300 right-0 bg-rd-400"
          onClick={scrollRight}
        >
          <MdOutlineKeyboardDoubleArrowRight className="text-[#333333] lg:w-[5vw] w-[10vw] h-[10vh] lg:h-[12vh] bg-slat-600" />
        </div>
      </section>
    </>
  );
};

export default Comp_12;