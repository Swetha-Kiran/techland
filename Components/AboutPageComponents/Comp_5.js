"use client";
import React, { useEffect } from "react";

const Comp_5 = () => {
  useEffect(() => {
    document.getElementsByClassName("video")[0].play();
  });
  return (
    <>
      <section className="bg-re-300 h-[90vh] md:h-[60vh] lg:h-[60vh]  w-[84vw] mx-auto mt-8 lg:mt-16 py-6 flex flex-col mb-24 lg:flex-row items-center justify-between">
        <section className="bg-yello-300 w-[84vw] md:w-[84vw] md:text-start  lg:w-[27vw] space-y-6">
          <h5 className="text-3xl md:text-4xl font-bold text-[#333333]">
            Behind The Scenes
          </h5>
          <div>
            <p className="text-base leading-8 font-normal text-justify text-[#5e5e5e]">
            Our cutting-edge technology is constantly at work, providing real-time land value insights to empower farmers and landowners with valuable data-driven decisions. But that&apos;s not all - we are also passionate about fostering growth and innovation in the agricultural sector. We offer numerous investment opportunities for forward-thinking investors who want to be a part of this transformative journey. Join us in revolutionizing agriculture through the power of data and sustainable practices. Together, we can drive the future of farming towards greater prosperity and sustainability
            </p>
          </div>
        </section>

        <section className="h-[60vh] w-[84vw] mt-8 lg:w-[50vw] overflow-hidden ">
          <video autoplay loop muted className="video aspect-video">
            <source
              src="/aboutPageImages/video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag
          </video>
        </section>
      </section>
    </>
  );
};
export default Comp_5;