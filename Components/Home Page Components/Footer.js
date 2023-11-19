"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaTeamspeak,
  FaDiscord,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  useEffect(() => {
    const btnRef = document.getElementById("scrollToTopBtn");

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (btnRef) {
      btnRef.addEventListener("click", handleClick);
    }

    return () => {
      if (btnRef) {
        btnRef.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <footer className="w-full bg-[#2a2b39] pt-10 md:pt-24 pb-16 mt-16  px-4 md:px-16">
        <section
          id="sectionOne"
          className="w-full md:flex justify-between bg-yello-300"
        >
          <div id="QRCode div" className="w-full md:w-[40%] bg-gra-500 flex flex-col space-y-4">
            <h3 className="text-3xl tracking-widest md:tracking-wide md:text-2xl font-semibold text-white text-center md:text-left">
              TechLand
            </h3>
            <div className="flex flex-col lg:flex-row  gap-x-4 space-y-4 md:space-y-0 items-center md:items-start">
              <Image
                src="/Home Page Images/NavBar Images/TLT_logo.jpeg"
                width="100"
                height="100"
                className="w-[140px] h-[140px] block rounded-md"
                alt="TechLand Qr Code"
              />

              <p className="text-base md:text-sm font-normal leading-[28px] md:leading-[24px] text-[#bebebf]">
                {`TechLand, a pioneering tech-based company in the world of smart agriculture. We're on a mission to transform the future of farming using cutting-edge crypto tokens. By investing with TechLand, you're not only supporting sustainable and efficient agricultural practices but also gaining access to the exciting world of blockchain and cryptocurrency`}
              </p>
            </div>
          </div>

          <div className="w-full md:w-[55%] grid grid-cols-2 md:grid-cols-4 md:justify-items-center gap-x-12 gap-y-6 md:gap-x-0 md:gap-y-0 md:space-x-10 mt-10 md:mt-0 bg-re-300">
            <div id="servicesDiv" className="bg-blu-300 w-fit md:w-[15vw]">
              <h4 className="text-base font-medium text-white">Investment</h4>

              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              <li>
                  <Link
                    href="/invest_now"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer   "
                  >
                    TLT Token Investment
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1L67IRqJ0UFfNjK1yBqjkfcz0mIDKxshr/view?usp=sharing"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                    target="_main"
                  >
                    Techland Brochure
                  </a>
                </li>
                <li>
                  <Link
                    href="/Construction"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer"
                  >
                    Land Leasing{` `}
                    <span className="hidden md:inline"> (TLT ownership)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Construction"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Crowdfunding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Construction"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Private and Convertible Debt
                  </Link>
                </li>

              </ul>
            </div>

            <div id="ResourcesDiv" className="bg-blu-300 w-fit">
              <h4 className="text-base font-medium text-white">Resources</h4>

              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                <li>
                  <a
                    href="https://blog.tech-land.in/"
                    target="_main"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    href="/knowledge-center"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Construction"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Refer & Earn
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Construction"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    TLT Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Construction"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Career
                  </Link>
                </li>

              </ul>
            </div>

            <div id="AboutDiv" className="bg-blu-300 w-fit">
              <h4 className="text-base font-medium text-white">About</h4>

              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/knowledge-center"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <a
                    href="https://s3.ap-south-1.amazonaws.com/image.snsilos.com/TechLand_Exotic_Investment+and+Returns+(1).pdf"
                    target="_blank"
                    className="text-sm font-normal leading-[21px] text-[#d4d3d7] cursor-pointer "
                  >
                    Digital Investment
                  </a>
                </li>
              </ul>
            </div>

            <div id="socialMediaLinks" className="bg-blu-300 w-fit">
              <h4 className="text-base font-medium text-white mb-8 md:mb-8">
                Follow Us
              </h4>

              <div className="text-2xl space-y-8 md:space-y-6">
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/techlandofficial1/">
                    <FaFacebook className="cursor-pointer text-white" />
                  </a>
                  <a href="https://www.secure.instagram.com/techland_snsilos/">
                    <FaInstagram className="cursor-pointer text-white" />
                  </a>
                </div>
                <div className="flex gap-6">
                  <a href="https://twitter.com/techland01">
                    <FaTwitter className="cursor-pointer text-white" />
                  </a>
                  <a href="https://www.youtube.com/@techland01/featured">
                    <FaYoutube className="cursor-pointer text-white" />
                  </a>
                </div>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/company/techlandofficial1/">
                    <FaLinkedin className="cursor-pointer text-white" />
                  </a>
                  <a href="https://wa.me/917827154022?text=">
                    <FaWhatsapp className="cursor-pointer text-white" />
                  </a>
                </div>
                <div className="flex gap-6">
                  <a href="https://t.me/tlt_techland_ico">
                    <FaTelegram className="cursor-pointer text-white" />
                  </a>
                  <a href="https://discord.gg/8McxSrBM">
                    <FaDiscord className="cursor-pointer text-white" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="https://www.reddit.com/u/SnSilos_TechlandCoin/s/vwIycyPKJP">
                    <FaReddit className="cursor-pointer text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          id="horizontalRuler"
          className="w-[90vw] h-[1px] bg-white mx-auto mt-12 md:mt-20 mb-12 opacity-20"
        ></div>

        <section
          id="sectionTwo"
          className="w-full mx-auto md:flex lg:justify-between md:space-x-4 space-y-4 lg:space-y-0"
        >
          <div id="companyDesclaimer" className="w-full lg:w-[40%] space-y-4 flex flex-col justify-start items-start">
            {/* <div className="text-[13px] font-normal leading-[21px] text-[#bebebf]">
              <p>
                SEBI Registration No. : <b>ABC1122334455</b> | BSE Member ID:{" "}
                <b>1111</b> | NSE Member ID: <b>11111</b>
              </p>
            </div> */}
            <div className="text-sm font-normal leading-[21px] text-[#bebebf] md:mt-4 lg:mt-0">
              <p>
              All rights are reserved by SN Group and its brands.
              </p>
              <p>
              Corporate Identification Number : (CIN) U01114DL2018PTC339003
              </p>
            </div>
          </div>

          <div id="otherLink" className="md:flex w-full md:w-[60%] gap-2 lg:space-x-4 mx-0 flex flex-row justify-center items-center mt-0">
            <div className="w-full flex flex-row text-sm font-normal leading-[18px] space-y-2">
              <ul className="w-full flex flex-col lg:block space-y-2 lg:space-y-0 lg:space-x-6 ">

                <li className="text-[#d4d3d7] inline hover:underline">
                  <Link href="/legal-rights/terms-&-conditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="text-[#d4d3d7] inline hover:underline">
                  <Link href="/legal-rights/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-[#d4d3d7] inline hover:underline">
                  <Link href="/legal-rights/end-user-license-agreement">
                    End User License Agreement
                  </Link>
                </li>
                <li className="text-[#d4d3d7] inline hover:underline">
                  <Link href="https://play.google.com/store/apps/details?id=com.snsilos.techland" target="_blank" >Download App</Link>
                </li>
                <li className="text-[#d4d3d7] inline hover:underline">
                  <Link href="/legal-rights/refund-&-cancellation-policy">Refund & Cancellation Policy</Link>
                </li>
                <li className="text-[#d4d3d7] inline hover:underline">
                  <Link href="/legal-rights/shipping-policy">Shipping Policy</Link>
                </li>
              </ul>
            </div>

            <button id="scrollToTopBtn" className=" h-10 w-10 md:w-16 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center  ">
              <AiOutlineArrowUp className="text-2xl text-[#2a2b39] font-bold" />
            </button>

          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
