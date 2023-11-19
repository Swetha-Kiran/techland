"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

const Page = () =>
{
    const [emailErrorMsg, setemailErrorMsg] = useState('');
    const [userInfo, setUserInfo] = useState(
        {
            emailField : '',
        }
    )

    const handleChange = (event) =>
    {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        console.log(fieldValue)
        setUserInfo({
            ...userInfo,
            [fieldName] : fieldValue
        })
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault()

        let emailVerified = false;
       // Regular expression pattern for validating email addresses
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Use the test() method to check if the email matches the pattern
        let mail_validation = pattern.test(userInfo.emailField);

        !userInfo.emailField.length ? setemailErrorMsg('this field can not be empty') : !mail_validation ? setemailErrorMsg('invalid email id') : (setemailErrorMsg(''), emailVerified = true)

        console.log(userInfo);

        if (emailVerified)
        {
            toast.success('We have sent an otp on the mail', {
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
        else
        {
            toast.error('Please enter a valid email', {
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
                <section className='w-[30vw] bg-white py-10 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] px-10'>
                    <div className='bg-yello-300 flex flex-col items-center space-y-4'>
                        <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='150' width='150' className='-ml-4' alt='image' />
                        <h1 className='text-3xl font-medium text-[#333333]'>Forgot Password</h1>
                        <p className='text-[13px] font-medium text-center'>Enter your email address and we will send a link on the mail to reset your password.</p>
                        <p className='text-xs text-[#f91c1c] font-medium'>Note:- This EMail must have been registered with administrative permissions in our database.</p>
                    </div>
                    <section className='mt-8'>
                       <form onSubmit={handleSubmit} className='space-y-4'>
                            <label htmlFor="">
                                <input type="email" name="emailField" id="mailField" onChange={handleChange} value={userInfo.emailField} placeholder='Email' className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4' />
                                <p className='text-xs text-[#f91c1c] font-medium'>{emailErrorMsg}</p>
                            </label>

                            <div className='pt-6'>
                                <button  className='w-full h-[8vh] text-white text-lg rounded-md bg-[#1890c9]' >Continue</button>
                            </div>
                       </form>

                        <div className='mt-6 flex justify-center'>
                           <Link href='/admin' className='text-sm text-center text-blue-500'>Back to Login Page</Link>
                        </div>
                    </section>
                </section>
                <section className='w-[30vw] flex justify-between text-base font-bold text-[#2d333a] mt-16 px-6'>
                    <Link href='/#inquiryForm' className='hover:underline hover:text-green-500'>Support</Link>
                    <Link href='/legal-rights/terms-&-conditions' className='hover:underline hover:text-green-500'>T&C</Link>
                    <Link href='/legal-rights/privacy-policy' className='hover:underline hover:text-green-500'>Privacy Policy</Link>
                </section>
            </section>
        </>
    )
};
export default Page;