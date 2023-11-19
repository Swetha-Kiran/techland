import React from 'react'
import Image from 'next/image'

const Table_Column = ({item_1_Icon, item_1_Name, item_2_Val, item_3_Val, item_4_Val, item_5_Val,  item_6_Val, item_7_Val, item_8_Val}) => 
{
  return (
    <>
        <div className='w-[25vw] lg:w-[11vw] md:w-[12vw] bg-[aqua h-full space-y-1 hover:bg-white hover:shadow-2xl duration-200'>
                            <div className='bg-pin-400 h-[15vh] flex flex-col justify-center items-center space-y-2  border-b-[1px] border-slate-200 border-solid'>
                                <Image src={item_1_Icon} height='40' width='40' alt='image' />
                                <span className='text-xs leading[19px] font-semibold uppercase text-[#3e3e3e]'>{item_1_Name}</span>
                            </div>

                            <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <span className='bg-[#e7eee2] px-1 py-1 rounded-full'>
                                    <Image src={item_2_Val} height='9' width='9' alt='image' />
                                </span>
                            </div>

                            <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <span className='bg-[#e7eee2] px-1 py-1 rounded-full'>
                                    <Image src={item_3_Val} height='9' width='9' alt='image' />
                                </span>
                            </div>
                            <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <span className='bg-[#e7eee2] px-1 py-1 rounded-full'>
                                    <Image src={item_4_Val} height='9' width='9' alt='image' />
                                </span>
                            </div>
                            <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <span className='bg-[#e7eee2] px-1 py-1 rounded-full'>
                                    <Image src={item_5_Val} height='9' width='9' alt='image' />
                                </span>
                            </div>
                            <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <span className='bg-[#e7eee2] px-1 py-1 rounded-full'>
                                    <Image src={item_6_Val} height='9' width='9' alt='image' />
                                </span>
                            </div>
                            {/* <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <span className='bg-[#e7eee2] px-1 py-1 rounded-full'>
                                    <Image src={item_7_Val} height='9' width='9' alt='image' />
                                </span>
                            </div> */}

                            <div className='bg-pin-400 h-[9vh] flex items-center justify-center border-b-[1px] border-slate-200 border-solid'>
                                <h6 className='text-2xl leading-[24px] font-normal text-[#90be6d]'>{item_8_Val}</h6>
                            </div>
                        </div>
    </>
  )
}

export default Table_Column