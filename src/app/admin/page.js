"use client";
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiShow, BiHide } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import UserContext from '../../../Context/UserContext';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';

const Page = () =>
{
    const { admin_login } = useContext(UserContext);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [emailErrorMsg, setemailErrorMsg] = useState('');
    const [passwordErrorMsg, setpasswordErrorMsg] = useState('');
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
    // console.log("details object value", userData);

    const login_api = async () =>
            {
                const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
                const api_url = `${base_url}${API_ENDPOINTS_TL.ADMIN_LOGIN}`;
                    const item = {
                        "email": userData.emailField,
                        "password": userData.passField,
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
                    console.log("admin login api success result: ", result);

                    if (result.success === true)
                    {
                        toast.success("LoggedIn successfully", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        admin_login(result.data.token);
                        router.push('/admin/dashboard');
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
                    console.log("admin login api error: ", error);
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
            login_api();
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
                <section className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-white py-10 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] px-10'>
                    <div className='bg-yello-300 flex flex-col items-center space-y-4'>
                        <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='150' width='150' className='-ml-4' alt='image' />
                        <h1 className='text-3xl font-medium text-[#333333]'>Admin Panel</h1>
                        <p className='text-[13px] font-medium text-center'>You can login only if you have administrative permissions.</p>
                    </div>
                    <section className='mt-8'>
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

                            <div className='flex justify-between items-center'>
                                <div className='space-x-4 flex items-center'>
                                    <input type="checkbox" name="privacyPolicy" id="privacyPolicy" />
                                    <span className='text-xs text-[#9a9a9a]'>Remember Me</span>
                                </div>
                                <Link href='/admin/forgot' className='text-xs font-semibold text-[#1890c9]'>Forgot your password?</Link>
                            </div>
                            <div className='pt-6'>
                                <button className='w-full h-[8vh] text-white text-lg rounded-md bg-[#1890c9]' >Login</button>
                            </div>
                            <div className='mt-6 text-center'>
                                <Link href='/' className='text-[#2a364f] text-sm font-semibold'>Home</Link>
                            </div>
                       </form>

                    </section>
                </section>
            </section>
        </>
    )
};
export default Page;