"use client"
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { BiShow, BiHide } from 'react-icons/bi';
import { VscVerifiedFilled } from 'react-icons/vsc';
import UserContext from '../../../Context/UserContext';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FieldsValidation from './fieldsValidation';
import Validation_Comp from './validation_Comp';
import LoginWithSocialMedia from './loginWithSocialMedia';
import PhoneNumValidation from './phoneNumValidation';
import { useSignupContext } from './signupContext';

const Page = () =>
{
    const { userInfo, setUserInfo } = useContext(UserContext);
    const { handleChange, handleSubmit } = FieldsValidation();
    const { phoneNumFieldHandleChange, otpFieldhandleChange, handleSendOtp, verifyOtp_api } = PhoneNumValidation();
    const {
        firstNameErrorMsg,
        lastNameErrorMsg,
        dateErrorMsg,
        monthErrorMsg,
        yearErrorMsg,
        phoneNumErrorMsg,
        emailErrorMsg,
        passwordErrorMsg,
        cnfrmpasswordErrorMsg,
        showOtpField,
        showSendOtp,
        showResendOtp,
        resendOtpTiming,
        otpFieldVal,
        showOtpVerify,
        otpErrorMsg,
        showOtpVerified,
    } = useSignupContext();

    const [showPassword, setShowPassword] = useState(false);
    const [cnfrmShowPassword, setcnfrmShowPassword] = useState(false);
    const [signupButtonDisability, setsignupButtonDisability] = useState(true);

    const showPasswordFun = () =>
    {
        setShowPassword(!showPassword);
    }

    const showCnfrmPasswordFun = () =>
    {

        setcnfrmShowPassword(!cnfrmShowPassword);
    }

    return (
        <>
            <section className='grid place-items-center py-10'>
                 <section className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] bg-white py-10 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] px-6 sm:px-10">

                    {/* Login with google and facebook */}
                    <LoginWithSocialMedia />
                    <section className='mt-8'>
                        <h1 className='text-3xl font-medium text-[#333333] text-center mb-6'>Create Account</h1>
                       <form action="" onSubmit={handleSubmit} className='space-y-4'>
                            <div className='flex justify-between'>
                                <div className='w-[45%] space-y-2'>
                                    <label htmlFor="firstNameField" className='text-xs font-semibold text-[#9a9a9a] block'>First Name <span className='text-red-500'>*</span> </label>
                                    <input type="text" name="firstNameField" id="firstNameField" onChange={handleChange} value={userInfo.firstNameField} placeholder='First Name' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                    <p className='text-xs text-[#f91c1c] font-medium'>{firstNameErrorMsg}</p>
                                </div>
                                <div className='w-[45%] space-y-2'>
                                    <label htmlFor="lastNameField" className='text-xs font-semibold text-[#9a9a9a] block'>Last Name <span className='text-red-500'>*</span> </label>
                                    <input type="text" name="lastNameField" id="lastNameField" onChange={handleChange} value={userInfo.lastNameField} placeholder='Last Name' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                    <p className='text-xs text-[#f91c1c] font-medium'>{lastNameErrorMsg}</p>
                                </div>
                            </div>
                            <div>
                                <div className='text-xs font-semibold text-[#9a9a9a]'>Birth Date <span className='text-red-500'>*</span></div>
                                <section className='flex justify-between'>
                                    <div className='w-[30%] space-y-2 max-h-fit'>
                                        <label htmlFor="dateField"></label>
                                        <input type='text' name="dateField" id="dateField" onChange={handleChange} value={userInfo.dateField} placeholder='Date' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                        <p className='text-xs text-[#f91c1c] font-medium'>{dateErrorMsg}</p>
                                    </div>
                                    <div className='w-[30%] space-y-2 max-h-fit'>
                                        <label htmlFor="monthField"></label>
                                        <input type="text" name="monthField" id="monthField" onChange={handleChange} value={userInfo.monthField} placeholder='Month' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                        <p className='text-xs text-[#f91c1c] font-medium'>{monthErrorMsg}</p>
                                    </div>
                                    <div className='w-[30%] space-y-2 max-h-fit'>
                                        <label htmlFor="yearField"></label>
                                        <input type="text" name="yearField" id="yearField" onChange={handleChange} value={userInfo.yearField} placeholder='Year' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                        <p className='text-xs text-[#f91c1c] font-medium'>{yearErrorMsg}</p>
                                    </div>
                                </section>
                            </div>
                            <div className='w-full space-y-2'>
                                <label htmlFor="phoneNumField" className='text-xs font-semibold text-[#9a9a9a] block'>Phone Number <span className='text-red-500'>*</span></label>
                                <PhoneInput
                                    name="phoneNumField" id="phoneNumField"
                                    onChange={phoneNumFieldHandleChange}
                                    country={'in'}
                                    countryCodeEditable={false}
                                    inputStyle={{ width: 'inherit' }}
                                />
                                {/* <input type='tel' name="phoneNumField" id="phoneNumField" onChange={handleChange} value={userInfo.phoneNumField} maxLength={10} placeholder='Phone Number' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' /> */}
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
                            <div className='w-full space-y-2'>
                                <label htmlFor="emailField" className='text-xs font-semibold text-[#9a9a9a] block'>Email <span className='text-red-500'>*</span> </label>
                                <input type='email' name="emailField" id="emailField" onChange={handleChange} value={userInfo.emailField} placeholder='Email' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                <p className='text-xs text-[#f91c1c] font-medium'>{emailErrorMsg}</p>
                            </div>

                            <div className='w-full space-y-2'>
                                <label htmlFor="passField" className='text-xs font-semibold text-[#9a9a9a] block'>Create Password <span className='text-red-500'>*</span> </label>
                                <div className='flex items-center relative'>
                                    <input type={showPassword ? 'text' : 'password'} name="passField" id="passField" onChange={handleChange} value={userInfo.passField} placeholder='Password' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4 text-xs' />
                                    {showPassword ? <BiShow className='absolute right-4 text-xl cursor-pointer' onClick={showPasswordFun} /> : <BiHide className='absolute right-4 text-xl cursor-pointer' onClick={showPasswordFun} />}
                                </div>
                                <p className='text-xs text-[#f91c1c] font-medium'>{passwordErrorMsg}</p>
                            </div>

                            {/* Component of checking password validation */}
                                <Validation_Comp />

                            <div className='w-full space-y-2'>
                                <label htmlFor="cnfrmpassField" className='text-xs font-semibold text-[#9a9a9a] block'>Confirm Password <span className='text-red-500'>*</span> </label>
                                <div className='flex items-center relative'>
                                    <input type={cnfrmShowPassword ? 'text' : 'password'} name="cnfrmpassField" id="cnfrmpassField" onChange={handleChange} value={userInfo.cnfrmpassField} placeholder='Confirm Password' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4 text-xs' />
                                    {cnfrmShowPassword ? <BiShow className='absolute right-4 text-xl cursor-pointer' onClick={showCnfrmPasswordFun} /> : <BiHide className='absolute right-4 text-xl cursor-pointer' onClick={showCnfrmPasswordFun} />}
                                </div>
                                <p className='text-xs text-[#f91c1c] font-medium'>{cnfrmpasswordErrorMsg}</p>
                            </div>

                            <div className='space-x-4 flex pt-6'>
                                <input type="checkbox" name="privacyPolicy" id="privacyPolicy" onClick={() => setsignupButtonDisability(!signupButtonDisability)} />
                                <span className='text-xs text-[#9a9a9a]'>I read and understand all Techland&apos;s
                                    <Link href='/legalRightsPDF/terms-and-conditions.pdf' target="_main" className='text-[#1890c9] underline ml-1'>Terms of Use</Link> with
                                    <Link href='/legalRightsPDF/privacy-policy.pdf' target="_main" className='text-[#1890c9] underline ml-1'>Privacy Policy</Link> and
                                    <Link href='/legalRightsPDF/end-user-license-agreement.pdf' target="_main" className='text-[#1890c9] underline ml-1'>end user License Agreement</Link> and give my concern for it.
                                </span>
                            </div>
                            <div className=''>
                                <button disabled={signupButtonDisability} className='w-full h-[8vh] text-white text-lg rounded-md' style={ signupButtonDisability ? {backgroundColor: '#99c7e7'} : {backgroundColor: '#1890c9'} } >Create Account</button>
                            </div>
                       </form>

                        <div className='mt-6'>
                            <p className='text-sm text-[#9a9a9a] text-center'>Already have an account ? <Link href='/login' className='text-blue-500 underline'>Login</Link></p>
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