'use client';
import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PiCaretDownBold } from "react-icons/pi";
import { useRouter } from 'next/navigation'
import UserContext from '../../../Context/UserContext';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';
import httptl from '../utils/httptl';

const Page = () =>

{   
    const { userInfo, isAuthenticated } = useContext(UserContext);
    const [details, setDetails] = useState('');
    console.log('Data Object', userInfo, isAuthenticated);
    const router = useRouter();
  
    const getUser = async () => {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.GET_USER_DETAILS}`;
        const response = await httptl.get(api_url, {
          headers: {
            includeAuthorizationToken: true,
          },
        });
  
        if (response.data.success === true) {
          setDetails(response.data.data);
        } else {
          console.log('getData failure ', response.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      if (!isAuthenticated) {
        if (typeof window !== 'undefined') {
          router.push('/');
        }
      } else {
        getUser(); // Call the getUser function when the component mounts
      }
    }, [isAuthenticated])
      
function handleClick(event) 
{
  const section = event.target.closest('section[id^="section1-"]');
  if (!section) return; 

  const sectionId = section.id;
  const section2 = document.getElementById(`section2-${sectionId.split('-')[1]}`);
  const parentDiv = document.getElementById(`parentDiv${sectionId.split('-')[1]}`);
  const caretIcon = document.getElementById(`caretIcon-parentDiv-${sectionId.split('-')[1]}`)

  if (section2.classList.contains('hidden')) 
  {
     section2.classList.remove('hidden');
    const newHeight = section.offsetHeight + section2.offsetHeight;
    
    // parentDiv.style.transition = 'height 0.3s ease-in-out';
    parentDiv.style.height = `${newHeight + 20}px`;
    parentDiv.style.borderTop = '3px solid #ffa40c';
    caretIcon.style.transform = 'rotate(-180deg)';
  } 
  else 
  {
    section2.classList.add('hidden');
    const newHeight = section.offsetHeight;
    
    // parentDiv.style.transition = 'height 0.3s ease-in-out';
    parentDiv.style.height = `${newHeight}px`;
    parentDiv.style.borderTop = '1px solid #d1d1de';
    caretIcon.style.transform = 'rotate(0deg)';
  }
}

    const forwardSign = '>';
    console.log(details.dob)
    const getDatePart = () => {
        const date = new Date(details.dob);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    
    
    return (
        <>
            <section className='bg-[#f7f7fe]'>
                <section className='w-full lg:w-[82vw] bg-white mx-auto px-4 lg:px-32 py-10'>
                    <div id='progress bar' className='w-full mb-8 space-y-2'>
                        <div className='w-[100%] flex border-[1px] border-solid border-[#d1d1de]'>
                            <span className='bg-green-600 inline-block h-[4px] w-[20%]'></span>
                            <span className='inline-block h-[4px] w-[80%]'></span>
                        </div>
                        <div className='float-right'>
                            <p className='text-xs font-normal text-[#656565]'>Profile Completed - 20%</p>
                        </div>
                    </div>
                    <div className='text-sm font-normal text-[#9b9ba9] flex gap-2'>
                        <Link href='/'>Home</Link>
                        {forwardSign}
                        <Link href='#'>Profile</Link>
                    </div>
                    <h1 className='mt-8 text-3xl font-semibold'>Profile - {userInfo?.firstNameField}</h1>
                    <section className='mt-12 space-y-5' onClick={handleClick}>
                        <div id='parentDiv1' className='min-w-full px-5 border-[1px] border-[#d1d1de] border-solid rounded-md'>
                            <section id='section1-1' className='flex items-center gap-x-4 h-[11vh] cursor-pointer'>
                                <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center'>
                                    <Image src='/userProfileImages/profile.svg' alt='image' height='20' width='20' />
                                </div>
                                <h3 className='text-lg font-medium flex-1'>Personal Information</h3>
                                <PiCaretDownBold id='caretIcon-parentDiv-1' className='text-xl text-yellow-500 duration-300' />
                            </section>
                            <section id='section2-1' className='bg-[#f7f7fe] w-full px-8 py-10 space-y-5 hidden'>
                               <div className='space-y-2'>
                                    <label htmlFor="" className='text-base font-normal text-[#656565]'>Name</label>
                                    <div className='min-w-full h-[8vh] px-5 border-[1px] border-[#d1d1de] border-solid flex items-center rounded-lg'>
                                        <p className='text-[#656565] text-base font-normal'>{details.firstname} {details.lastname}</p>
                                    </div>
                               </div>
                               <div className='space-y-2'>
                                    <label htmlFor="" className='text-base font-normal text-[#656565]'>Email</label>
                                    <div className='min-w-full h-[8vh] px-5 border-[1px] border-[#d1d1de] border-solid flex items-center rounded-lg'>
                                        <p className='text-[#656565] text-base font-normal'>{details.email}</p>
                                    </div>
                               </div>
                               <div className='space-y-2'>
                                    <label htmlFor="" className='text-base font-normal text-[#656565]'>Mobile Number</label>
                                    <div className='min-w-full h-[8vh] px-5 border-[1px] border-[#d1d1de] border-solid flex items-center rounded-lg'>
                                        <p className='text-[#656565] text-base font-normal'>{details.phone}</p>
                                    </div>
                               </div>
                               <div className='space-y-2'>
                                    <label htmlFor="" className='text-base font-normal text-[#656565]'>Date Of Birth</label>
                                    <div className='min-w-full h-[8vh] px-5 border-[1px] border-[#d1d1de] border-solid flex items-center rounded-lg'>
                                        <p className='text-[#656565] text-base font-normal'>{getDatePart()}</p>
                                    </div>
                               </div>
                               <div className='space-y-2'>
                                    <label htmlFor="" className='text-base font-normal text-[#656565]'>PAN Number</label>
                                    <div className='min-w-full h-[8vh] px-5 border-[1px] border-[#d1d1de] border-solid flex items-center rounded-lg'>
                                        <p className='text-[#656565] text-base font-normal'>Not Linked</p>
                                    </div>
                               </div>
                               <div className='space-y-2'>
                                    <label htmlFor="" className='text-base font-normal text-[#656565]'>KYC</label>
                                    <div className='min-w-full h-[8vh] px-5 border-[1px] border-[#d1d1de] border-solid flex items-center rounded-lg gap-2'>
                                        <Image src='/userProfileImages/pending.svg' alt='image' height='20' width='20' />
                                        <p className='text-[#656565] text-base font-normal'>Pending</p>
                                    </div>
                               </div>
                            </section>
                        </div>

                        <div id='parentDiv2' className='min-w-full px-5 border-[1px] border-[#d1d1de] border-solid rounded-md'>
                            <section id='section1-2' className='flex items-center gap-x-4 h-[11vh] cursor-pointer'>
                                <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center'>
                                    <Image src='/userProfileImages/address.svg' alt='image' height='15' width='15' />
                                </div>
                                <h3 className='text-lg font-medium flex-1'>Address</h3>
                                <PiCaretDownBold id='caretIcon-parentDiv-2' className='text-xl text-yellow-500 duration-300' />
                            </section>
                            <section id='section2-2' className='bg-[#f7f7fe] w-full px-8 py-10 hidden'>
                               <div className='space-y-8'>
                                    <p className='text-lg font-normal text-[#656565]'>Your address proof is not yet submitted. Please complete your KYC to start investing</p>
                                    <div>
                                        <Link href='#'>
                                            <button className='px-8 py-4 bg-green-500 text-white text-base font-semibold rounded-lg tracking-wider'>Complete KYC Now</button>
                                        </Link>
                                    </div>
                               </div>
                            </section>
                        </div>

                        <div id='parentDiv3' className='min-w-full px-5 border-[1px] border-[#d1d1de] border-solid rounded-md'>
                            <section id='section1-3' className='flex items-center gap-x-4 h-[11vh] cursor-pointer'>
                                <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center'>
                                    <Image src='/userProfileImages/Wallet.svg' alt='image' height='20' width='20' />
                                </div>
                                <h3 className='text-lg font-medium flex-1'>Bank Details</h3>
                                <PiCaretDownBold id='caretIcon-parentDiv-3' className='text-xl text-yellow-500 duration-300' />
                            </section>
                            <section id='section2-3' className='bg-[#f7f7fe] w-full px-8 py-10 space-y-5 hidden'>
                                <div className='space-y-8'>
                                    <p className='text-lg font-normal text-[#656565]'>Your bank details are not yet submitted. Please complete your KYC to add bank details</p>
                                    <div>
                                        <Link href='#'>
                                            <button className='px-8 py-4 bg-green-500 text-white text-base font-semibold rounded-lg tracking-wider'>Complete KYC Now</button>
                                        </Link>
                                    </div>
                               </div>
                            </section>
                        </div>

                        <div id='parentDiv4' className='min-w-full px-5 border-[1px] border-[#d1d1de] border-solid rounded-md'>
                            <section id='section1-4' className='flex items-center gap-x-4 h-[11vh] cursor-pointer'>
                                <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center'>
                                    <Image src='/userProfileImages/key.svg' alt='image' height='20' width='20' />
                                </div>
                                <h3 className='text-lg font-medium flex-1'>Techland A/C Details</h3>
                                <PiCaretDownBold id='caretIcon-parentDiv-4' className='text-xl text-yellow-500 duration-300' />
                            </section>
                            <section id='section2-4' className='bg-[#f7f7fe] w-full px-8 py-10 space-y-5 hidden'>
                               
                                <div className='space-y-8'>
                                    <p className='text-lg font-normal text-[#656565]'>Your Techland account details are not yet submitted. Please complete your KYC to create your account</p>
                                    <div>
                                        <Link href='#'>
                                            <button className='px-8 py-4 bg-green-500 text-white text-base font-semibold rounded-lg tracking-wider'>Complete KYC Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div id='parentDiv5' className='min-w-full px-5 border-[1px] border-[#d1d1de] border-solid rounded-md'>
                            <section id='section1-5' className='flex items-center gap-x-4 h-[11vh] cursor-pointer'>
                                <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center'>
                                    <Image src='/userProfileImages/nominee.svg' alt='image' height='20' width='20' />
                                </div>
                                <h3 className='text-lg font-medium flex-1'>Add/Change Nominee</h3>
                                <PiCaretDownBold id='caretIcon-parentDiv-5' className='text-xl text-yellow-500 duration-300' />
                            </section>
                            <section id='section2-5' className='bg-[#f7f7fe] w-full px-8 py-10 space-y-5 hidden'>
                                <div className='space-y-8'>
                                    <p className='text-lg font-normal text-[#656565]'>Your nominee is not yet registerd. Please complete your KYC to register your nominee</p>
                                    <div>
                                        <Link href='#'>
                                            <button className='px-8 py-4 bg-green-500 text-white text-base font-semibold rounded-lg tracking-wider'>Complete KYC Now</button>
                                        </Link>
                                    </div>
                               </div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
};
export default Page;