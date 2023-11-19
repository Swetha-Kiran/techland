import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import styling from '../../../Styles/Navbar.module.css';
import PopupMessage from './popUp_Comp';

const DropDown_2_Comp = () => {
    const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
        {showPopUp && (<PopupMessage popUpClose={() => setShowPopUp(!showPopUp)} />)}

            <div className="lg:h-[calc(100vh-82px)] lg:absolute bg-white top-[82px] w-full left-0 text-[#282c3f]">
                <div className={`bg-re-300 flex flex-col lg:flex-row lg:justify-around w-full  pt-5 space-y-4 lg:space-y-0 `}>

                    <div className='bg-gree-200 lg:h-full w-full lg:w-[28vw] flex flex-col space-y-4 '>
                        <h5 className='text-3xl font-medium'>Investment</h5>
                        <Link href='/invest_now'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/tlt.svg' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>TLT Token Investment</span>
                                <span className="text-sm font-medium">Invest in the future of agriculture</span>
                                </div>
                            </div>
                        </Link>
                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/investment_img_1.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]  ">
                                    <span className={`${styling.dropdownItemName} text-base font-bold`}>Agricultural investment</span>
                                    <span className="text-sm font-medium ">Cultivate Prosperity with TechLand&apos;s Agricultural Investment Solutions</span>
                                </div>
                            </div>
                        </Link>

                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/investment_img_2.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Land Leasing (TLT Ownership)</span>
                                <span className="text-sm font-medium">A virtual data room that you own</span>
                                </div>
                            </div>
                        </Link>

                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/investment_img_3.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Crowdfunding</span>
                                <span className="text-sm font-medium">Connect your service providers</span>
                                </div>
                            </div>
                        </Link>

                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/investment_img_4.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Private and Convertible Debt</span>
                                <span className="text-sm font-medium">Enable secondary trading of your fund</span>
                                </div>
                            </div>
                        </Link>

                        {/* <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/investment_img_5.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Convertible Debt</span>
                                <span className="text-sm font-medium">Adapt and Thrive with TechLand&apos;s Convertible Debt Strategies</span>
                                </div>
                            </div>
                        </Link> */}
                    </div>

                    <div className='bg-gree-200 lg:h-full w-full lg:w-[25vw] flex flex-col space-y-4'>
                        <h5 className='text-3xl font-medium'>Services</h5>
                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/services_img_1.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Marketspace</span>
                                <span className="text-sm font-medium">Connecting Opportunities with TechLand&apos;s Marketspace Services</span>
                                </div>
                            </div>
                        </Link>
                        <a href='https://globaltourism.tech-land.in/landpro' target='_main'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} bg-yello-400 px-4 py-3 grid place-items-center rounded-xl`}>
                                    <Image src='/Home Page Images/NavBar Images/secondDropdown/services_img_4.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw] bg-blu-400">
                                    <span className={`${styling.dropdownItemName} text-base font-bold`}>Agents</span>
                                    <span className="text-sm font-medium">Your Trusted Partner in Digital Farming - TechLand Agents</span>
                                </div>
                            </div>
                        </a>

                        <a href='https://organic-chef.com/' target='_blank'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv}  grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/organic-chef.svg' height='100' width='100' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Organic Chef</span>
                                <span className="text-sm font-medium">Savour Sustainability with TechLand&apos;s Organic Chef Services</span>
                                </div>
                            </div>
                        </a>

                        <a href='https://soilsense.in/' target='_blank'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-2 py-5 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/Soil Sense Logo.svg' height='80' width='80' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Soilsense</span>
                                <span className="text-sm font-medium">Smart Farming Begins with Soilsense by TechLand</span>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className='h-full bg-black w-[1px]'></div>

                    <div className='bg-gree-200 lg:h-full w-full lg:w-[25vw] flex flex-col space-y-4 '>
                        <h5 className='text-3xl font-medium'>Solutions</h5>
                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/solutions_img_1.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Track and Optimise</span>
                                <span className="text-sm font-medium">Navigate Success with TechLand&apos;s Track and Optimise Solutions</span>
                                </div>
                            </div>
                        </Link>

                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/solutions_img_2.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Property Management</span>
                                <span className="text-sm font-medium">Efficiency and Excellence in Property Management with TechLand</span>
                                </div>
                            </div>
                        </Link>

                        <Link href='/Construction'>
                            <div className={`${styling.dropdownItemDiv} space-x-3 bg-pin-800 flex items-center lg:justify-between`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-4 py-3 grid place-items-center rounded-xl`}>
                                <Image src='/Home Page Images/NavBar Images/secondDropdown/solutions_img_3.png' height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1 lg:w-[25vw] w-[70vw]">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>Finance Calculator</span>
                                <span className="text-sm font-medium">Precision Planning with TechLand&apos;s Finance Calculator Tools</span>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
    </>
  )
}

export default DropDown_2_Comp
