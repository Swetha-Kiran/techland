'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { dashboardSidebarLinks } from './dashboardSidebarLinks';
import {RiLogoutBoxRLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import UserContext from '../../../Context/UserContext';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';

const DashboardSidebar = () => {
  const { admin_logout } = useContext(UserContext);
  const router = useRouter();
  const currentUrl = usePathname();

  const toggleSidebar = () =>
  {
    const sidebarRef = document.getElementById('sideBarDiv');
    sidebarRef.classList.toggle('hidden');
  }

  return (
    <>
        <div className="menuIcon lg:hidden px-4 py-6">
              <AiOutlineMenu
                onClick={toggleSidebar}
                className="hamburger text-[#515151] w-8 h-5 cursor-pointer"
              />
        </div>
        <div id='sideBarDiv' className='bg-opacity-75 bg-black z-10'>
          <section className='h-[calc(100vh-70px)] w-[30vw] lg:w-[20vw] bg-[#f9f9fe] shadow-lg flex flex-col justify-between pb-5'>
            <div>
              <div className='h-[20vh] grid place-items-center'>
                <Image src='/dashboardImages/sidebarImages/Techland_Logo_New.png' height='200' width='200'  alt='image' className='w-[200px] 2xl:w-[250px]' />
              </div>

              <section className='bg-yello-300 flex mt-2 px-4 flex-col flex-1 justify-between'>
                {dashboardSidebarLinks.map((curitem, index) =>
                {
                  return (
                    <Link href={curitem.link} key={index}>
                    <div className='flex py-4 px-2 gap-4 rounded-xl items-center hover:bg-green-300 duration-300' style= {currentUrl === curitem.link ? {borderRight : '4px solid green'} : {border : 'none'}}>
                      {curitem.icon}
                      <span className='text-sm 2xl:text-lg font-semibold text-[#046c4e] tracking-wide'>{curitem.title}</span>
                    </div>
                  </Link>
                )})}
              </section>
            </div>
            <button onClick={admin_logout} className='w-[90%] h-[8vh] bg-green-500 text-white text-sm 2xl:text-xl font-semibold rounded-xl flex justify-center items-center gap-x-2 mx-auto'>
                <RiLogoutBoxRLine className='text-lg 2xl:text-2xl' />Log out
            </button>
          </section>
        </div>
    </>
  )
}

export default DashboardSidebar;
