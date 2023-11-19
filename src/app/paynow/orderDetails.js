import React, { useState, useContext } from 'react';
import Image from 'next/image';
import PaymentContext from '../../../Context/paymentContext';
import { ToastContainer, toast } from 'react-toastify';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';
import Link from 'next/link';

import httptl from '../utils/httptl';

const OrderDetails = () =>
{
    const [couponCode, setCouponCode] = useState('');
    const [showDiscountedTLT, setShowDiscountedTLT] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const { paymentDetails, setPaymentDetailsFun } = useContext(PaymentContext);

    const item = {
        "couponCode": couponCode,
        "amount": paymentDetails.totalAmount,
        "type": 1
    }

    // console.log("Coupen code value", couponCode);
    console.log("payment details value from context provider", paymentDetails);

     const handleChange = (e) =>
     {
        setCouponCode(e.target.value);
        setErrMsg('');
     }

     const claimCouponCode = async () =>
     {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.CLAIM_COUPON_CODE}`;

        console.log("Item object", item);
        try {
            const response = await httptl.post(api_url, item, {
               headers: {
                   includeAuthorizationToken : true,
                   },
             });

             console.log('claim coupon code api response', response);

             if(response.data.success === true)
             {
                setShowDiscountedTLT(true);
                setErrMsg('Congrats You have got 100% Discount on TLT...🤑🤑🤑');
                setPaymentDetailsFun({
                    ...paymentDetails,
                    couponCode:couponCode,
                })
              toast.success('Congrats, your coupon is claimed', {
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
          catch (error)
          {
              console.log("error in claim coupon code api", error);

              setErrMsg('Coupon Code is invalid or expired');
              setShowDiscountedTLT(false);
              toast.error('Coupon Code is invalid or expired', {
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

    return (
        <section className='w-full md:w-[85%] h-auto mx-auto px-2 md:px-6 lg:px-16 py-6  bg-[#FCFDFF] mt-5 rounded-3xl shadow-custom space-y-8'>
             <div className='bg-re-300 w-full h-full space-y-4'>
                <p className='text-center font-bold text-xl md:text-2xl text-[#16A34A]'>Order Details</p>
                <div className='bg-blu-300 w-full md:w-[80%] h-full flex flex-col justify-center items-center space-y-14 md:m-auto px-2 md:px-6 py-6 border-2 border-black-300 rounded-xl '>
                    <div className='w-full flex flex-col space-y-4'>
                        <div className='w-full flex flex-row justify-between items-center '>
                            <p className='font-semibold text-sm md:text-[18px] text-[#2A2B39] text-center'>Quantity</p>
                            <p className='font-semibold text-sm md:text-[18px] text-[#2A2B39] text-center'>Sub Total</p>
                        </div>
                        <hr className='w-full h-[2px] bg-black-300' />
                        <div className='w-full flex flex-row justify-between items-center space-x-4'>
                            <div className='flex flex-row items-center justify-start space-x-4'>
                            <Image
                            src="/Home Page Images/Hero Section Images/TLT_circular.jpeg"
                            alt="tlt"
                            width="50"
                            height="50"
                            ></Image>
                                <p className='font-medium text-base 2xl:text-lg text-[#2A2B39]'>Total TLT</p>
                            </div>
                            <div className='flex flex-col items-center justify-start'>
                                {showDiscountedTLT ?
                                <p className='font-medium text-lg 2xl:text-xl text-[#535353]'>{2 * paymentDetails.totalTLT} TLT</p>
                                : ''
                                }
                                <p className={`font-medium text-lg 2xl:text-xl ${showDiscountedTLT ? 'line-through text-red-500' : 'text-[#535353]'}`} >{paymentDetails.totalTLT} TLT</p>
                            </div>
                        </div>
                        <section className='space-y-2'>
                            <div className='flex gap-x-3'>
                                <input
                                    type="text"
                                    id="couponCode"
                                    placeholder="Enter Coupon Code"
                                    onChange={(e) => handleChange(e)}
                                    className="flex-1 rounded-[10px] px-4 h-[42px] border-2 border-black border-opacity-25 focus:outline-none font-medium text-base "
                                />
                                <button onClick={claimCouponCode} className='px-4 py-2 2xl:px-6 2xl:py-4 rounded-[10px] bg-[#2A2B39] text-[#ffffff] text-base 2xl:text-lg font-semibold'>
                                Claim Coupon Code
                                </button>
                            </div>
                            <p className='text-xs text-[#f91c1c] font-medium'>{errMsg}</p>
                        </section>
                    </div>

                    <div className='w-full flex flex-row justify-between items-center space-x-4'>
                        <div className='flex flex-row items-center justify-start space-x-4'>
                            <p className='font-medium text-base md:text-xl text-[#2A2B39]'>Total Payable Amount</p>
                        </div>
                        <div className='flex flex-col items-center justify-start'>
                        <p className='font-medium text-[18px] text-[#535353]'>Rs {paymentDetails.totalAmount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-yello-300 flex justify-center'>
                <Link href='/paynow/payment'
                className="bg-green-500 text-white text-base 2xl:text-lg font-semibold px-4 py-2 rounded-[10px]">
                Confirm Order
                </Link>
            </div>
        </section>
    )
};
export default OrderDetails;