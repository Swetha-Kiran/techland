"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import PaymentMethod from "@/app/utils/paymentMethod";
import UserContext from "../../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import styling from "../../Styles/color.module.css";
import httptl from "@/app/utils/httptl";
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";
import PaymentContext from "../../Context/paymentContext";

const Hero = () => {
  const { isAuthenticated } = useContext(UserContext);
  const { setPaymentDetailsFun } = useContext(PaymentContext);
  const router = useRouter();

  const [amountValue, setAmountValue] = useState(0);
  const [tltValue, setTltValue] = useState(null);
  const [totalTLT, setTotalTLT] = useState(0);
  const [currentStage, setCurrentStage] = useState(null);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 15, 2023";

  // console.log("Amount value and type", amountValue, typeof(amountValue));

  // const { handlePay } = PaymentMethod();

  useEffect(() => {
    const getCurrentStage = async () => {
      const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
      const api_url = `${base_url}${API_ENDPOINTS_TL.GET_CURRENT_STAGE}`;

      try {
        const response = await httptl.get(api_url, {
          headers: {
            includeAuthorizationToken: false,
          },
        });
        console.log("get current stage api response", response);
        if (response.data.success == true) {
          setTltValue(response.data.data.tlt_value);
          setCurrentStage(response.data.data.stage_no);
          console.log(
            "get current stage api success response",
            response.data.data
          );
        }
      } catch (error) {
        console.log("get current stage api error", error);
      }
    };
    getCurrentStage();
  }, []);

  const handlePayment = () => {
    if (isAuthenticated) {
      if (amountValue)
      {
        if (amountValue >= 1 && amountValue <= 25000)
        {
          const amountObj = {
            totalAmount: amountValue,
            totalTLT: totalTLT,
            couponCode:'',
          };

          console.log("amount object on hero section",  amountObj);

          // handlePay(amountObj, 'buyTlt');
          // let encodedAmount = btoa(encodeURIComponent(amountValue));
          // encodedAmount = encodedAmount.replace(/={1,2}$/, '');
          // router.push(`/paynow/${encodedAmount}`);

          setPaymentDetailsFun(amountObj);
          router.push("/paynow");
        }
        else if(amountValue > 25000)
        {
          toast.warning("Maximum amount limit 25,000 exceeded", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        else
        {
          toast.warning("Minimum amount can be 1 Rupee", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
      else {
        toast.warning("Please enter amount to make payment", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.warning("Please login to make a payment", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      router.push("/login");
    }


  }

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    //given the height to hero section by substarcting 100vh - (navrbar height+construction comp height)
    <section className='bg-re-300 w-full h-auto lg:h-[calc(100vh-82px)] flex flex-col md:flex-row justify-between mx-auto px-[8px] xsm:px-[16px] pt-[30px] pb-[24px] space-y-16 md:space-y-0'>
      <section className='w-full md:w-[56%] xl:w-[61%] bg-[#fcfdff] h-auto lg:h-full space-y-6 lg:space-y-0 rounded-[40px] px-[12px] sm:px-[40px] xl:px-[60px] py-[30px] 2xl:py-12 flex flex-col justify-around'>
        <p className='tracking-[5px]  xsm:tracking-[11px] sm:tracking-[12px] lg:tracking-[16px] 2xl:tracking-[18px]  text-[#2a2b39] text-sm'>DIGITAL FARMING</p>
        <h1 className='text-[#2a2b39]  text-3xl sm:text-5xl md:text-4xl xl:text-5xl 2xl:text-7xl leading-snug font-semibold tracking-[5.5px]'>Empower Your Investments With Techland</h1>
        <p className='text-[#6E737F] text-sm xl:text-base 2xl:text-lg tracking-[0.35px] 2xl:tracking-[0.45px]'>Unlock the potential of digital agriculture investments. Grow your wealth with our professionally managed, high-performance assets. Start your journey with TechLand today</p>
        <div className='w-full h-12 xl:h-14 2xl:h-16 bg-re-300 flex gap-x-4 sm:gap-x-8 '>
          <Link href='/invest_now'>
            <button className={`w-[35vw] sm:w-[20vw] md:w-[16vw] lg:w-[13vw] h-full ${styling.button} text-white rounded-xl text-sm sm:text-base font-medium`}>Invest Now</button>

          </Link>
          <Link href="/viewmore">
            <button className="w-[35vw]  sm:w-[20vw] md:w-[16vw] lg:w-[13vw] h-full bg-white text-[#2A2B39] rounded-xl text-sm  sm:text-base border-2 border-[#BEBEBF] border-solid font-medium">
              View More
            </button>
          </Link>
        </div>
      </section>
      {/* <section className='w-full md:w-[35%] xl:w-[38%]  bg-[#8dce9b] h-[calc(100vh-82px)] md:h-auto lg:h-full rounded-[40px] p-12 space-y-4 flex flex-col items-center justify-center'>
            <div className='bg-yello-300 w-full h-full bg-hero_image2 -translate-y-6' style={{ backgroundSize: '100% 100%'}} ></div>
            </section> */}

      <section className="bg-blu-300 w-full md:w-[42%] xl:w-[38%] m-auto relative h-auto lg:h-full flex justify-center items-center object-cover  md:overflow-hidden  ">
        <div className="rotate-[-22deg] absolute top-[2vh] w-[80%] h-[90%] md:top-[3vh] xl:top-[7vh] md:w-[70%] md:h-[80%] lg:w-[65%] lg:h-[70%]  xl:w-[80%] xl:h-[80%] bg-[#68BF7B] rounded-[40px] md:flex z-[-1]"></div>
        <div className="rotate-[20deg] absolute top-[2vh] w-[80%] h-[90%]  md:top-[5vh] xl:top-[7vh] md:w-[70%] md:h-[80%] lg:w-[65%] lg:h-[70%] xl:w-[80%] xl:h-[80%] bg-[#2B5743] rounded-[40px] md:flex z-[-1]"></div>

        {/* <div className='absolute top-0 md:top-[12vh] xl:top-[4vh] hidden md:flex z-[-1]'>
        <Image className="rotate-[-22deg] md:w-[40vw] md:h-[40vh] lg:w-[40vw] lg:h-[74vh]  2xl:w-[35vw] 2xl:h-[70vh]" src="/Home Page Images/Hero Section Images/Crypto-visual1.svg" width="460" height="540"></Image>
        </div>   */}
        {/* <div className='absolute top-0 md:top-[12vh] xl:top-[4vh] hidden md:flex z-[-1]'>
            <Image className="rotate-[20deg]  md:w-[40vw] md:h-[40vh] lg:w-[40vw] lg:h-[74vh] 2xl:w-[35vw] 2xl:h-[70vh]  " src="/Home Page Images/Hero Section Images/Crypto-visual2.svg" width="480" height="540"></Image>
          </div>    */}

        <div className="w-[90%] md:w-[90%] lg:w-auto h-auto lg:h-[70vh] space-y-2 2xl:space-y-4  flex flex-col items-center justify-between  px-2 py-3 m-auto rounded-[40px] border-[1px] border-[#000000]  bg-[#FCFDFF]">
          <div className="w-full flex flex-row space-x-2 px-6 py-[2px] justify-center items-center">
            <Image
              src="/Home Page Images/Hero Section Images/TLT_circular.jpeg"
              alt="tlt"
              width="50"
              height="50"
            ></Image>

            <p className="text-[#1C1C1C] font-medium text-sm md:text-base lg:text-xl xl:text-2xl text-center">
              TLT Tokens Pre-Sale Stage {currentStage}
            </p>
          </div>
          <div className="w-full flex  flex-row space-x-3  py-[2px] justify-center items-center">
            <div className=" bg-rd-300">
              <p className="text-[#1C1C1C]  font-medium text-base md:text-base lg:text-lg xl:text-2xl ">
                Sale Ends in : {days}d {hours}h {minutes}m {seconds}s{" "}
              </p>
            </div>
            <div className=" bg-rd-400 py-3">
              <Image
                src="/Home Page Images/Hero Section Images/Group 5.svg"
                alt="blast"
                width="40"
                height="40"
              ></Image>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center font-medium text-[#666666] text-xs lg:text-sm text-center">
            <p>Next Stage Value: 1.25</p>
            <p>Approx Listing Value: 2.5 INR</p>
          </div>

          <div className="w-full flex flex-row justify-center items-center space-x-[18px] py-[1px]">
            <div className=" w-[35%] h-[2px] bg-[#68BF7B]"></div>
            <p className="w-[35%] text-[#000000] font-bold  text-xs xsm:text-sm  lg:text-lg xl:text-xl  text-center">
              {tltValue} TLT = 1 INR{" "}
            </p>
            <div className=" w-[35%] h-[2px] bg-[#68BF7B]"></div>
          </div>

          <div className="w-[90%] flex flex-col justify-start  space-y-3   font-semibold text-xs lg:text-[18px]">
            <label htmlFor="amount" className="text-[#8E8E8E]">
              Paying Amount in USD/Rupees :
            </label>
            <div className="flex flex-row w-full">
              <select
                id="option"
                className="text-[#8E8E8E] rounded-tl-[10px] rounded-bl-[10px] px-4 h-[42px] w-22 border-r-0 border-2 border-black border-opacity-25 focus:outline-none  text-base"
              >
                <option value="INR">INR</option>
                {/* <option value="USD" disabled>USD</option> */}
              </select>

              <input
                type="text"
                id="amount"
                placeholder="Enter amount"
                onChange={(e) => {
                  setAmountValue(+e.target.value);
                  setTotalTLT(+e.target.value * tltValue);
                }}
                className="rounded-tr-[10px] rounded-br-[10px] px-4 h-[42px] w-full border-l-0 border-2 border-black border-opacity-25 focus:outline-none font-medium text-base "
              />
            </div>
          </div>

          <div className="w-[90%] flex flex-col justify-start  space-y-3   font-semibold text-xs lg:text-[18px]">
            <label htmlFor="tlt" className="text-[#8E8E8E]">
              Total TLT recieved :
            </label>
            <input
              type="text"
              id="tlt"
              readOnly
              value={`${totalTLT} TLT`}
              className="rounded-[10px] px-4 h-[42px] border-2 border-black border-opacity-25 focus:outline-none  font-medium text-base"
            />
          </div>

          <div className="w-full flex flex-row justify-center items-center space-x-3 px-5 lg:px-[26px] py-3">
            <button
              onClick={handlePayment}
              className={`h-[50px] w-[30vw] md:w-[12vw] rounded-[20px] text-[#FFFFFF] font-semibold text-xs md:text-sm lg:text-base 2xl:text-[18px] text-center ${styling.button}`}
            >
              Buy Now
            </button>
            {/* <button className='h-[50px] w-[30vw]  md:w-[16vw] lg:w-[13vw] rounded-[20px] text-[#FFFFFF] font-semibold text-xs md:text-sm lg:text-base 2xl:text-[18px] text-center bg-[#DA3A3A]'>Connect Wallet</button> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;

// Hero section with tlt tokens.
// return(
//     <>
//         <section className='bg-re-300 h-[50vh] w-[94vw] lg:h-[94vh] md:w-[94vw] md:h-[50vh] flex items-center justify-between mx-auto'>
//             <div className='w-full md:w-[50vw] bg-yello-300 relative '>
//                 <h1 className='text-[40px] lg:text-[65px] font-normal leading-[63px] lg:leading-[83px] text-[#312e7f]'>Leading Virtual</h1>
//                 <h1 className='text-[30px] lg:text-font-medium leading-[63px] lg:leading-[83px] text-[#312e7f]'>Digital Farming</h1>
//                 <p className='text-base lg:text-xl font-bold text-[#f4772b]'>Cultivating prosperity, one investment at a time</p>

//                 <div className='flex gap-6'>
//                     <Link href='/' className='mt-4'>
//                         <button className='bg-green-600 cursor-pointer px-6 md:px-4 py-3  md:py-[10px] outline-none text-white text-base font-semibold rounded-3xl mt-4'>Invest Now</button>
//                     </Link>
//                     <Link href='/' className='mt-4'>
//                         <button className='bg-green-600 cursor-pointer px-6 md:px-4 py-3  md:py-[10px] outline-none text-white text-base font-semibold rounded-3xl mt-4'>Know More</button>
//                     </Link>
//                 </div>
//             </div>

//             <div className='h-full md:bg-[aqua w-[50vw] lg:w-[38vw] hidden sm:block pt-10'>
//                 <div className='flex w-[50%] lg:h-[18vh] '>
//                      <Image src='/Home Page Images/Hero Section Images/banner-element-1.svg' height='100' width ='100' alt='img' />
//                      <span className='text-base font-normal leading-5 text-[#312e7f] bg-gre-500 flex items-end relative left-10'><p>TLT are<br/>Digital Investment<br/>Assets</p></span>
//                 </div>
//                 <div className='flex lg:translate-x-60 md:translate-x-40 w-[50%] lg:h-[18vh]'>
//                      <Image src='/Home Page Images/Hero Section Images/banner-element-2.svg' height='100' width ='100' alt='img' />
//                      <span className='text-base font-normal leading-5 text-[#312e7f] bg-gre-500 flex items-end relative left-10'><p>TLT Provides<br/>lucrative<br/>Returns</p></span>
//                 </div>
//                 <div className='flex lg:translate-x-48 md:translate-x-36 w-[50%] lg:h-[18vh] translate-y-10'>
//                      <Image src='/Home Page Images/Hero Section Images/banner-element-3.svg' height='100' width ='100' alt='img' />
//                      <span className='text-base font-normal leading-5 text-[#312e7f] bg-gre-500 flex items-end relative left-10'><p>TLT ensures<br/>Optimal<br/>Performance</p></span>
//                 </div>
//                 <div className='flex w-[50%] lg:h-[18vh] md:translate-x-1 lg:translate-x-14 translate-y-8'>
//                      <Image src='/Home Page Images/Hero Section Images/banner-element-4.svg' height='100' width ='100' alt='img' />
//                      <span className='text-base font-normal leading-5 text-[#312e7f] bg-gre-500 flex items-end relative left-10'><p>TLT are<br/>Professionally<br/>managed</p></span>
//                 </div>
//             </div>
//         </section>
//     </>
// )

// const Hero = () =>
// {
//     return(
//         <>
//             <section className='bg-red-30 h-[87vh] flex items-center pl-8'>
//                 <div className='w-[48vw] bg-yellow300 -mt-10'>
//                     <h1 className='text-[54px] font-medium leading-[66px] text-[#232a35]'>Increase your earnings with TechLand</h1>
//                     <p className='text-lg font-normal text-[#232135] mt-4'>Best platform to invest your passive income which provides guaranteed and high returns besides giving subscriptions, coupons, and offers</p>
//                     <Link href='#' className='mt-4'>
//                         <button className='bg-[#3f68d2] cursor-pointer px-4 py-[10px] outline-none text-white text-base font-semibold rounded mt-4'>Explore Packages</button>
//                     </Link>
//                 </div>
//                 <div id='mapImagediv' className="w-[50vw] h-full bg-cover opacity-50 bg-[url('/Home Page Images/Hero Section Images/CaptureMap.png')]"></div>
//             </section>
//         </>
//     )
// };

//	Hero section with static image in background

// 'use client';
// import React, { useEffect } from 'react';

// const Hero_Section = () =>
// {

//     return (
//         <>
//                 <div className="h-[88vh] bg-cover w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/Home Page Images/Hero Section Images/hero_image.jpg')] bg-yellow-300 overflow-hidden flex justify-center items-center" >

//                 <div className='w-[76vw] sm:w-[64vw] text-center space-y-3'>
//                     <h1 className='font-bold text-4xl md:text-[44px] lg:text-6xl leading-[60px] text-white hover:web hover:stroke-white'>
//                         Increase your earning with Tech Land
//                     </h1>
//                     <p className='text-lg font-normal leading-8 text-[#e5e7eb]'>Best platform to invest your passive income which provides guaranteed and high returns besides giving subscriptions, coupons, and offers</p>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Hero_Section;

// Hero section with video playing in background

// 'use client';
// import React, { useEffect } from 'react';

// const Hero_Section = () =>
// {
//     useEffect(() =>
//     {
//         document.getElementsByClassName('video')[0].play()
//     });

//     return (
//         <>
//             <div className='h-[88vh]  bg-yellow-300 overflow-hidden  bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]'>

//                 <div className='w-[76vw] sm:w-[64vw] absolute top-[40vh] left-[12vw] sm:left-[18vw] text-center space-y-3'>
//                     <h1 className='font-bold text-4xl md:text-[44px] lg:text-6xl leading-[60px] text-white'>
//                         Increase your earning with Tech Land
//                     </h1>
//                     <p className='text-lg font-normal leading-8 text-[#e5e7eb]'>Best platform to invest your passive income which provides guaranteed and high returns besides giving subscriptions, coupons, and offers</p>
//                 </div>

//                 <video autoplay loop muted className='video aspect-video z-0 mix-blend-overlay'>
//                     <source src="p(2).mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>

//             </div>
//         </>
//     )
// }

// export default Hero_Section;
