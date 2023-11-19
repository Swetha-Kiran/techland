import React from 'react';
import Image from 'next/image';
import Table_Column from './Table_Column';

const Comp_14 = () =>
{
    return(
        <>

           <section className='bg-re-200 mt-16  py-6 px-[8vw]'>
           <div className='flex flex-col space-y-6'>
                    <div className='flex items-center justify-between'>
                        <span className='w-[8vw] lg:w-[26vw] md:w-[22vw] h-[1px] bg-[#dbdbdb] inline-block'></span>
                        <h2 className='text-[22px] lg:text-[32px] font-normal leading-[38px] text-[#222222] inline'>Why Choose TechLand</h2>
                        <span className='w-[8vw] lg:w-[26vw] md:w-[22vw] h-[1px] bg-[#dbdbdb] inline-block'></span>
                    </div>
                    <p className='text-sm lg:text-base font-normal text-[#5e5e5e] text-center'>Alongside a rapidly growing global population and demand for food, TechLand offers a<br />truly diversified investment opportunity with attractive long-term returns.</p>
                </div>
           </section>
            <section className='bg-[#fbfbfb] bg-re-200  py-6 px-[8vw] overflow-x-scroll md:overflow-hidden lg:overflow-hidden'>

                <div className='flex bg-gree-400 mt-10'>
                    <section className="bg-yello-200 h-full lg:w-[18vw] md:w-[22vw]  space-y-1 hover:bg-white hover:shadow-2xl duration-200">
                        <div className='bg-pin-400 h-[15vh] flex items-center pl-5   border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>Assets Class</span>
                        </div>
                        <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>Attractive Yeild</span>
                        </div>
                        <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>Low Volatility</span>
                        </div>
                        {/* <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>Equity Build Up</span>
                        </div> */}
                        <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>No Leverage</span>
                        </div>
                        <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'> Assets</span>
                        </div>
                        <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>Inflation Hedge</span>
                        </div>
                        <div className='bg-pin-400 h-[9vh] flex items-center pl-5  border-b-[1px] border-slate-200 border-solid'>
                            <span className='text-sm font-semibold text-[#5e5e5e]'>Average Annual Return</span>
                        </div>
                    </section>

                    <section className="bg-yello-200 h-full w-fit flex">
                        <Table_Column
                            item_1_Icon = '/Home Page Images/Comp_14 Images/img_1.png'
                            item_1_Name = 'TechLand'
                            item_2_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_3_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_4_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_5_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_6_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            // item_7_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_8_Val = '11.0%'
                        />
                         <Table_Column
                            item_1_Icon = '/Home Page Images/Comp_14 Images/img_2.png'
                            item_1_Name = 'Stocks'
                            item_2_Val = '/Home Page Images/Comp_14 Images/minus-sign.png'
                            item_3_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_4_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_5_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_6_Val = '/Home Page Images/Comp_14 Images/minus-sign.png'
                            // item_7_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_8_Val = '12.0%'
                        />
                        <Table_Column
                            item_1_Icon = '/Home Page Images/Comp_14 Images/img_3.png'
                            item_1_Name = 'Digital Farming'
                            item_2_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_3_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_4_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_5_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_6_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            // item_7_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_8_Val = '8.0%'
                        />
                        <Table_Column
                            item_1_Icon = '/Home Page Images/Comp_14 Images/img_7.svg'
                            item_1_Name = 'Mutual Funds'
                            item_2_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_3_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_4_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_5_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_6_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            // item_7_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_8_Val = '9%'
                        />
                         <Table_Column
                            item_1_Icon = '/Home Page Images/Comp_14 Images/img_4.png'
                            item_1_Name = 'Bank FD'
                            item_2_Val = '/Home Page Images/Comp_14 Images/minus-sign.png'
                            item_3_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_4_Val = '/Home Page Images/Comp_14 Images/minus-sign.png'
                            item_5_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_6_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            // item_7_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_8_Val = '6%'
                        />
                        <Table_Column
                            item_1_Icon = '/Home Page Images/Comp_14 Images/img_5.png'
                            item_1_Name = 'Gold'
                            item_2_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_3_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_4_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_5_Val = '/Home Page Images/Comp_14 Images/right-sign.svg'
                            item_6_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            // item_7_Val = '/Home Page Images/Comp_14 Images/cross-sign.svg'
                            item_8_Val = '6.5%'
                        />
                    </section>
                </div>
            </section>
        </>
    )
}
export default Comp_14;