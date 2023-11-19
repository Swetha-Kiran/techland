"use client";
import React, { useEffect, useState } from 'react';
import { PiMedalFill } from "react-icons/pi";
import { TbChartHistogram } from "react-icons/tb";
import Image from 'next/image';
import httptl from '@/app/utils/httptl';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';

const Page = () =>
{
    const [referralCode, setReferralCode] = useState('');
    const [clipboardText, setClipboardText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [referralHistory, setReferralHistory] = useState([]);
    const [totalEarnedBonus, setTotalEarnedBonus] = useState(0);

    const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode)
      .then(() => {
        setClipboardText('Text successfully copied to clipboard');
      })
      .catch(err => {
        setClipboardText('Unable to copy text to clipboard', err);
      });
  };

  const getReferralHistory = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL. GET_REFERRAL_HISTORY}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });

        console.log("GET REFERRAL HISTORY API RESPONSE", response);
        setIsLoading(false)

        if (response.data.success === true)
        {
            console.log("GET REFERRAL HISTORY API success true RESPONSE", response.data.data.referredUsers);

            setReferralHistory(response.data.data.referredUsers);
            setTotalEarnedBonus(response.data.data.totalEarnings)
        }
        else
        {
            console.log("GET REFERRAL HISTORY API success false RESPONSE", response);
        }
      }
      catch (error)
      {
        console.log("GET REFERRAL HISTORY API error", error);
        setIsLoading(false);
      }
    }
  };

  const getReferralCode = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.GET_REFERRAL_CODE}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });

        console.log("GET REFERRAL code API RESPONSE", response);

        if (response.data.success === true)
        {
            console.log("GET REFERRAL code API success true RESPONSE", response.data.data.referredUsers);

            setReferralCode(response.data.data.refferalCode);
        }
        else
        {
            console.log("GET REFERRAL code API success false RESPONSE", response);
        }
      }
      catch (error)
      {
        console.log("GET REFERRAL code API error", error);
      }
    }
  };

  useEffect(() =>
  {
    getReferralCode();
    getReferralHistory();
  }, []);

    return (
        <>
            <section className='bg-re-300 px-4 sm:px-8 md:px-12 w-full'>
                <div className='bg-yello-300 flex gap-x-3 items-center py-8 border-b-2 border-[#E9EBF3] border-solid'>
                <PiMedalFill className='text-3xl text-[#2a364f]'/>
                <p className='text-2xl font-semibold text-[#2a364f]'>Rewards and referrals</p>
                </div>

                <section className='bg-blu-300 py-8 xl:flex w-full justify-between space-y-4 xl:space-y-0'>
                   <section className='flex justify-around xl:justify-between xl:w-[30%]'>
                        <div className='bg-yello-300 xl:w-[50%] py-2 space-y-2'>
                            <p className='text-xl font-medium text-[#1b1b1b]'>Total Referred</p>
                            <p className='text-xl font-medium text-[#7B808B]'>{referralHistory.length}</p>
                        </div>
                        <div className='bg-yello-300 xl:w-[50%] py-2 space-y-2'>
                            <p className='text-xl font-medium text-[#1b1b1b]'>Total Earning</p>
                            <p className='text-xl font-medium text-[#7B808B]'>{totalEarnedBonus} TLT</p>
                        </div>
                   </section>
                    <div className="hidden xl:block w-[2px] py-7  bg-[#E9EBF3]"></div>
                    <section className='flex flex-col lg:flex-row xl:w-[60%] items-center lg:justify-between'>
                        <div className='bg-yello-300 sm:w-[70%] md:w-[60%] lg:w-[45%] py-2'>
                            <p className='text-xl font-medium text-[#7B808B]'>Copy your Referral code and share with your friens and you will get 99 TLT Bonus once they create account using your Referral code.</p>
                        </div>
                        <div className='bg-yello-300 sm:w-[70%] md:w-[60%] lg:w-[45%] py-2 space-y-2'>
                            <p className='text-xl font-medium text-[#1b1b1b]'>Your Referral Code</p>
                            <input
                            type="text"
                            id="referralCode"
                            readOnly
                            value={referralCode}
                            className="rounded-r-none rounded-[10px] px-4 py-1 border-2 border-r-0 border-black border-opacity-25 focus:outline-none  font-medium text-base text-[#7B808B]"
                            />
                            <button onClick={handleCopyClick} className='bg-green-500 px-4 border-2 border-green-500  py-1 rounded-l-none rounded-[10px] text-white text-base'>Copy</button>
                            <p className='text-xs text-[#f91c1c] font-medium'>{clipboardText}</p>
                        </div>
                    </section>
                </section>

                <section>
                    <div className='bg-yello-300 flex gap-x-3 items-center py-4'>
                        <TbChartHistogram className='text-3xl text-[#2a364f]'/>
                        <p className='text-2xl font-semibold text-[#2a364f]'>Referral History</p>
                    </div>

                    <section className='overflow-x-scroll scrollbar-hide'>
                        <table className='bg-re-300 w-full rounded-md border-2 border-black border-opacity-25'>
                        <thead className='bg-yello-300 pb-10' >
                            <tr className='mb-4 text-base 2xl:text-xl text-[#428358] font-medium flex opacity-70 justify-between gap-x-2 border-b- border-black border-opacity-25'>
                            <th className='bg-blu-300 w-[16vw] text-center' >Referred User Id</th>
                            <th className='bg-blu-300 w-[16vw] text-center'>Referred User First Name</th>
                            <th className='bg-blu-300 w-[16vw] text-center'>Referred User Last Name</th>
                            <th className='bg-blu-300 w-[9vw] text-center'>Amount</th>
                            <th className='bg-blu-300 w-[9vw] text-center'>Date</th>
                            </tr>
                        </thead>
                        <tbody >
                            {isLoading ?
                            <tr className='flex ml-20'>
                                <td>
                                    <Image src='/paymentPageImages/loader.svg' width={100} height={100} alt='qr code loader image' className='w-[30%] lg:w-[15%]' />
                                </td>
                            </tr>
                            :
                            referralHistory.length ?
                            referralHistory.map((curItem, index, array) =>
                            {
                            return (
                                <tr key={index} className='text-sm 2xl:text-lg text-[#428358] font-medium flex opacity-70 justify-between gap-x-2 border-t-2 border-black border-opacity-25'>
                                <td className='bg-blu-300 w-[16vw] text-center'>{curItem.referredUserId}</td>
                                <td className='bg-blu-300 w-[16vw] text-center'>{curItem.referredUserFirstName}</td>
                                <td className='bg-blu-300 w-[16vw] text-center'>{curItem.referredUserLastName}</td>
                                <td className='bg-blu-300 w-[9vw] text-center'>{curItem.amount}</td>
                                <td className='bg-blu-300 w-[9vw] text-center'>{curItem.date}</td>
                                </tr>
                            )
                            })
                            :
                            <tr className='bg-yello-300 flex justify-center mt-6'>
                                <td>
                                    <p className='text-xl 2xl:text-2xl text-[#2a364f] font-medium opacity-70 text center'>No data found</p>
                                </td>
                            </tr>
                            }
                        </tbody>
                        </table>
                    </section>
                </section>
            </section>
        </>
    )
};
export default Page;