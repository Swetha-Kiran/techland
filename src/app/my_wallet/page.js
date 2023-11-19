"use client";
import React, { useEffect, useState } from 'react';
import TransactionHistory from '../../../Components/userWallet/transactionhistory';
import Wallet from '../../../Components/userWallet/wallet';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';
import httptl from '../utils/httptl';

const My_Wallet = () =>
{
    const [walletBalance, setWalletBalance] = useState(0);
    const [tltValue, setTltValue] = useState(null);

    useEffect(() => {
        const getWalletBalance = async () =>
        {
            const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
            const api_url = `${base_url}${API_ENDPOINTS_TL.GET_WALLET_BALANCE}`;

            try
            {
            const response = await httptl.get(api_url, {
                headers: {
                    includeAuthorizationToken : true,
                    },
            });
            // console.log("get wallet balance api response", response);
            if(response.data.success == true)
            {
                setWalletBalance(response.data.data.balance)
                // console.log("get wallet balance api success response", response.data.data);
            }
            }
            catch (error)
            {
            console.log("get wallet balance api error", error);
            }
        };

        const getCurrentStage = async () =>
        {
            const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
            const api_url = `${base_url}${API_ENDPOINTS_TL.GET_CURRENT_STAGE}`;

            try
            {
            const response = await httptl.get(api_url, {
                headers: {
                    includeAuthorizationToken : false,
                    },
            });
            console.log("get current stage api response", response);
            if(response.data.success == true)
            {
                setTltValue(response.data.data.tlt_value);
                // console.log("get current stage api success response", response.data.data);
            }
            }
            catch (error)
            {
            console.log("get current stage api error", error);
            }
        };

    getWalletBalance();
    getCurrentStage();
    }, []);

    return (
        <section className='w-full py-4 2xl:py-6 px-4 lg:px-8 2xl:px-9 space-y-6 2xl:space-y-10'>
            <h1 className='text-3xl text-[#2B5743] text-center font-bold'>My Wallet</h1>
            <section className='bg-re-300 w-full flex md:justify-around flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row'>
                <TransactionHistory walletBalance={walletBalance} tltValue={tltValue} />
                <Wallet walletBalance={walletBalance} tltValue={tltValue} />
            </section>
        </section>
    );
};
export default My_Wallet;