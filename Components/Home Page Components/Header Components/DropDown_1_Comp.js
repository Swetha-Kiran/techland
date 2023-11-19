import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styling from '../../../Styles/Navbar.module.css';

const DropDown_1_Comp = ({dropDown_Id, itemTag_1, itemIcon_1, link_1, itemTag_2, itemIcon_2, link_2, itemTag_3, itemIcon_3, link_3, itemTag_4, itemIcon_4, link_4, itemTag_5, itemIcon_5, link_5,sub_text_1,sub_text_2,sub_text_3,sub_text_4,sub_text_5}) => {

  return (
    <>
                <div className={`lg:h-[calc(100vh-82px)] lg:absolute top-[82px] w-full left-0 text-[#282c3f]`}>
                    <div className={`bg-white lg:flex lg:justify-around w-full lg:py-16`}>

                        <Link href={link_1} target={itemTag_1 === "Blogs" ? '_main' : ''}>
                            <div className={`${styling.dropdownItemDiv} bg-pin-800 flex items-center gap-x-3`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-5 py-4 grid place-items-center rounded-xl`}>
                                    <Image src={itemIcon_1} height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className={`${styling.dropdownItemName} text-base font-bold`}>{itemTag_1}</span>
                                    <span className="text-sm font-medium">{sub_text_1}</span>
                                </div>
                            </div>
                        </Link>

                        <Link href={link_2}>
                            <div className={`${styling.dropdownItemDiv} bg-pin-800 flex items-center gap-x-3`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-5 py-4 grid place-items-center rounded-xl`}>
                                <Image src={itemIcon_2} height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>{itemTag_2}</span>
                                <span className="text-sm font-medium">{sub_text_2}</span>
                                </div>
                            </div>
                        </Link>

                        <Link href={link_3}>
                            <div className={`${styling.dropdownItemDiv} bg-pin-800 flex items-center gap-x-3`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-5 py-4 grid place-items-center rounded-xl`}>
                                <Image src={itemIcon_3} height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>{itemTag_3}</span>
                                <span className="text-sm font-medium">{sub_text_3}</span>
                                </div>
                            </div>
                        </Link>

                        <Link href={link_4}>
                            <div className={`${styling.dropdownItemDiv} bg-pin-800 flex items-center gap-x-3`}>
                                <div className={`${styling.dropdownItemLogoDiv} px-5 py-4 grid place-items-center rounded-xl`}>
                                <Image src={itemIcon_4} height='40' width='40' alt='image' />
                                </div>
                                <div className="flex flex-col space-y-1">
                                <span className={`${styling.dropdownItemName} text-base font-bold`}>{itemTag_4}</span>
                                <span className="text-sm font-medium">{sub_text_4}</span>
                                </div>
                            </div>
                        </Link>

                    {dropDown_Id === '4' && (
                            <Link href={link_5} target="_blank">
                                <div className={`${styling.dropdownItemDiv} bg-pin-800 flex items-center gap-x-3`}>
                                    <div className={`${styling.dropdownItemLogoDiv} px-5 py-4 grid place-items-center rounded-xl`}>
                                    <Image src={itemIcon_5} height='40' width='40' alt='image' />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                    <span className={`${styling.dropdownItemName} text-base font-bold`}>{itemTag_5}</span>
                                    <span className="text-sm font-medium">{sub_text_5}</span>
                                    </div>
                                </div>
                            </Link>
                    )}

                    </div>
                </div>
    </>
  )
}

export default DropDown_1_Comp
