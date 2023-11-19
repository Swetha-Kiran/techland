"use client"
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import UserContext from '../../../../Context/UserContext';

const Page = () =>
{
    const { userInfo, setUserInfo, login } = useContext(UserContext);
    const router = useRouter();
    // const searchParams = useSearchParams();

    const phonenum = userInfo.phoneNumField;
    console.log("Data object", userInfo);
    const last4digit = phonenum.slice(-4)

    const [otpErrorMsg, setotpErrorMsg] = useState('');
    const [userData, setUserData] = useState(
        {
            otpField : '',
        }
    )

    const handleChange = (event) =>
    {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let numericValue = fieldValue.replace(/\D/g, ''); // Remove non-numeric characters
            numericValue ? numericValue = numericValue : numericValue = '';
            console.log(fieldValue);
            console.log(numericValue);
            setUserData({
                ...userData,
                [fieldName] : numericValue.toString()
            })
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault()

        let otpVerified = false;
        userData.otpField.length == 0 ? setotpErrorMsg('this field can not be empty') : userData.otpField.length < 6 ? setotpErrorMsg('otp length should be 6 characters long') : (setotpErrorMsg(''), otpVerified = true);


        console.log(userData);

        if (otpVerified && userData.otpField == '897907')
        {
            toast.success('Account Created Successfully. Please Login', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                router.push('/login');
        }
        else
        {
            toast.error('Please enter a valid otp', {
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
        <>
            <section className='grid place-items-center py-10'>
                <section className='w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-white py-10 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] px-10'>
                    <div className='bg-yello-300 flex flex-col items-center space-y-4'>
                        <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='150' width='150' className='-ml-4' alt='image' />
                        <h1 className='xl:text-3xl md:text-2xl sm:text-xl font-medium text-[#333333]'>Verify Mobile Number</h1>
                        <p className='text-[13px] font-medium text-center'>{`Enter the OTP which is sent to your registered mobile number ******${last4digit}`}</p>
                    </div>
                    <section className='mt-8'>
                       <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='w-full space-y-2'>
                                <label htmlFor="otpField" ></label>
                                <input type='text' name="otpField" id="otpField" onChange={handleChange} value={userData.otpField} maxLength={6} placeholder='OTP' className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4' />
                                <p className='text-xs text-[#f91c1c] font-medium'>{otpErrorMsg}</p>
                            </div>

                            <div className='pt-6'>
                                <button  className='w-full h-[8vh] text-white text-lg rounded-md bg-[#1890c9]' >Continue</button>
                            </div>
                       </form>

                        <div className='mt-6 flex justify-center'>
                           <p className='text-sm text-[#9a9a9a] text-center'>Incorrect Phone number? <Link href='/signup' className='text-blue-500 underline'> Back to Signup Page</Link></p>
                        </div>
                    </section>
                </section>
                <section className='w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] flex justify-between text-base font-bold text-[#2d333a] mt-16 px-6'>
                    <Link href='/#inquiryForm' className='hover:underline hover:text-green-500'>Support</Link>
                    <Link href='/legal-rights/terms-&-conditions' className='hover:underline hover:text-green-500'>T&C</Link>
                    <Link href='/legal-rights/privacy-policy' className='hover:underline hover:text-green-500'>Privacy Policy</Link>
                </section>
            </section>
        </>
    )
};
export default Page;