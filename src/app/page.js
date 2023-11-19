import React from 'react';
import Seo from '../../Components/seo';
import Hero_Section from '../../Components/Home Page Components/Hero Section';
import Comp_1 from '../../Components/Home Page Components/Comp_1';
import Comp_2 from '../../Components/Home Page Components/Comp_2';
import Comp_4 from '../../Components/Home Page Components/Comp_4';
import Comp_5 from '../../Components/Home Page Components/Comp_5';
import Comp_6 from '../../Components/Home Page Components/Comp_6';
import Comp_7 from '../../Components/Home Page Components/Comp_7/Comp_7';
import Comp_8 from '../../Components/Home Page Components/Comp_8';
// import Comp_9 from '../../Components/Home Page Components/Comp_9';
import Comp_10 from '../../Components/Home Page Components/Comp_10';
import Comp_13 from '../../Components/Home Page Components/Comp_13';
import Hero from '../../Components/investNow/hero_section/hero';
import Comp3 from '../../Components/Crypto/Comp3';
import Section1 from '../../Components/Home Page Components/newComp';
import NewComp1 from '../../Components/Home Page Components/NewComp1';
import NewComp2 from '../../Components/Home Page Components/NewComp2';

export const metadata = {
  title: 'TechLand - Digital Farming Investment Marketspace Opportunities',
  keywords: ["techland" , "Investment company", "Digital Farming investment", "TLT Marketspace", "agricultural investments", "land leasing", "fixed returns"],
  description: "TechLand Investment Company specializes in Digital Farming investment, TLT Marketspace opportunities, agricultural investments, land leasing, and providing fixed returns. Explore our diverse portfolio and discover profitable investment opportunities with us.",
  ogTitle: "TechLand Investment Company: Digital Farming, TLT Marketspace, Agricultural Investments, Land Leasing",
  ogType: "website",
  ogUrl: "https://www.tech-land.in",
  ogImage: "/images/ogImage.png",
  dependencies: ['next', 'react', 'inter'],
  contact: {
    email: 'info@tech-land.in',
    website: 'https://www.tech-land.in'
  },
}

const home = () =>
{
  return(
    <>
          <Hero_Section />
          <Comp_6 />
          {/* imported hero section of invest now page to show at the place of bonds, leasex component */}
         {/* <div className='mt-16'>
          <Hero />
         </div> */}
         <Comp3/>
         <NewComp1 />
         <Section1 />
         <NewComp2 />
          {/* <Comp_7 /> */}
          {/* <Comp_14 /> */}
          <Comp_8 />
          {/* <Comp_1 /> */}
          {/* <Comp_2 /> */}
          {/* <Comp_3 /> */}
          {/* <Comp_4 /> */}
          {/* <Comp_15 /> */}
          {/* <Comp_5 /> */}
          {/* <Comp_11 /> */}
          {/* <Comp_12 /> */}
          {/* <Comp_9 /> */}
          <Comp_13 />
          <Comp_10 />
    </>
  )
}

export default home;