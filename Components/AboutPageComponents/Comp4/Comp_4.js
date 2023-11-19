"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Comp_4_a from "./Comp_4_a";

const Comp_4 = () => {
const imagesrc=[
  {
    src:'ashish',
    name:'Ashish Sharma',
    designation:'Senior Operations Manager'
  },
  {
    src:'anmol',
    name:'Anmol Garg',
    designation:'HR Manager'
  },
  {
    src:'Kartikey-1',
    name:'Kartikey Singh',
    designation:'Mobile App Developer'
  },
{
  src:'akash',
  name:'Akash Jha',
  designation:'Backend Developer'
},
{
  src:'Syed',
  name:'Syed Uvais Hasan',
  designation:'Frontend Developer'
},
{
  src:'harschJadhav',
  name:'Harsch Jadhav',
  designation:'Backend Developer'
},
{
  src:'suraj',
  name:'Suraj Kiran Airi',
  designation:'Mobile App Developer'
},

{
  src:'vaibhav',
  name:'Vaibhav Porwal',
  designation:'Frontend Developer'
},
{
  src:'swetha',
  name:'Swetha Reddy',
  designation:'Frontend Developer'
},
{
  src:'jugal',
  name:'Jugal Boro',
  designation:'Fullstack Developer'
},

{
  src:'vivek',
  name:'Vivek Ghimerre',
  designation:'Fullstack Developer'
},
{
  src:'sanya',
  name:'Sanya Sukhijha',
  designation:'UI/UX Designer'
},
{
  src:'harschmittal',
  name:'Harsch Mittal',
  designation:'Graphics Designer'
},
{
  src:'gokul',
  name:'Gokul Mittal',
  designation:'Graphics Designer'
},
{
  src:'abhinav',
  name:'Abhinav Sehghal',
  designation:'Research and Business Analyst'
},
{
  src:'Ayush',
  name:'Ayush Kumar',
  designation:'Research and Innovative Head'
},
{
  src:'poonam',
  name:'Poonam Soni',
  designation:'Marketing Expert'
},
{
  src:'nandini',
  name:'Nandini Chauhan',
  designation:'Research and Innovative Head'
},

]
  // 'akash','harsch','vaibhav','suraj','swetha','jugal','vivek','sanya','abhinav','poonam','nandini']

 const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth", // Smooth scrolling animation
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth", // Smooth scrolling animation
      });
    }
  };


  return (
    <section className="w-[84vw] mx-auto
    ">
      <div className=" mt-10 py-4">
          <h3 className="text-4xl font-extrabold text-[#333333] text-center">
            Meet Our Team
          </h3>
        </div>
      <section
        id="OurTeam"
        className="bg-re-300  mx-auto flex flex-col lg:flex-row justify-evenly  "
      >
        <div className="lg:w-[40vw] bg-slate-200/50 flex flex-row justify-center items-center p-6 rounded-[32px]  mt-10 ">
          <div>
            <a href="#!" className="">
              <Image
                src="/aboutPageImages/praveen.png"
                alt=""
                width={250}
                height={250}
                className="rounded-full  object-cover aspect-square bg-re-500"
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-black">Praveen Soni</h3>
              <div>
                <h4 className="text-lg font-semibold text-black">Director</h4>
              </div>
              <span className="font-medium text-black">(Tech and Marketing)</span>
              <div className="flex items-center justify-center transition-opacity duration-300">
                <a
                  href="https://www.linkedin.com/in/praveen-soni-0abb10161/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="mx-auto text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
                <a
                  href="https://psoni.dotsforall.com/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                >
                  <Image src="/aboutPageImages/web.png" alt=""
                  width={20}
                  height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[40vw] bg-slate-200/50 flex flex-row justify-center items-center rounded-[32px] p-6  mt-10">
          <div>
            <a href="#!" className="">
              <Image
                src="/aboutPageImages/nitish.png"
                alt=""
                width={250}
                height={250}
                className="rounded-full  object-cover aspect-square bg-red-500"
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-black">Nitish Narula</h3>
              <div>
                <h4 className="text-lg font-semibold text-black">Director</h4>
              </div>
              <span className="font-medium text-black">
                (Public Relation & Investment)
              </span>
              <div className="flex items-center justify-center transition-opacity duration-300">
                <a
                  href="https://www.linkedin.com/in/praveen-soni-0abb10161/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="mx-auto text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
                <a
                  href="https://psoni.dotsforall.com/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full"

                >
                  <Image src="/aboutPageImages/web.png" alt=""
                  width={20}
                  height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        className="absolute lg:bottom1/2 lg:translate-y-32 lg:-translate-x-20 2xl:-translate-x-24 -translate-x-4 md:-translate-x-12 translate-y-32 bg-re-400"
        onClick={scrollLeft}
      >
        <MdOutlineKeyboardDoubleArrowLeft className="text-[#333333] lg:w-[5vw] w-[10vw] h-[10vh] lg:h-[12vh] bg-slat-600" />
      </button>
      <button
        className="absolute lg:translate-x-[85vw] translate-x-[75vw] md:translate-x-[80vw]  transform lg:translate-y-32 translate-y-32  "
        onClick={scrollRight}
      >
        <MdOutlineKeyboardDoubleArrowRight className="text-[#333333] lg:w-[5vw] w-[10vw] h-[10vh] lg:h-[12vh] bg-slat-600" />
      </button>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto lg:w-[84vw] w-[70vw] mx-auto scrollbar-hide whitespace-nowrap mt-10"
      >
        {/* Your team member cards with images go here */}

        {/* <Comp_4_a/>
        <Comp_4_a/>
        <Comp_4_a/>
        <Comp_4_a/>
        <Comp_4_a/>
        <Comp_4_a/>
        <Comp_4_a/>
        <Comp_4_a/> */}
       {imagesrc.map((item, index) => (
  <div key={index} className="relative lg:w-[20vw] md:w-[35vw] h-[300px] inline-block mx-2  overflow-hidden">
    <Image className="h-full w-full rounded-lg"
      src={`/aboutPageImages/employee images/${item.src}.png`}
      alt={`Team Member ${index + 1}`}
      width={300}
      height={300}
    />
    <div className="absolute bottom-0 left-0 right-0 bg-[#3b3759] opacity-90 px-4 py-2 flex flex-col items-center justify-center space-y-2">
      <span className="text-xs leading-3 font-normal text-white">{`${item.designation}`}</span>
      <div className="text-sm font-bold leading-4 text-white">{`${item.name}`}</div>
    </div>
  </div>

))}
      </div>

    </section>
  );
};

export default Comp_4;
