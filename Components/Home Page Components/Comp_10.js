"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';
import httptl from '@/app/utils/httptl';
import { ToastContainer, toast } from 'react-toastify';

const Comp_10 = () =>
{
    const [fieldsValue, setFieldsValue] = useState({
    "name":"",
    "email":"",
    "phone":"",
    "message": "",
    })

    const handleChange = (e) =>
    {
        // console.log("fields value object", fieldsValue);

        setFieldsValue({
            ...fieldsValue,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log("fields value object", fieldsValue);

        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.USER_FEEDBACK}`;

        try
        {
            const response = await httptl.post(api_url, fieldsValue,  {
                headers: {
                    includeAuthorizationToken : false,
                    },
              });

              console.log("user feedback success response", response);
              if (response.data.success === true)
              {
                setFieldsValue({
                    "name":"",
                    "email":"",
                    "phone":"",
                    "message": "",
                    })
                toast.success(response.data.message, {
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
                toast.success(response.data.message, {
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
            console.log("user feedback error response", error.response.data.message);
            toast.success("Something unexpected happend, fill the fields carefully", {
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
              <div id='inquiryForm' className='w-full px-4 md:px-8 lg:px-[8vw] py-16 md:py-20'>
                <section className='space-y-3'>
                    <h1 className='text-4xl md:text-5xl  font-semibold text-center text-[#2a2b39]'>Have a doubt? Write Us</h1>
                    <p className='text-base md:text-lg lg:text-xl font-normal text-[#2a2b39] text-center'>We will respond at the earliest</p>
                </section>
                <div className='flex flex-col md:flex-row justify-between mt-10'>
                    <section className="bg-yello-300 w-full md:w-[37vw] h-full space-y-7 md:mr-6 lg:mr-12">
                        <h3 className='text-[#2a2b39] text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[40px] lg:leading-[55px] text-center md:text-left'>Schedule Your<br />Meeting With Experts</h3>
                        <p className='text-[#2a2b39] text-[14px] md:text-[18px] lg:text-[22px] font-semibold leading-[20px] text-center md:text-left'>Schedule 1 To 1 Consultation with our experts</p>

                        <div className="bg-blu-400 flex gap-x-4 items-start">
                            <Image src='Home Page Images/Comp_10 Images/check-icon.svg' height='25' width='25' alt='image' />
                            <p className='text-[18px] leading-[27px] font-normal text-[#6e737f]'>Understand the process of Digital KYC</p>
                        </div>
                        <div className="bg-blu-400 flex gap-x-4 items-start">
                            <Image src='Home Page Images/Comp_10 Images/check-icon.svg' height='25' width='25' alt='image' />
                            <p className='text-[18px] leading-[27px] font-normal text-[#6e737f]'>Get expert advice regarding any investment</p>
                        </div>
                        <div className="bg-blu-400 flex gap-x-4 items-start">
                            <Image src='Home Page Images/Comp_10 Images/check-icon.svg' height='25' width='25' alt='image' />
                            <p className='text-[18px] leading-[27px] font-normal text-[#6e737f]'>Understand TLT token system</p>
                        </div>
                        <div className="bg-blu-400 flex gap-x-4 items-start">
                            <Image src='Home Page Images/Comp_10 Images/check-icon.svg' height='25' width='25' alt='image' />
                            <p className='text-[18px] leading-[27px] font-normal text-[#6e737f]'>Company transparency with block chain smart contracts</p>
                        </div>
                        <div className="bg-blu-400 flex gap-x-4 items-start">
                            <Image src='Home Page Images/Comp_10 Images/check-icon.svg' height='25' width='25' alt='image' />
                            <p className='text-[18px] leading-[27px] font-normal text-[#6e737f]'>Understand measures are in place to protect investor’s personal and private information</p>
                        </div>
                    </section>

                    <form onSubmit={handleSubmit} className='w-full md:w-[45vw] lg:w-[34vw] bg-white py-7 px-6 rounded-xl mt-6 md:mt-0 space-y-6 shadow-[0_0_10px_0_rgba(0,0,0,0.3)]'>

                        <input type="text" name="name" value={fieldsValue.name} id="field1" onChange={handleChange} placeholder='Your Name' required className='bg-[#f8f8f8] text-[#495057] text-base font-normal border-[1px] w-full h-14 rounded-md border-[#bfbfbf] border-solid px-3 outline-green-400'/>
                        <input type="email" name="email" value={fieldsValue.email} id="field2" onChange={handleChange} placeholder='Your email' required className='bg-[#f8f8f8] text-[#495057] text-base font-normal border-[1px] w-full h-14 rounded-md border-[#bfbfbf] border-solid px-3 outline-green-400'/>

                        <input type="phone" name="phone" value={fieldsValue.phone} id="field3" onChange={handleChange} placeholder='Phone Number' maxLength={10} required className='bg-[#f8f8f8] text-[#495057] text-base font-normal border-[1px] w-full h-14 rounded-md border-[#bfbfbf] border-solid px-3 outline-green-400'/>

                        <textarea name="message" value={fieldsValue.message} id="field4" onChange={handleChange} placeholder='Write Here...' required className='bg-[#f8f8f8] text-[#495057] text-base w-full h-[17vh] font-normal border-[1px] rounded-md border-[#bfbfbf] border-solid px-3 py-3 outline-green-400'></textarea>

                        <button className='bg-[#2A2B39] w-full cursor-pointer py-[10px] outline-none text-white text-lg font-semibold rounded-md'>Get in touch</button>
                    </form>
                </div>
            </div>
        </>
    )
};
export default Comp_10;