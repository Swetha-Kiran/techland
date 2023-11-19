import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const InvestmentCard = ({curItem, activeTermIndex, setActiveTermIndex}) =>
{
    const Terms = [
        "Short Term",
        "Mid Term",
        "Long Term"
      ];

    const handleTermChange = (index) => {
        setActiveTermIndex(index);
      };

return (
    <>
        <div className='lg:w-[40%] w-[100%] bg-yellw-200 h-auto space-y-4'>
            <h5 className='text-[#6E737F] text-xl font-medium text-center'>Investment</h5>
            <section className='bg-[#fcfdff] rounded-[20px] w-full h-auto px-3 py-2 space-y-7 2xl:space-y-10 shadow-[0_0_2px_0_rgba(0,0,0,0.3)]'>
                <section className='space-y-2 2xl:space-y-3'>
                    <h6 className='text-xs font-medium text-[#6E737F] tracking-wider'>Your Investment</h6>
                        <div className='w-full flex px-6'>
                            <span className='w-[32px] h-[32px] rounded-xl bg-[#428358] inline-grid place-items-center'><AiOutlinePlus className='text-white text-lg 2xl:text-xl font-medium' /></span>
                            <p className='text-base font-semibold flex-1 text-center'>TLT {curItem.amount}</p>
                            <span className='w-[32px] h-[32px] rounded-xl bg-[#428358] inline-grid place-items-center'><AiOutlineMinus className='text-white text-lg 2xl:text-xl font-medium' /></span>
                        </div>
                </section>
                <section className='space-y-2 2xl:space-y-3'>
                    <h6 className='text-xs font-medium text-[#6E737F] tracking-wider'>Investment Type</h6>
                    <div className='w-full'>
                        <ul className='w-[inherit] flex bg-[#f7f9fc] text-[#bebebf] text-xs font-medium rounded-xl'>
                            {
                            Terms.map((buttonText, index) => (
                            <li key={index} className='w-1/3'>
                                <button
                                className={`w-full h-[34px] ${
                                index === activeTermIndex ? 'bg-[#428358] text-[#f7f9fc]' : ''}
                                ${
                                index === 0 ? 'rounded-l-xl' : ''
                                }
                                ${
                                index === Terms.length - 1 ? 'rounded-r-xl' : ''
                                }
                                `}
                                onClick={() => handleTermChange(index)}>
                                {buttonText}
                                </button>
                            </li>
                            ))
                            }
                        </ul>
                    </div>
                </section>
                <section className='space-y-2 2xl:space-y-3'>
                    <h6 className='text-xs font-medium text-[#6E737F] tracking-wider'>Number Of Months</h6>
                    <div className='w-full bg-[#e6e0e9] h-1 rounded flex items-center'>
                        <div className={`
                            ${activeTermIndex === 0 ? 'w-[calc(0%-5px)]' :
                            activeTermIndex === 1 ? 'w-[calc(50%-5px)]' :
                            'w-[calc(100%-5px)]' }
                            h-full bg-[#428358] rounded`}></div>
                            <div className={`w-[10px] h-[10px] bg-red-800 rounded-full`}></div>
                        </div>
                        <div className='text-[10px] text-[#bebebf] flex justify-between'>
                            <span className={`${activeTermIndex === 0 ? 'font-semibold text-[#2B5743] text-sm' : ''}`}>{curItem.invest_types[0].timePeriod}</span>
                            <span className={`${activeTermIndex === 1 ? 'font-semibold text-[#2B5743] text-sm' : ''}`}>{curItem.invest_types[1].timePeriod}</span>
                            <span className={`${activeTermIndex === 2 ? 'font-semibold text-[#2B5743] text-sm' : ''}`}>{curItem.invest_types[2].timePeriod}</span>
                        </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-between'>
                            <span className='text-sm font-medium tracking-wider text-[#6E737F]'>Annual Percentage Rate(APR)</span>
                            <span className='text-base font-semibold text-[#2B5743]'>{activeTermIndex == 0 ? curItem.invest_types[0].interestRate : activeTermIndex == 1 ? curItem.invest_types[1].interestRate : curItem.invest_types[2].interestRate}%</span>
                        </div>
                        <div className='w-full flex justify-between'>
                            <span className='text-sm font-medium tracking-wider text-[#6E737F]'>Estimate APR Returns</span>
                            <span className='text-base font-semibold text-[#2B5743]'>{activeTermIndex == 0 ? curItem.invest_types[0].estimatedReturns.toFixed(2) : activeTermIndex == 1 ? curItem.invest_types[1].estimatedReturns.toFixed(2) : curItem.invest_types[2].estimatedReturns.toFixed(2)} TLT</span>
                        </div>
                        <div className='w-full flex justify-between'>
                            <span className='text-sm font-medium tracking-wider text-[#6E737F]'>Total Return</span>
                            <span className='text-base font-semibold text-[#2B5743]'>{activeTermIndex == 0 ? (curItem.invest_types[0].estimatedReturns + curItem.amount).toFixed(2) : activeTermIndex == 1 ? (curItem.invest_types[1].estimatedReturns + curItem.amount).toFixed(2) : (curItem.invest_types[2].estimatedReturns + curItem.amount).toFixed(2) } TLT</span>
                        </div>
                        <div className='w-full flex justify-between'>
                            <span className='text-sm font-medium tracking-wider text-[#6E737F]'>TLT Land Area</span>
                            <span className='text-base font-semibold text-[#2B5743]'>{activeTermIndex == 0 ? (curItem.invest_types[0].estimatedReturns + curItem.amount).toFixed(2) : activeTermIndex == 1 ? (curItem.invest_types[1].estimatedReturns + curItem.amount).toFixed(2) : (curItem.invest_types[2].estimatedReturns + curItem.amount).toFixed(2) } cm<sup>2</sup> </span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </>
)
};

export default InvestmentCard;