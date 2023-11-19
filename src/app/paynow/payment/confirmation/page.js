"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';
import httptl from '@/app/utils/httptl';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Payment_Confirmation = () =>
{
    const router = useRouter();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verify_qr_payment = async () =>
        {
            const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
            const api_url = `${base_url}${API_ENDPOINTS_TL.VERIFY_QR_PAYMENT}`;

            try
            {
                const response = await httptl.get(api_url, {
                    headers: {
                        includeAuthorizationToken : true,
                        },
                });

                console.log("VERIFY QR PAYMENT api response", response.data);

                if(response.data.success === true)
                {
                    setPaymentSuccess(true);
                }
                else
                {
                    setPaymentSuccess(false);
                }
                setLoading(false);
            }
            catch (error)
            {
                setPaymentSuccess(false);
                console.log("VERIFY QR PAYMENT api error", error);
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
                setLoading(false);
            }
        };
        verify_qr_payment();
    }, []);

    return (
        <>
            {/* //For successful payments dispaly the below div - conditionally */}

            <section className='w-full md:w-[85%] h-auto mx-auto px-2 md:px-6 lg:px-16 py-4  bg-[#FCFDFF] mt-5 rounded-3xl shadow-custom space-y-[2vh]'>

            {!loading  ?
                <>
                {paymentSuccess ? <div className='w-full  flex flex-col items-center justify-center space-y-5 px-6 m-auto mt-0 object-cover'>
                        <Image className="lg:w-[30vw] lg:h-[38vh]" src="/paymentPageImages/success.svg" alt="sucess" width="514" height="299"/>
                        <p className='text-[#16A34A] font-extrabold text-2xl text-center'>Successful Payment </p>
                        <p className='text-[#858585] font-semibold text-[18px] text-center sm:w-[70%] lg:w-[50%]'>We will verify your payment within 2-3 business days and credit your account with the funds. Please feel free to contact us if you encounter any issues. </p>
                        <Link href='/' className='px-8 py-2 2xl:px-12 2xl:py-4 rounded-[44px] bg-[#2A2B39] text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold'>Go to Home</Link>
                    </div>
                    :
                    <div className='w-full h-full flex flex-col items-center justify-center space-y-6 px-6 py-4'>
                        <Image src="/paymentPageImages/failed.svg" alt="failure" width="514" height="299"/>
                        <p className='text-[#16A34A] font-extrabold text-2xl text-center'>Failed to Pay</p>
                        <p className='text-[#858585] font-semibold text-[18px] text-center'>Your Payment is not complete! <br />
                        Contact our technical support </p>
                    </div>
                    }
                </>
            :
            <div className='w-full h-full flex items-center justify-center'>
                <Image src='/paymentPageImages/loader.svg' width={100} height={100} alt='qr code loader image' className='w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%]' />
            </div>
            }
            </section>
        </>
        );
};
export default Payment_Confirmation;