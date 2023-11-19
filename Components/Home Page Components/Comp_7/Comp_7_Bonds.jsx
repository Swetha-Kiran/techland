import React from 'react';
import Link from 'next/link';
import Bonds_Card from './Comp_7_Bonds_Card';

const Comp_7_Bonds = (props) =>
{
    return(
        <>
            <section className='bg-blu-200 flex flex-col lg:flex-row lg:gap-x-4 xl:gap-x-6 py-4 mt-6 space-y-10 lg:space-y-0'>
                    <section id='section1' className='w-full lg:w-[30vw] bg-re-200 space-y-4 h-fit my-auto'>
                        <h1 className='text-[32px] font-extrabold leadng-[34px] sm:text-center lg:text-left'>Invest in <span className='text-green-600'>{props.investInPara}</span></h1>
                        <ul className='list-disc list-inside text-base leading-[25px] font-normal text-[#292c3e]'>
                            <li>{props.summary_1}</li>
                            <li>{props.summary_2}</li>
                            <li>{props.summary_3}</li>
                        </ul>
                        <div className='flex justify-between sm:justify-normal sm:gap-x-6 sm:ml-4'>
                            <Link href='#'>
                                <button className='w-[40vw] sm:w-[20vw] lg:w-[11vw] h-[42px] text-sm font-semibold leading-[24px] text-green-600  rounded-md border-[1px] border-solid border-green-600'>Know More</button>
                            </Link>
                            <Link href='#'>
                                <button className='w-[40vw] sm:w-[20vw] lg:w-[11vw] h-[42px] text-sm font-semibold leading-[24px] text-white bg-green-600 rounded-md border-[1px] border-solid border-white'>View Details</button>
                            </Link>
                        </div>
                    </section>

                    <div className='overflow-x-auto pt-3' >
                        <section id='section2' className='flex bg-gree-500 w-[170vw] sm:w-full gap-x-[4vw] sm:gap-x-4 xl:gap-x-6 lg:justify-normal' >
                            {props.cardId === '1' && (
                                <>
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/Ugro-Capital.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Secured'
                                        topPara = 'Invest in a Monthly Income, ‘A-’ Rated Bond Maturing in Aug’24'
                                        feature_1 = 'Yield to Maturity'
                                        feature_1_val = '10.4%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '14 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 999'
                                        feature_4 = 'Coupon Rate'
                                        feature_4_val = '10%'
                                        feature_5 = 'Interest Payment'
                                        feature_5_val = 'Monthly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A-'
                                        collectedInvestment = '1.1 Cr'
                                        targetInvestment = '1.8 Cr'
                                        investmentPercentage = '62'
                                        cardNum = 'first'
                                    />
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/incred-loan.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Secured'
                                        topPara = 'Invest in a Quarterly Income, ‘A+’ Rated Bond Maturing in May’25'
                                        feature_1 = 'Yield to Maturity'
                                        feature_1_val = '10%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '23 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 999'
                                        feature_4 = 'Coupon Rate'
                                        feature_4_val = '9.45%'
                                        feature_5 = 'Interest Payment'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A-'
                                        collectedInvestment = '1.8 Cr'
                                        targetInvestment = '2.5 Cr'
                                        investmentPercentage = '74'
                                        cardNum = 'second'
                                    />
                                </>
                            )}

                            {props.cardId === '2' && (
                                <>
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/shield_atm_12_logo.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Executed via Demat'
                                        topPara = "Shield the risk by leasing ATMs to India's largest payment solutions provid..."
                                        feature_1 = 'Pre Tax Return (IRR)'
                                        feature_1_val = '11%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '10 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 2999'
                                        feature_4 = 'No of Lesses'
                                        feature_4_val = '1'
                                        feature_5 = 'Payment Frequency'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A+'
                                        collectedInvestment = '1.7 Cr'
                                        targetInvestment = '2.0 Cr'
                                        investmentPercentage = '84'
                                        cardNum = 'first'
                                    />
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/shield_atm_36_logo.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Executed via Demat'
                                        topPara = "Shield the risk by leasing ATMs to India's largest payment solutions provid..."
                                        feature_1 = 'Pre Tax Return (IRR)'
                                        feature_1_val = '11%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '33 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 4999'
                                        feature_4 = 'No of Lesses'
                                        feature_4_val = '1'
                                        feature_5 = 'Payment Frequency'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A+'
                                        collectedInvestment = '1.1 Cr'
                                        targetInvestment = '3.0 Cr'
                                        investmentPercentage = '36'
                                        cardNum = 'second'
                                    />
                                </>
                            )}

                            {props.cardId === '3' && (
                                <>
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/stockal-logo.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Executed via Demat'
                                        topPara = "Shield the risk by leasing ATMs to India's largest payment solutions provid..."
                                        feature_1 = 'Pre Tax Return (IRR)'
                                        feature_1_val = '11%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '10 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 2999'
                                        feature_4 = 'No of Lesses'
                                        feature_4_val = '1'
                                        feature_5 = 'Payment Frequency'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A+'
                                        collectedInvestment = '1.7 Cr'
                                        targetInvestment = '2.0 Cr'
                                        investmentPercentage = '84'
                                        cardNum = 'first'
                                    />
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/vro-lg.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Executed via Demat'
                                        topPara = "Shield the risk by leasing ATMs to India's largest payment solutions provid..."
                                        feature_1 = 'Pre Tax Return (IRR)'
                                        feature_1_val = '11%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '33 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 4999'
                                        feature_4 = 'No of Lesses'
                                        feature_4_val = '1'
                                        feature_5 = 'Payment Frequency'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A+'
                                        collectedInvestment = '1.1 Cr'
                                        targetInvestment = '3.0 Cr'
                                        investmentPercentage = '36'
                                        cardNum = 'second'
                                    />
                                </>
                            )}

                            {props.cardId === '4' && (
                                <>
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/Strata-logo.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Executed via Demat'
                                        topPara = "Shield the risk by leasing ATMs to India's largest payment solutions provid..."
                                        feature_1 = 'Pre Tax Return (IRR)'
                                        feature_1_val = '11%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '10 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 2999'
                                        feature_4 = 'No of Lesses'
                                        feature_4_val = '1'
                                        feature_5 = 'Payment Frequency'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A+'
                                        collectedInvestment = '1.7 Cr'
                                        targetInvestment = '2.0 Cr'
                                        investmentPercentage = '84'
                                        cardNum = 'first'
                                    />
                                    <Bonds_Card 
                                        logo = '/Home Page Images/Comp_7 Images/Strata-logo.webp'
                                        topRightDescription_1 = 'Exchange Listed'
                                        topRightDescription_2 = 'Executed via Demat'
                                        topPara = "Shield the risk by leasing ATMs to India's largest payment solutions provid..."
                                        feature_1 = 'Pre Tax Return (IRR)'
                                        feature_1_val = '11%'
                                        feature_2 = 'Time to Maturity'
                                        feature_2_val = '33 Months'
                                        feature_3 = 'Min Investment'
                                        feature_3_val = '₹ 4999'
                                        feature_4 = 'No of Lesses'
                                        feature_4_val = '1'
                                        feature_5 = 'Payment Frequency'
                                        feature_5_val = 'Quarterly'
                                        feature_6 = 'Raiting'
                                        feature_6_val = 'CRISIL A+'
                                        collectedInvestment = '1.1 Cr'
                                        targetInvestment = '3.0 Cr'
                                        investmentPercentage = '36'
                                        cardNum = 'second'
                                    />
                                </>
                            )}
                        </section>
                    </div>
                                        
                </section>
        </>
    )
};
export default Comp_7_Bonds;