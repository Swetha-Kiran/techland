"use client"
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { BiShow, BiHide } from 'react-icons/bi';
import { VscVerifiedFilled } from 'react-icons/vsc';
import UserContext from '../../../Context/UserContext';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import LoginWithSocialMedia from '../signup/loginWithSocialMedia';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';
import Image from 'next/image';

const Page = () =>
{
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [cnfrmShowPassword, setcnfrmShowPassword] = useState(false);
    const [signupButtonDisability, setsignupButtonDisability] = useState(true);

    const [firstNameErrorMsg, setfirstNameErrorMsg] = useState('');
    const [lastNameErrorMsg, setlastNameErrorMsg] = useState('');
    const [phoneNumErrorMsg, setphoneNumErrorMsg] = useState('');
    const [emailErrorMsg, setemailErrorMsg] = useState('');
    const [passwordErrorMsg, setpasswordErrorMsg] = useState('');
    const [cnfrmpasswordErrorMsg, setcnfrmpasswordErrorMsg] = useState('');

    const { login } = useContext(UserContext);

    const [userInfo, setUserInfo] = useState({
        firstNameField : '',
        lastNameField : '',
        emailField : '',
        passField : '',
        cnfrmpassField : '',
        phoneNumField : '',
        countryCode : '',
    })
    // console.log("user details object", userInfo);

    const phoneNumFieldHandleChange = (value, country, countryCode, e) =>
    {
        const numberDetails = e.split(' ');
        const country_code = numberDetails[0];
        const phone_num = value.slice(country_code.length-1);

        setUserInfo({
            ...userInfo,
            countryCode : country_code,
            phoneNumField : phone_num
        })

        if (value.length >= 12)
        {
            setphoneNumErrorMsg('');
        }
    }
    const showPasswordFun = () =>
    {
        setShowPassword(!showPassword);
    }

    const showCnfrmPasswordFun = () =>
    {

        setcnfrmShowPassword(!cnfrmShowPassword);
    }
    const handleChange = (e) =>
    {
        // console.log("current element", e.target.name);

        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const signup_api = async () =>
            {
                const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
                const api_url = `${base_url}${API_ENDPOINTS_TL.USER_SIGNUP2}`;
                    const item = {
                        "firstname": userInfo.firstNameField,
                        "lastname": userInfo.lastNameField,
                        "email": userInfo.emailField,
                        "countryCode": userInfo.countryCode,
                        "phone": userInfo.phoneNumField,
                        "password": userInfo.passField,
                    };

                try
                {
                    const response = await fetch(api_url, {
                        method: 'POST',
                        headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(item)
                    })
                    const result = await response.json();
                    console.log("Syed signup api success result: ", result);

                    if (result.success === true)
                    {
                        toast.success("Your account is created successfully.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        login(result.data.token);
                        router.push('/');
                    }
                    else
                    {
                        toast.warning(result.data, {
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
                    console.log("Syed signup api error: ", error);
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

        let verifiedPassword = false;
        let verifiedPhoneNum = false;

        if (userInfo.passField.length >= 8)
        {
            if (userInfo.passField === userInfo.cnfrmpassField)
            {
                verifiedPassword = true;
                setpasswordErrorMsg("");
            }
            else
            {
                setpasswordErrorMsg("Passwords do not match");
            }
        }
        else
        {
            setpasswordErrorMsg("Password must be minimum 8 characters long");
        }

        if (userInfo.phoneNumField.length >= 7 && userInfo.phoneNumField.length <= 15)
        {
            verifiedPhoneNum = true;
            setphoneNumErrorMsg('');
        }
        else
        {
            setphoneNumErrorMsg('Invalid phone number');
        }

        if (verifiedPassword && verifiedPhoneNum)
        {
            signup_api();
        }
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
                                    <input required type="text" name="firstNameField" id="firstNameField" onChange={handleChange}  placeholder='First Name' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                    <p className='text-xs text-[#f91c1c] font-medium'>{firstNameErrorMsg}</p>
                                </div>
                                <div className='w-[45%] space-y-2'>
                                    <label htmlFor="lastNameField" className='text-xs font-semibold text-[#9a9a9a] block'>Last Name <span className='text-red-500'>*</span> </label>
                                    <input required type="text" name="lastNameField" id="lastNameField" onChange={handleChange}  placeholder='Last Name' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                    <p className='text-xs text-[#f91c1c] font-medium'>{lastNameErrorMsg}</p>
                                </div>
                            </div>

                            <div className='w-full space-y-2'>
                                <label htmlFor="phoneNumField" className='text-xs font-semibold text-[#9a9a9a] block'>Phone Number <span className='text-red-500'>*</span></label>
                                <PhoneInput
                                    name="phoneNumField" id="phoneNumField"
                                    onChange={phoneNumFieldHandleChange}
                                    country={'in'}
                                    countryCodeEditable={false}
                                    inputStyle={{ width: 'inherit' }}
                                    required
                                />
                                {/* <input type='tel' name="phoneNumField" id="phoneNumField" onChange={handleChange} value={userInfo.phoneNumField} maxLength={10} placeholder='Phone Number' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' /> */}
                                <div className='flex items-center'>
                                    <p className='text-xs text-[#f91c1c] font-medium flex-1'>{phoneNumErrorMsg}</p>
                                </div>
                            </div>
                            <div className='w-full space-y-2'>
                                <label htmlFor="emailField" className='text-xs font-semibold text-[#9a9a9a] block'>Email <span className='text-red-500'>*</span> </label>
                                <input required type='email' name="emailField" id="emailField" onChange={handleChange}  placeholder='Email' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-2 text-xs' />
                                <p className='text-xs text-[#f91c1c] font-medium'>{emailErrorMsg}</p>
                            </div>

                            <div className='w-full space-y-2'>
                                <label htmlFor="passField" className='text-xs font-semibold text-[#9a9a9a] block'>Create Password <span className='text-red-500'>*</span> </label>
                                <div className='flex items-center relative'>
                                    <input required type={showPassword ? 'text' : 'password'} name="passField" id="passField" onChange={handleChange} placeholder='Password' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4 text-xs' />
                                    {showPassword ? <BiShow className='absolute right-4 text-xl cursor-pointer' onClick={showPasswordFun} /> : <BiHide className='absolute right-4 text-xl cursor-pointer' onClick={showPasswordFun} />}
                                </div>
                                <p className='text-xs text-[#f91c1c] font-medium'>{passwordErrorMsg}</p>
                            </div>

                            {/* Component of checking password validation */}

                            <div className='w-full space-y-2'>
                                <label htmlFor="cnfrmpassField" className='text-xs font-semibold text-[#9a9a9a] block'>Confirm Password <span className='text-red-500'>*</span> </label>
                                <div className='flex items-center relative'>
                                    <input required type={cnfrmShowPassword ? 'text' : 'password'} name="cnfrmpassField" id="cnfrmpassField" onChange={handleChange} placeholder='Confirm Password' className='w-full h-[6vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4 text-xs' />
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