import React from "react";
import Image from "next/image";

const Comp_1 = () => {
  return (
    <>
      <section className="bg-re-300 w-[84vw]  mb-16 flex flex-col-reverse justify-between items-center mx-auto py-6 md:flex-row">
        <section className="bg-yello-300 w-[84vw] py-5  space-y-5">
          <div className="space-y-3">
            <h3 className="md:text-2xl text-xl   lg:text-4xl 2xl:text-5xl  leading-[5px] lg:leading-[20px] md:leading-[10px] font-bold text-[#6b6b80]">
            Experience World&apos;s finest 
            </h3>
            <p className="text-xl lg:text-4xl md:text-2xl 2xl:text-5xl leading-[30px] md:leading-[30px] lg:leading-[58px] 2xl:leading-[50px] font-semibold text-[#63773B]">
            Investment Opportunities 
            </p>
          </div>
          <div>
            <p className="text-lg font-medium text-justify text-[#6b6b80]">
            Welcome to TechLand- Your gateway to innovative investments. Explore a world of exceptional opportunities at only one stop. With a track record of excellence, we offer a diverse range of investment options designed to meet your financial and future goals. Come along with us as we embark on a path of personal development and become a valued member of our supportive community

            </p>
          </div>
          
        </section>

        <section className="bg-yello-300 w-[84vw] h-[40vh] lg:h-[65vh] lg:translate-x-16 md:translate-x-8  ">
          <Image
            src="/aboutPageImages/Comp_1_Images/hero-image.svg"
            width="20"
            height="20"
            alt="image"
            className="w-full h-full"
          />
        </section>
        
      </section>
      
    </>
  );
};
export default Comp_1;
