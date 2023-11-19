'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userDashboardSidebarData } from './userDashboardSidebarData';
import {AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const UserDashboardSidebar = () => {
  const router = useRouter();
  const currentUrl = usePathname();

  return (
    <>
        <section className='h-screen min-w-[20vw] bg-[#f9f9fe] shadow-lg'>
          <div className='h-[20vh] grid place-items-center'>
            <Image src='/Home Page Images/NavBar Images/Techland_Logo_New.png' height='200' width='200'  alt='image' />
          </div>

          <section className='mt-2 px-4'>
            {userDashboardSidebarData.map((curitem, index) =>
            {
              return (
                <Link href={curitem.link} key={index}>
                <div className='flex py-4 px-2 gap-4 rounded-xl items-center hover:bg-green-300 duration-300' style= {currentUrl === curitem.link ? {borderRight : '4px solid green'} : {border : 'none'}}>
                  {curitem.icon}
                  <span className='text-sm font-semibold text-[#046c4e] tracking-wide'>{curitem.title}</span>
                </div>
              </Link>
            )})}

            <Link href='/' className='w-full h-[8vh] mx-2 bg-green-500 text-white text-sm font-semibold rounded-xl flex justify-center items-center gap-2 mt-3 '>
              <AiOutlineHome className='text-lg' />Home Page
            </Link>
          </section>

        </section>
    </>
  )
}

export default UserDashboardSidebar;