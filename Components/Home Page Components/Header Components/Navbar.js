"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styling from "../../../Styles/Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { RxCaretDown } from "react-icons/rx";
import { PiCaretUpBold, PiMedalFill } from "react-icons/pi";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdHelpCenter } from "react-icons/md";
import DropDown_1_Comp from "./DropDown_1_Comp";
import DropDown_2_Comp from "./DropDown_2_Comp";
import UserContext from "../../../Context/UserContext";
import Nameinitials from "../../Profile_page/Nameinitials";

const Nav = () => {
  const { isAuthenticated, logout } = useContext(UserContext); //Checking if user logged in or not
  const [showDropdownObj, setShowDropdownObj] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });
  const defaultLinkClass = "text-[#BEBEBF]";

  function toggleMenu(e) {
    // console.log("Menu button is clicked.", e);

    const nav = document.getElementsByClassName("navBar");
    const headerDiv = document.getElementsByClassName("headerDiv");

    nav[0].classList.toggle("hidden");
    // headerDiv[0].classList.toggle('h-[82vh]');
    // headerDiv[0].classList.toggle('sticky');
  }
  const toggleProfileDropdown = () => {
    const profileIconRef = document.getElementById("profile_DropDownIcon");
    const menuRef = document.getElementById("profile_DropDown");

    profileIconRef.classList.toggle("rotate-180");
    menuRef.classList.toggle("hidden");
  };

  const handleDropdownShow = (dropdownName) => {
    const new_Obj = {};

    for (const key in showDropdownObj) {
      const dropdownIconRef = document.getElementById(`${key}_icon`);
      console.log("syed drop down icon ref", dropdownIconRef);

      if (dropdownIconRef)
      {
        key === dropdownName
        ? [
            (new_Obj[key] = !showDropdownObj[key]),
            dropdownIconRef.classList.toggle("-rotate-180"),
          ]
        : [
            (new_Obj[key] = false),
            dropdownIconRef.classList.remove("-rotate-180"),
          ];
      }
    }

    setShowDropdownObj(new_Obj);
  };

  // console.log("Dropdon object Values", showDropdownObj);
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <div
        id="headerDiv"
        className="headerDiv md:sticky top-0 z-10 h-auto shadow-[0_0_5px_0_rgba(0,0,0,0.6)]"
      >
        <header
          className={`bg-white flex justify-between items-center px-2 lg:px-2 xl:px-8 py-4 relative`}
        >
          <div className="flex items-center gap-x-4">
            <div className="menuIcon lg:hidden">
              <AiOutlineMenu
                onClick={toggleMenu}
                className="hamburger text-[#515151] w-8 h-5 cursor-pointer"
              />
            </div>
            <Link href="/">
              <Image
                src="/Home Page Images/NavBar Images/Techland_Logo_New.png"
                alt="techland logo"
                width="150"
                height="50"
                className="w-[160px] h-[50px]"
              />
            </Link>
          </div>

          <nav className="navBar bg-white bg-re-300 lg:bg-transparent hidden lg:block absolute top-[84px] right-0  px-3 lg:static w-full lg:w-fit z-10 lg:flex-1">
            <div className="w-full lg:hidden flex justify-center flex-col my-10 space-y-3">
              <h1 className="text-center text-[#282c3f] text-base font-normal">
                Start Investing Today!
              </h1>
              <div className="font-semibold text-sm sm:text-base text-center leading-6 cursor-pointer text-white bg-[#ed5024d5] w-full py-2 rounded-md">
                <Link href="/create-account">Login / Sign Up</Link>
              </div>
            </div>

            <ul
              className={`bg-whit bg-yello-300 h-fit space-y-4 lg:space-y-0 font-semibold text-base text-[#428358] lg:flex lg:flex-row ${
                isAuthenticated
                  ? "justify-evenly"
                  : "justify-evenly"
              }  items-center`}
            >
              {!isAuthenticated ? (
                <>
                  <li
                    className={`h-auto cursor-pointer`}
                    onClick={() => handleDropdownShow("dropdown1")}
                  >
                    Digital Investments{" "}
                    <RxCaretDown
                      id="dropdown1_icon"
                      className={`text-[#282c3f] text-xl inline-block duration-500`}
                    />
                    {showDropdownObj.dropdown1 && (
                      <DropDown_2_Comp
                        dropDown_Id="2" //Do not change the ids, cuz i have given for some reasons.
                      />
                    )}
                  </li>
                  <hr />
                  <li
                    className={`h-fit cursor-pointer order-1`}
                    onClick={() => handleDropdownShow("dropdown3")}
                  >
                    About TechLand{" "}
                    <RxCaretDown
                      id="dropdown3_icon"
                      className={`text-[#282c3f] text-xl inline-block duration-500`}
                    />
                    {showDropdownObj.dropdown3 && (
                      <DropDown_1_Comp
                        itemTag_1="About Us"
                        itemIcon_1="/Home Page Images/NavBar Images/firstDropdown/img_1.png"
                        sub_text_1="Future of AgroFinTech"
                        link_1="/aboutpage"
                        itemTag_2="Why Should Trust Us"
                        itemIcon_2="/Home Page Images/NavBar Images/firstDropdown/img_3.png"
                        sub_text_2="Credibility and transparency"
                        link_2="/about#OurStory"
                        itemTag_3="Certificates"
                        itemIcon_3="/Home Page Images/NavBar Images/fourthDropdown/img_6.png"
                        link_3="/certificate"
                        sub_text_3="Trust and Credibility"
                        itemTag_4="Our Team"
                        itemIcon_4="/Home Page Images/NavBar Images/firstDropdown/img_2.png"
                        sub_text_4="Dedication behind success"
                        link_4="/our-team"
                        dropDown_Id="1"
                      />
                    )}
                  </li>
                  <hr />
                </>
              ) : (
                <>
                  <li
                    className={`h-fit cursor-pointer ${
                      activeLink === "Explore"
                        ? "text-[#428358]"
                        : defaultLinkClass
                    }`}
                    onClick={() => handleLinkClick("Explore")}
                  >
                    <Link href="/explore">Explore</Link>
                  </li>
                  <hr />
                  <li
                    className={`h-fit cursor-pointer ${
                      activeLink === "Portfolio"
                        ? "text-[#428358]"
                        : defaultLinkClass
                    }`}
                    onClick={() => handleLinkClick("Portfolio")}
                  >
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <hr />
                  <li
                    className={`h-fit cursor-pointer ${
                      activeLink === "invest"
                        ? "text-[#428358]"
                        : defaultLinkClass
                    }`}
                    onClick={() => handleLinkClick("invest")}
                  >
                    <Link href="/invest_now">Invest</Link>
                  </li>
                  <hr />

                  <div className="hidden sm:hidden lg:block w-[2px] h-[40px] bg-[#E9EBF3]"></div>

                  {/* <div className="w-[260px] flex items-center relative">
                    <GoSearch className="absolute left-4 text-[#6E737F] text-lg" />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search"
                      className="w-full h-[40px] pl-12 pr-4 bg-[#EFEFF5] rounded-2xl text-[#BEBEBF] text-xs font-normal"
                    />
                  </div> */}
                </>
              )}
                <li className={`h-fit cursor-pointer order-2`}>
                    <a
                      href="https://globaltourism.tech-land.in/"
                      target="_main"
                    >
                      Global Tourism
                    </a>
                </li>
                  <hr />
                  <li
                    className={`h-fit cursor-pointer`}
                    onClick={() => handleDropdownShow("dropdown2")}
                  >
                    Knowledge Center{" "}
                    <RxCaretDown
                      id="dropdown2_icon"
                      className={`text-[#282c3f] text-xl inline-block duration-500`}
                    />
                    {showDropdownObj.dropdown2 && (
                      <DropDown_1_Comp
                        itemTag_1="Blogs"
                        itemIcon_1="/Home Page Images/NavBar Images/fourthDropdown/img_1.png"
                        sub_text_1="Know us in detail"
                        link_1="https://blog.tech-land.in/"
                        itemTag_2="Press"
                        itemIcon_2="/Home Page Images/NavBar Images/fourthDropdown/img_2.png"
                        link_2="/press"
                        sub_text_2="News and Media"
                        itemTag_3="FAQs"
                        itemIcon_3="/Home Page Images/NavBar Images/fourthDropdown/img_3.png"
                        link_3="/knowledge-center"
                        sub_text_3="Clear your doubts"
                        itemTag_4="Webinar"
                        itemIcon_4="/Home Page Images/NavBar Images/fourthDropdown/img_4.png"
                        link_4="/webinar"
                        sub_text_4="Knowledge and Information"
                        itemTag_5="White Paper"
                        itemIcon_5="/Home Page Images/NavBar Images/firstDropdown/img_1.png"
                        link_5="/"
                        sub_text_5="Guide of Investment"
                        dropDown_Id="4"
                      />
                    )}
                  </li>
                  <hr />
            </ul>

            <div className="w-full sm:w-[40%] mx-auto lg:hidden flex  my-6">
              <div className="font-semibold text-sm text-center leading-6 cursor-pointer text-white bg-[#ed5024d5] w-full py-2 rounded-md">
                <Link href="/">Download TechLand App</Link>
              </div>
            </div>
          </nav>

          <section className="bg-blu-300 flex  gap-x-6 items-center ">
            {/* {isAuthenticated && (
              <div className="flex font-semibold text-sm  leading-4 cursor-pointer bg-white px-6 py-2 gap-2 rounded-3xl border-[#c9c9c9] hover:border-[#00357c] border-2">
              <Link href='/dashboard' className="text-red-500 tracking-wide">DashBoard</Link>
            </div>
            )} */}
            {!isAuthenticated && (
              <div className="font-semibold text-sm flex items-center justify-between leading-4 cursor-pointer bg-white px-4 py-2 gap-2 rounded-3xl border-[#c9c9c9] hover:border-[#00357c] border-2">
                <Link href="/login" className="text-red-500 ">
                  LOGIN
                </Link>
                <div className="w-[2px] h-4 bg-[#c9c9c9]"></div>
                <Link href="/create-account" className="text-red-500">
                  SIGNUP
                </Link>
              </div>
            )}

            {!isAuthenticated && (
              <div className="hidden xl:flex font-semibold text-sm  leading-4 cursor-pointer bg-white px-4 py-2 gap-2 rounded-3xl border-[#c9c9c9] hover:border-[#00357c] border-2">
                <Link href="https://play.google.com/store/apps/details?id=com.snsilos.techland" className="text-red-500">
                  Download App
                </Link>
              </div>
            )}

            {/* After logged in profile section */}
            {isAuthenticated && (
              <div className="flex items-center bg-re-300 gap-x-6 lg:relative">
                <div className="px-2 py-2 ">
                  <a href="/my_wallet">
                    <Image
                      src="/Home Page Images/NavBar Images/wallet.svg"
                      alt="wallet icon"
                      width="20"
                      height="20"
                      className="w-[8vw] sm:w-[3vw] lg:w-[2vw]"
                    />
                  </a>
                </div>
                <div
                  className={`${styling.profile_DropMenu} cursor-pointer relative`}
                >
                  <div className="flex items-center gap-2">
                    <Nameinitials onClick={toggleProfileDropdown} />
                    <PiCaretUpBold
                      id="profile_DropDownIcon"
                      onClick={toggleProfileDropdown}
                      className="text-[#747488] font-semibol text-xs inline-block rotate-180 duration-500"
                    />
                  </div>

                  <div
                    id="profile_DropDown"
                    className="bg-white hidden w-[70vw] sm:w-[40vw] md:w-[35vw] xl:w-[20vw] h-fit absolute top-[8vh] sm:top-[6vh] -right-2 border-[1px] border-solid border-[#d1d1db] rounded-xl px-2 sm:px-4 py-4 space-y-1"
                  >
                    <div className="flex gap-3 items-center hover:bg-green-300 py-2 duration-300 px-2 rounded-md">
                      <BiSolidUserCircle className="text-2xl" />
                      <Link
                        href="/profile"
                        className="font-medium text-[#003975] tracking-wide"
                      >
                        Profile
                      </Link>
                    </div>
                    {/* <div className="h-[4px] bg-[#f3f3f6]"></div> */}
                    {/* <div className="flex gap-3 items-center hover:bg-green-300 py-2 duration-300 px-2 rounded-md">
                      <AiFillSetting className="text-2xl" />
                      <Link
                        href="/Profile_page"
                        className="font-medium text-[#003975] tracking-wide"
                      >
                        Settings
                      </Link>
                    </div> */}
                    <div className="h-[4px] bg-[#f3f3f6]"></div>
                    <div className="flex gap-3 items-center hover:bg-green-300 py-2 duration-300 px-2 rounded-md">
                      <PiMedalFill className="text-2xl" />
                      <Link
                        href="/profile/refer-and-earn"
                        className="font-medium text-[#003975] tracking-wide"
                      >
                        Refer and Earn
                      </Link>
                    </div>
                    <div className="h-[4px] bg-[#f3f3f6]"></div>
                    <div className="flex gap-3 items-center hover:bg-green-300 py-2 duration-300 px-2 rounded-md">
                      <MdHelpCenter className="text-2xl" />
                      <Link
                        href="/knowledge-center"
                        className="font-medium text-[#003975] tracking-wide"
                      >
                        Helpdesk & Support
                      </Link>
                    </div>
                    <div className="h-[4px] bg-[#f3f3f6]"></div>
                    <div
                      onClick={logout}
                      className="flex gap-3 items-center hover:bg-green-300 py-2 duration-300 px-2 rounded-md"
                    >
                      <RiLogoutCircleRFill className="text-2xl" />
                      <button className="font-medium text-[#003975] tracking-wide">
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </header>
      </div>
    </>
  );
};

export default Nav;
