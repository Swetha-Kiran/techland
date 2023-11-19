"use client";
import React, { useState } from 'react'
import SidebarLayout from '../../../../../Components/adminDashboard/sidebar/sidebarLayout';

import StagesTable from '../../../../../Components/adminDashboard/stagesPage/StagesTable';


const Page = () => {

  return (
    <>
        <SidebarLayout>
          <section className='bg-re-300 h-[calc(100vh-70px) px-4 py-4 space-y-4'>
            <StagesTable />
          </section>
        </SidebarLayout>
    </>
  )
}

export default Page;