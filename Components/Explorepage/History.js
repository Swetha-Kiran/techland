"use client";
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";
import httptl from "@/app/utils/httptl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoX } from "react-icons/go";

const History = ({ closeModal }) => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    };

    useEffect(() => {
        const getTransactioHistory = async () =>
        {
            const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
            const api_url = `${base_url}${API_ENDPOINTS_TL.GET_TRANSACTION_HISTORY}`;

            try
            {
                const response = await httptl.get(api_url, {
                    headers: {
                        includeAuthorizationToken : true,
                        },
                })

                if(response.data.success === true)
                {
                    setTransactionHistory(response.data.data.userTransactions);
                    console.log("get transaction history api success response", response);
                }
            }
            catch (error)
            {
                console.log("get transaction history api error", error);
            }
        }

        getTransactioHistory();
    }, []);
    console.log(transactionHistory)
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.2)] px-4">
          <h2 className="text-2xl text-[#2B5743] font-medium">
            Transaction History
          </h2>
          <GoX className="text-5xl font-bold" onClick={closeModal} />
        </div>

        <div className='bg-yello-300 w-full space-y-3 mt-10'>
                        <h1 className='text-[#959595] text-base 2xl:text-lg font-bold'>All {transactionHistory?.length} Transactions</h1>
                        {
                            transactionHistory.map((curItem, index) => {
                                const dateObject = new Date(curItem.createdAt);
                                const formattedDate = dateObject.toLocaleDateString(undefined, options);
                                return (
                                    <div key={index} className='bg-white w-full h-auto rounded-[10px] px-2 sm:px-4 2xl:px-6 py-4 2xl:py-4 flex flex-col space-y-1 2xl:space-y-2'>
                                        <div className='2xl:space-y-2 flex'>
                                            <h6 className='text-[#2a2b39] text-xs 2xl:text-sm font-medium flex-1'>
                                                {curItem.operation === 'deposit' ? `TLT purchased of INR ${Math.abs(curItem.amount)}` : `Package Purchased of TLT ${Math.abs(curItem.amount)}`}
                                            </h6>
                                            <Image src='/myWalletImages/razorpay.svg' alt='razorpay logo' width={10} height={10} className='w-[20vw] md:w-[10vw] lg:w-[7vw] h-auto' />
                                        </div>
                                        <div className='flex flex-col sm:flex-row sm:items-center'>
                                            <h4 className='text-[#2a2b39] text-base 2xl:text-lg font-medium flex-1'>
                                            {curItem.operation === 'deposit' ? `${Math.abs(curItem.amount)} TLT deposits in your wallet` : `${Math.abs(curItem.amount)} TLT deducted from wallet`}
                                            </h4>
                                            <p className='text-[#2a2b39] text-xs 2xl:text-sm font-medium'>{formattedDate}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
      </div>
    </div>
  );
};

export default History;
