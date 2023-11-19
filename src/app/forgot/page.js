"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import { VscVerifiedFilled } from 'react-icons/vsc';

const Page = () => {
    const [phoneNumErrorMsg, setphoneNumErrorMsg] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);
    const [showSendOtp, setShowSendOtp] = useState(false);
    const [showResendOtp, setShowResendOtp] = useState(false);
    const [resendOtpTiming, setResendOtpTiming] = useState(60);
    const [otpFieldVal, setOtpFieldVal] = useState('');
    const [showOtpVerify, setShowOtpVerify] = useState(false);
    const [showOtpVerified, setShowOtpVerified] = useState(false);
    const [otpErrorMsg, setOtpErrorMsg] = useState('');
    const [fieldInfo, setfieldInfo] = useState({
        phoneNumField: '',
    });

    const phoneNumFieldHandleChange = (value, country, countryCode, e) =>
    {
        const numberDetails = e.split(' ');
        const country_code = numberDetails[0];
        const phone_num = value.slice(country_code.length-1);

        setfieldInfo({
            ...fieldInfo,
            countryCode : country_code,
            phoneNumField : phone_num
        })

        if (value.length >= 12)
        {
            !showOtpVerified ? setShowSendOtp(true) : ''
            setphoneNumErrorMsg('');
        }
        else
        {
            setShowSendOtp(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let phoneVerified = false;

        !fieldInfo.phoneNumField.length
            ? setphoneErrorMsg('This field cannot be empty')
            : fieldInfo.phoneNumField.length < 10
            ? setphoneErrorMsg('Invalid phone number')
            : (setphoneErrorMsg(''), (phoneVerified = true));

        if (phoneVerified) {
            toast.success('We have sent an OTP on this number', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        } else {
            toast.error('Please enter a valid phone number', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    };

    return (
        <>
            <section className='w-[84vw] mx-auto grid place-items-center py-10'>
                <section className='w-full md:w-[50vw] lg:w-[30vw] bg-white py-10 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] px-4 md:px-10'>
                    <div className='bg-yello-300 flex flex-col items-center space-y-4'>
                        <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='150' width='150' className='-ml-4' alt='image' />
                        <h1 className='text-3xl font-medium text-[#333333]'>Forgot Password</h1>
                        <p className='text-[13px] font-medium text-center'>Enter your phone number and we will send an otp to reset your password.</p>
                    </div>
                    <section className='mt-8'>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            {/* <label htmlFor='phoneNumField'>
                                <input
                                    type='number'
                                    name='phoneNumField'
                                    id='phoneNumField'
                                    onChange={handleChange}
                                    value={fieldInfo.phoneNumField}
                                    maxLength={10}
                                    placeholder='Phone Number'
                                    className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4'
                                />
                                <p className='text-xs text-[#f91c1c] font-medium'>{phoneErrorMsg}</p>
                            </label> */}

                            <div className='w-full space-y-2'>
                                <label htmlFor="phoneNumField" className='text-xs font-semibold text-[#9a9a9a] block'>Phone Number <span className='text-red-500'>*</span></label>
                                <PhoneInput
                                    name="phoneNumField" id="phoneNumField"
                                    onChange={phoneNumFieldHandleChange}
                                    country={'in'}
                                    countryCodeEditable={false}
                                    inputStyle={{ width: 'inherit' }}
                                />
                                <div className='flex items-center'>
                                    <p className='text-xs text-[#f91c1c] font-medium flex-1'>{phoneNumErrorMsg}</p>
                                    {showSendOtp && (
                                        <span onClick={handleSendOtp} className='bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-md cursor-pointer'>Send OTP</span>
                                    )}
                                    {showResendOtp && (
                                        <p className='text-xs text-[#f91c1c] font-medium'>Resend OTP in {resendOtpTiming} seconds</p>
                                    )}
                                    {showOtpVerified && (
                                        <VscVerifiedFilled className='text-lg text-green-500' />
                                    )}
                                </div>
                            </div>
                            {showOtpField && (<div className='w-full space-y-2'>
                                <label htmlFor="otpField" ></label>
                                <input type='text' name="otpField" id="otpField" onChange={otpFieldhandleChange} value={otpFieldVal} maxLength={6} placeholder='Enter OTP' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4' />
                                <div className='flex items-center'>
                                    <p className='text-xs text-[#f91c1c] font-medium flex-1'>{otpErrorMsg}</p>
                                    {showOtpVerify && (
                                        <span onClick={verifyOtp_api} className='bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-md cursor-pointer'>Verify</span>
                                        )}
                                </div>
                            </div>)}

                            <div className='pt-6'>
                                <button className='w-full h-[8vh] text-white text-lg rounded-md bg-[#1890c9]'>Continue</button>
                            </div>
                        </form>

                        <div className='mt-6 flex justify-center'>
                            <Link href='/login' className='text-sm text-center text-blue-500'>
                                Back to Login Page
                            </Link>
                        </div>
                    </section>
                </section>
                <section className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] flex justify-between text-base font-bold text-[#2d333a] mt-16 px-6'>
                    <Link href='/#inquiryForm' className='hover:underline hover:text-green-500'>Support</Link>
                    <Link href='/legal-rights/terms-&-conditions' className='hover:underline hover:text-green-500'>T&C</Link>
                    <Link href='/legal-rights/privacy-policy' className='hover:underline hover:text-green-500'>Privacy Policy</Link>
                </section>
            </section>
        </>
    );
};
export default Page;
