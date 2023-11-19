import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import httptl from '../utils/httptl';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';

const LoginWithSocialMedia = () =>
{
    const handleSignIn = async () =>
    {
        window.open(
            `${process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT}/user/auth/verifyGoogle`,
            "_self"
        );
    }

    // const handleSignIn = async () => {
    //     {
    //         const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
    //         const api_url = `${base_url}${API_ENDPOINTS_TL.LOGIN_WITH_GOOGLE}`;
    //         try {
    //             const response = await fetch(api_url, {
    //                 method: 'GET',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //             });

    //             const result = await response.json();
    //             console.log("google signin api success result: ", result);

    //             if (result.success === true) {
    //                 toast.success("google signin api successfully", {
    //                     position: "top-right",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "dark",
    //                 });
    //                 // admin_login(result.data.token);
    //                 // router.push('/admin/dashboard');
    //             }
    //             else {
    //                 toast.warning("google signin api success false", {
    //                     position: "top-right",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "dark",
    //                 });
    //             }
    //         }
    //         catch (error)
    //         {
    //             console.log("google signin api error: ", error);
    //             toast.error("Something is wrong", {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //             });
    //         }
    //     }
    //   };

    return (
        <>
             <div className='bg-yello-300 flex justify-center'>
                 <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='150' width='150' className='-ml-4' alt='image' />
            </div>
            <div className='bg-re-300 space-y-4 mt-6 w-full'>
                <button onClick={handleSignIn} className='w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-base text-[#2d333a] rounded-md text-left pl-4 hover:bg-green-300 duration-200'>
                <FcGoogle className='inline text-xl mr-3'/>Continue with Google
                </button>
                {/* <button className='w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-base text-[#2d333a] rounded-md text-left pl-4 hover:bg-green-300 duration-200'><BsFacebook className='inline text-xl mr-3'/>Continue with Facebook</button> */}
                <div className='flex justify-between items-center mt-4'>
                    <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
                        <span className='text-base text-[#9a9a9a]'>OR</span>
                    <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
                </div>
            </div>
        </>
    )
};
export default LoginWithSocialMedia;