import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Bonds_Card = (props)=>
{   
    const remain_Investment_percentage = 100 - props.investmentPercentage;

    return(
        <>
            <div className='w-full sm:w-[45vw] lg:w-[30vw] xl:w-[25vw] bg-re-300 h-fit border-[1px] border-solid border-[#00b8b7] pt-6 pb-3 relative rounded-md'>
                        <span className='text-xs font-semibold text-[#282c3f] border-[1px] border-green-500 border-solid px-3 py-1 absolute -top-3 left-6 bg-white'>Live</span>
                        <section className='pl-4 bg-re-200'>
                            <div className='flex justify-between'>
                                <Image src={props.logo} height='100' width='100' alt='image' />
                                <div className='flex flex-col'>
                                    <span className='text-[10px] font-medium leading-[13px] text-[#555770] px-2 border-[1px] border-solid border-[#00b8b7]'>{props.topRightDescription_1}</span>
                                    <span className='text-[10px] font-medium leading-[13px] text-[#555770] bg-[#fff7ec] text-center'>{props.topRightDescription_2}</span>
                                </div>
                            </div>

                            <p className='text-sm font-normal text-[#282c3f] mt-6'>{props.topPara}</p>
                        </section>

                        <hr className='mt-4 h-[2px]'/>

                        <section className='px-3 pt-4'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] font-medium leading-[16px] text-[#282c3f] text-center'>{props.feature_1_val}</span>
                                    <span className='text-[10px] font-normal leading-[16px] text-[#555770]'>{props.feature_1}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] font-medium leading-[16px] text-[#282c3f] text-center'>{props.feature_2_val}</span>
                                    <span className='text-[10px] font-normal leading-[16px] text-[#555770]'>{props.feature_2}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] font-medium leading-[16px] text-[#282c3f] text-center'>{props.feature_3_val}</span>
                                    <span className='text-[10px] font-normal leading-[16px] text-[#555770]'>{props.feature_3}</span>
                                </div>
                            </div>

                            <div className='flex justify-between mt-5'>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] font-medium leading-[16px] text-[#282c3f] text-center'>{props.feature_4_val}</span>
                                    <span className='text-[10px] font-normal leading-[16px] text-[#555770]'>{props.feature_4}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] font-medium leading-[16px] text-[#282c3f] text-center'>{props.feature_5_val}</span>
                                    <span className='text-[10px] font-normal leading-[16px] text-[#555770]'>{props.feature_5}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] font-medium leading-[16px] text-[#282c3f] text-center'>{props.feature_6_val}</span>
                                    <span className='text-[10px] font-normal leading-[16px] text-[#555770]'>{props.feature_6}</span>
                                </div>
                            </div>

                            <div>
                                <span className='bg-[#00b8b7] h-1 inline-block' style={{width: `${props.investmentPercentage}%` }}></span>
                                <span className='bg-[aqua] h-1 inline-block' style={{width: `${remain_Investment_percentage}%` }}></span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='text-[12px] font-bold leading-[20px] text-[#00b8b7]'>{props.collectedInvestment} / <span className='text-[#282c3f]'>{props.targetInvestment}</span></span>
                                <span className='text-[12px] font-bold leading-[20px] text-[#282c3f]'>{props.investmentPercentage}% <span className='text-[#00b8b7]'>Completed</span></span>
                            </div>

                            <div className='sm:h-[33px] xl:h-auto flex gap-x-2 mt-4'>
                                <span className='bg-[#f1f3f6] flex px-2 gap-2 items-center'>
                                    <Image src='https://s3.ap-south-1.amazonaws.com/gripinvest.in/bonds/dummyBondTagIcon.svg' width='17' height='17' alt='icon' />
                                    <span className='text-[11px] font-normal text-[#282c3f]'>Senior Secured Bond</span>
                                </span>

                                {props.cardNum === 'first' && (
                                    <span className='bg-[#f1f3f6] flex px-2 gap-2 items-center'>
                                        <Image src='https://s3.ap-south-1.amazonaws.com/gripinvest.in/new-website/badges/filling_fast.svg' width='17' height='17' alt='icon' />
                                        <span className='text-[11px] font-normal text-[#282c3f]'>Filling Fast</span>
                                    </span>
                                )}

                                {props.cardNum === 'second' && (
                                    <span className='bg-[#f1f3f6] flex px-2 gap-2 items-center'>
                                        <span className='text-[11px] font-normal text-[#282c3f]'>Secondary Sell</span>
                                    </span>
                                )}

                                {props.cardNum === 'second' && (
                                    <span className='bg-[#f1f3f6] flex px-2 gap-2 items-center'>
                                    <span className='text-[11px] font-normal text-[#282c3f]'>1.5X</span>
                                    </span>
                                )}
                                
                            </div>

                            <Link href='#'>
                                <button className='text-sm font-bold text-green-600 w-[100%] border-green-600 border-[1px] border-solid py-3 rounded-lg mt-6'>Invest Now</button>
                            </Link>
                        </section>
            </div>
        </>
    )
};
export default Bonds_Card;
