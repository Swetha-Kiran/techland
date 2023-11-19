"use client";
import React, { useState } from 'react'
import SidebarLayout from '../../../../../Components/adminDashboard/sidebar/sidebarLayout';
import StaffDetails from '../../../../../Components/adminDashboard/staffPage/StaffDetails';


const Page = () => {

  return (
    <>
        <SidebarLayout>
          <section className='bg-re-300 h-[calc(100vh-70px) px-4 py-4 space-y-4'>
            <StaffDetails />
          </section>
        </SidebarLayout>
    </>
  )
}

export default Page;