import React from 'react';
import Image from 'next/image';

const BenefitCard = ({curItem, activeTermIndex}) =>
{
    return (
        <>
        <div className='lg:w-[40%] w-[100%] bg-yello-200 space-y-4'>
            <h5 className='text-[#6E737F] text-xl font-medium text-center'>Benefits</h5>
            <section className='bg-[#fcfdff] rounded-[20px] w-full px-3 py-2 space-y-5 2xl:space-y-8 shadow-[0_0_2px_0_rgba(0,0,0,0.3)]'>
            <div className='flex items-center'>
                <span className='text-[20px] font-semibold text-[#BEBEBF] inline-block px-3'>1</span>
                <div className='flex-1'>
                    <h3 className='text-base font-semibold text-[#2A2B39]'>High Interest Rate</h3>
                    <h6 className='text-xs text-[#6E737F] pr-1'>Earn upto {curItem.invest_types[2].interestRate}% Annual Percentage Rate</h6>
                </div>
                <div>
                    <Image src='/investNowImages/interest-rate.svg' height='40' width='40' alt='' className='' />
                </div>
            </div>
            <div className='flex items-center'>
                <span className='text-[20px] font-semibold text-[#BEBEBF] inline-block px-3'>2</span>
                <div className='flex-1'>
                    <h3 className='text-base font-semibold text-[#2A2B39]'>Organic Chef Coupons</h3>
                    <h6 className='text-xs text-[#6E737F] mr-1 py-1 border-b-2 border-dashed border-[#ededed]'>
                    {activeTermIndex === 0 ? curItem.invest_types[0].Benefits.totalCoupons : activeTermIndex === 1 ? curItem.invest_types[1].Benefits.totalCoupons : curItem.invest_types[2].Benefits.totalCoupons} Coupons
                    </h6>
                    <h6 className='text-xs text-[#6E737F] mr-1 py-1 border-b-2 border-dashed border-[#ededed]'>
                    {activeTermIndex === 0 ? curItem.invest_types[0].Benefits.discountPercent : activeTermIndex === 1 ? curItem.invest_types[1].Benefits.discountPercent : curItem.invest_types[2].Benefits.discountPercent }
                    % off min order value {activeTermIndex === 0 ? curItem.invest_types[0].Benefits.minimumPurchase : activeTermIndex === 1 ? curItem.invest_types[1].Benefits.minimumPurchase : curItem.invest_types[2].Benefits.minimumPurchase }
                    </h6>
                    <h6 className='text-xs text-[#6E737F] mr-1'>max discount {activeTermIndex === 0 ? curItem.invest_types[0].Benefits.totalDiscount : activeTermIndex === 1 ? curItem.invest_types[1].Benefits.totalDiscount : curItem.invest_types[2].Benefits.totalDiscount }</h6>
                </div>
                <div>
                    <Image src='/investNowImages/organic-chef.svg' height='40' width='40' alt='' className='' />
                </div>
            </div>
            <div className='flex items-center'>
                <span className='text-[20px] font-semibold text-[#BEBEBF] inline-block px-3'>3</span>
                <div className='flex-1'>
                    <h3 className='text-base font-semibold text-[#2A2B39]'>Soil sense</h3>
                    <h6 className='text-xs text-[#6E737F] pr-1'>Performance Tracking and Premium Soil Sense Subscription</h6>
                </div>
                <div>
                    <Image src='/investNowImages/soil-sense.svg' height='40' width='40' alt='' className='' />
                </div>
            </div>
            <div className='flex items-center'>
                <span className='text-[20px] font-semibold text-[#BEBEBF] inline-block px-3'>4</span>
                <div className='flex-1'>
                    <h3 className='text-base font-semibold text-[#2A2B39]'>Ownership</h3>
                    <h6 className='text-xs text-[#6E737F] pr-1'>Get virtual ownership of the land</h6>
                </div>
                <div>
                    <Image src='/investNowImages/ownership.svg' height='40' width='40' alt='' className='' />
                </div>
            </div>
            <div className='flex items-center'>
                <span className='text-[20px] font-semibold text-[#BEBEBF] inline-block px-3'>5</span>
                <div className='flex-1'>
                    <h3 className='text-base font-semibold text-[#2A2B39]'>Voting rights</h3>
                    <h6 className='text-xs text-[#6E737F] pr-1'>Get virtual ownership of the land</h6>
                </div>
                <div>
                    <Image src='/investNowImages/voting.svg' height='40' width='40' alt='' className='' />
                </div>
            </div>
            </section>
        </div>
        </>
    )
};
export default BenefitCard;