"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Comp_7_Bonds from './Comp_7_Bonds';

const Comp_7 = () =>
{
    const [componentNum, setComponentNum] = useState(1);

    useEffect(() =>
    {
        const active_Component = document.getElementById(componentNum);
        active_Component.classList.add('active');

        for (let i = 1; i <= 4; i++)
            {
                if(i == active_Component.id)
                 {
                    continue;
                 }
                document.getElementById(i).classList.remove('active')
            }
    }, [componentNum])

    return (
        <>
            <section className='bg-blu-200 mt-16 sm:mt-28 w-[84vw] sm:w-[94vw] xl:w-[84vw] mx-auto '>
                <div>
                    <ul className='bg-yello-300 w-full sm:w-auto grid grid-cols-2 sm:flex sm:gap-x-6 gap-y-4 sm:gap-y-0 text-sm font-normal'>
                        <li >
                            <button id='1' className='bg-[#f1f3f6] px-3 py-2 rounded-2xl' onClick={() => setComponentNum(1)}>Bonds</button>
                        </li>
                        <li >
                            <button id='2' className='bg-[#f1f3f6] px-3 py-2 rounded-2xl' onClick={() => setComponentNum(2)}>LeaseX</button>
                        </li>
                        <li >
                            <button id='3' className='bg-[#f1f3f6] px-3 py-2 rounded-2xl' onClick={() => setComponentNum(3)}>Startup Equity</button>
                        </li>
                        <li >
                            <button id='4' className='bg-[#f1f3f6] px-3 py-2 rounded-2xl' onClick={() => setComponentNum(4)}>Commercial</button>
                        </li>
                    </ul>
                </div>

                <style jsx>
                    {`
                        .active {
                            background-color: #16a34a;
                            color: white;
                        }
                    `}
                </style>

                {componentNum === 1 && (
                    <Comp_7_Bonds
                        cardId = '1'
                        investInPara = 'Bonds, Rated A or Higher'
                        summary_1 = 'Investments starting at just ₹ 999'
                        summary_2 = 'Stock Exchange Listed'
                        summary_3 = 'Earn 8-11% Pre-Tax YTM'
                    />
                )}

                {componentNum === 2 && (
                    <Comp_7_Bonds
                        cardId = '2'
                        investInPara = 'Listed and Rated Corporate Credit'
                        summary_1 = 'Investments starting at just ₹ 2999'
                        summary_2 = 'Stock Exchange Listed'
                        summary_3 = 'Earn up to 18% Pre-Tax IRR'
                    />
                )}

                {componentNum === 3 && (
                    <Comp_7_Bonds
                        cardId = '3'
                        investInPara = 'Startup Equity'
                        summary_1 = 'Investments starting at just ₹ 4999'
                        summary_2 = 'Non-Market Linked Returns'
                        summary_3 = 'High Risk-High Reward Strategy'
                    />
                )}

                {componentNum === 4 && (
                    <Comp_7_Bonds
                        cardId = '4'
                        investInPara = 'Commercial Digital Farming'
                        summary_1 = 'Investments starting at just ₹ 9999'
                        summary_2 = 'Appreciating Inherent Land Value'
                        summary_3 = 'Earn upto 11% Pre-Tax Yield'
                    />
                )}

            </section>
        </>
    )
};
export default Comp_7;