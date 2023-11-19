"use client";
import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';
import httptl from '@/app/utils/httptl';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import PopupModel from '../popupModel';
import PaymentContext from '../../../../Context/paymentContext';

const Paynow = ({params}) =>
{
    const router = useRouter();
    const [showPopUp, setShowPopUp] = useState(false);
    const [qrImageUrl, setQrImageUrl] = useState(null);
    const { paymentDetails } = useContext(PaymentContext);

    const amount = paymentDetails.totalAmount;

    // let decodedAmount = decodeURIComponent(atob(amount));
    // decodedAmount = +decodedAmount;
    // decodedAmount = decodedAmount.toFixed(2);

    const amountInfo = {
        "amount": paymentDetails.totalAmount,
        "couponCode": paymentDetails.couponCode,
    }
    console.log("Amount info object", amountInfo);

    useEffect(() =>
    {
        const handle_qr_payment = async () =>
        {
            const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
            const api_url = `${base_url}${API_ENDPOINTS_TL.PAYMENT_BY_QR}`;

            try
            {
                const response = await httptl.post(api_url, amountInfo, {
                    headers: {
                        includeAuthorizationToken : true,
                        },
                });

                console.log("payment By Qr api response", response.data);

                if(response.data.success === true)
                {
                    setQrImageUrl(response.data.qrCodeDataURL);
                }
            }
            catch (error)
            {
                console.log("payment by qr api error", error);
                toast.error("Something is wrong", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        }

        handle_qr_payment();
    }, []);

    return (
        <>
            {showPopUp && (<PopupModel popUpClose={() => setShowPopUp(!showPopUp)} />)}
        <section className='flex justify-center py-3 px-4'>
            <section className='bg-white w-full md:w-[60%] px-4 space-y-6 rounded-lg py-3'>
                <div className=' flex items-center flex-col w-full'>
                    <h3 className='text-base text-[#2a3b49] font-medium'>SN Silos Private limited</h3>
                    {qrImageUrl ?
                     <Image src={qrImageUrl} width={100} height={100} alt='qr code image' className='w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%]' />
                     : <Image src='/paymentPageImages/loader.svg' width={100} height={100} alt='qr code loader image' className='w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%]' />
                     }
                    <p className='text-sm text-[#2a3b49] font-medium'>Amount to be Paid: <span className='text-red-500 font-bold'>&#8377;{amount}</span></p>
                </div>

                <div className='flex flex-col space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor="amountField" className='text-base text-[#2a3b49] font-medium'>Amount Paid</label>
                        <input id='amountField' value={`${amount} /RS`} type="text" placeholder='Enter amount' className='bg-[#e3e1ee] w-full border rounded-md px-2 outline-none py-2 font-medium text-base' readOnly />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="instruction" className='text-base text-[#2a3b49] font-medium'>Instructions</label>
                        <div className='flex space-y-1 flex-col md:items-center'>
                            <p className='text-sm text-[#2a3b49] font-medium'>Step 1:- Scan the Qr code</p>
                            <p className='text-sm text-[#2a3b49] font-medium'>Step 2:- Pay Amount</p>
                            <p className='text-sm text-[#2a3b49] font-medium'>Step 3:- Click on &quot;Proceed To Next Step&quot; button</p>
                        </div>
                    </div>
                    <div className='flex justify-center pt-10'>
                        <button onClick={() => setShowPopUp(!showPopUp)} className='px-8 py-2 2xl:px-12 2xl:py-4 rounded-[44px] bg-[#2A2B39] text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold'>Proceed To Next Step</button>
                    </div>
                </div>
            </section>
        </section>
        </>
    );
};
export default Paynow;