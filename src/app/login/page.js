"use client"
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiShow, BiHide } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import UserAuthApis from '../signup/userAuthApis';

const Page = () =>
{
    const { login_api } = UserAuthApis();
    const [showPassword, setShowPassword] = useState(false);
    const [emailErrorMsg, setemailErrorMsg] = useState('');
    const [passwordErrorMsg, setpasswordErrorMsg] = useState('');
    const [loginButtonDisability, setloginButtonDisability] = useState(true);
    const [userData, setUserData] = useState(
        {
            emailField : '',
            passField : '',
        }
    )

    const showPasswordFun = () =>
    {
        setShowPassword(!showPassword);
    }

    const handleChange = (event) =>
    {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        setUserData({
            ...userData,
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
        let mail_validation = pattern.test(userData.emailField);

        !userData.emailField.length ? setemailErrorMsg('this field can not be empty') : !mail_validation ? setemailErrorMsg('invalid email id') : (setemailErrorMsg(''), emailVerified = true)

        let passwordVerified = false;
       if (userData.passField.length == 0)
       {
        setpasswordErrorMsg("this field can not be empty")

       }
       else if (userData.passField.length < 8)
       {
        setpasswordErrorMsg("password is too short: min character 8")
       }
       else if (userData.passField.length > 15)
       {
        setpasswordErrorMsg("password is too long: max character 15")
       }
       else
       {
        setpasswordErrorMsg("");
        passwordVerified = true;
       }

        if (emailVerified && passwordVerified)
        {
            login_api(userData);
        }
        else
        {
            toast.error('invalid username or password', {
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
            <section className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-white py-10 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] px-6 2xl:px-10'>
                    <div className='bg-yello-300 flex flex-col items-center space-y-4'>
                        <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='150' width='150' className='-ml-4' alt='image' />
                    </div>
                    {/* <div className='space-y-4 mt-6'>
                            <button className='w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-base text-[#2d333a] rounded-md text-left pl-4 hover:bg-green-300 duration-200'><FcGoogle className='inline text-xl mr-3'/>Continue with Google</button>
                            <button className='w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-base text-[#2d333a] rounded-md text-left pl-4 hover:bg-green-300 duration-200'><BsFacebook className='inline text-xl mr-3'/>Continue with Facebook</button>
                            <div className='flex justify-between items-center mt-4'>
                                <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
                                <span className='text-base text-[#9a9a9a]'>OR</span>
                                <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
                            </div>
                    </div> */}
                    <section className='mt-4'>
                        <h1 className='text-3xl font-medium text-[#333333] text-center mb-6'>Log In</h1>
                       <form onSubmit={handleSubmit} className='space-y-4'>
                            <label htmlFor="">
                                <input type="email" name="emailField" id="emailField" onChange={handleChange} value={userData.emailField} placeholder='Email' className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4' />
                                <p className='text-xs text-[#f91c1c] font-medium'>{emailErrorMsg}</p>
                            </label>
                            <label htmlFor="" className='flex relative items-center'>
                                <input type={showPassword ? 'text' : 'password'} name="passField" id="passField" onChange={handleChange} value={userData.passField} placeholder='Password' className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4' />
                                {showPassword ? <BiShow className='absolute right-4 text-xl cursor-pointer' onClick={showPasswordFun} /> : <BiHide className='absolute right-4 text-xl cursor-pointer' onClick={showPasswordFun} />}
                            </label>
                            <p className='text-xs text-[#f91c1c] font-medium'>{passwordErrorMsg}</p>

                            <div className='space-y-4'>
                                <div className='flex justify-end'>
                                    <Link href='/forgot' className='text-xs font-semibold text-[#1890c9]'>Forgot your password?</Link>
                                </div>
                                <div className='space-x-4 flex items-center'>
                                    <input type="checkbox" name="privacyPolicy" id="privacyPolicy" onClick={() => setloginButtonDisability(!loginButtonDisability)} className='w-[40px] h-[40px]' />
                                    <span className='text-xs text-[#9a9a9a]'>I read and understand all Techland&apos;s
                                        <Link href='/legalRightsPDF/terms-and-conditions.pdf' target="_main" className='text-[#1890c9] underline ml-1'>Terms of Use</Link> with
                                        <Link href='/legalRightsPDF/privacy-policy.pdf' target="_main" className='text-[#1890c9] underline ml-1'>Privacy Policy</Link> and
                                        <Link href='/legalRightsPDF/end-user-license-agreement.pdf' target="_main" className='text-[#1890c9] underline ml-1'>end user License Agreement</Link> and give my concern for it.
                                    </span>
                                </div>
                            </div>
                            <div className='pt-6'>
                                <button disabled={loginButtonDisability} className='w-full h-[8vh] text-white text-lg rounded-md' style={ loginButtonDisability ? {backgroundColor: '#99c7e7'} : {backgroundColor: '#1890c9'} } >Login</button>
                            </div>
                       </form>

                        <div className='mt-6'>
                            <p className='text-sm text-[#9a9a9a] text-center'>Don&apos;t have an account ? <Link href='/create-account' className='text-blue-500 underline'>Signup</Link></p>
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
    )
};
export default Page;