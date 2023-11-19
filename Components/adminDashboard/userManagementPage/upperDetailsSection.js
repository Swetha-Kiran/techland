import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { GiToken } from 'react-icons/gi';
import {BiSolidPurchaseTagAlt } from 'react-icons/bi';
import {TbPackageExport } from 'react-icons/tb';
import Image from 'next/image';

const UpperDetailsSection = () =>
{
    return (
        <>
            <section className='bg-yello-300 flex justify-between'>
              <div className='w-[24%] 2xl:w-[22%] bg-[#428358] flex rounded-3xl pl-3'>

                <div className='bg-blu-300 flex-1 py-2 2xl:py-4 flex justify-center items-center gap-x-2'>
                  <HiOutlineUsers className='text-2xl text-white 2xl:text-3xl' />
                  <div className=''>
                    <h6 className='text-base 2xl:text-lg font-semibold text-white'>Total Users</h6>
                    <p className='text-2xl 2xl:text-3xl font-semibold text-white text-center'>99,999</p>
                  </div>
                </div>

                <div className="relativ left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-re-500">
                  <Image
                    src="/dashboardImages/Ellipse.png"
                    alt="ellipseex"
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
              </div>
              <div className='w-[24%] 2xl:w-[22%] bg-[#428358] flex rounded-3xl pl-3'>

                <div className='bg-blu-300 flex-1 py-2 2xl:py-4 flex justify-center items-center gap-x-2'>
                  <GiToken className='text-2xl text-white 2xl:text-3xl' />
                  <div>
                    <h6 className='text-base 2xl:text-lg font-semibold text-white'>Total Invested TLT</h6>
                    <p className='text-2xl 2xl:text-3xl font-semibold text-white text-center'>TLT 99,999</p>
                  </div>
                </div>

                <div className="relativ left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-re-500">
                  <Image
                    src="/dashboardImages/Ellipse.png"
                    alt="ellipseex"
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
              </div>

              <div className='w-[24%] 2xl:w-[22%] bg-[#428358] flex rounded-3xl pl-3'>

                <div className='bg-blu-300 flex-1 py-2 2xl:py-4 flex justify-center items-center gap-x-2'>
                  <BiSolidPurchaseTagAlt className='text-2xl text-white 2xl:text-3xl' />
                  <div>
                    <h6 className='text-base 2xl:text-lg font-semibold text-white'>Total Purchased TLT</h6>
                    <p className='text-2xl 2xl:text-3xl font-semibold text-white text-center'>TLT 99,999</p>
                  </div>
                </div>

                <div className="relativ left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-re-500">
                  <Image
                    src="/dashboardImages/Ellipse.png"
                    alt="ellipseex"
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
              </div>

              <div className='w-[24%] 2xl:w-[22%] bg-[#428358] flex rounded-3xl pl-3'>

                <div className='bg-blu-300 flex-1 py-2 2xl:py-4 flex justify-center items-center gap-x-2'>
                  <TbPackageExport className='text-2xl text-white 2xl:text-3xl' />
                  <div >
                    <h6 className='text-base 2xl:text-lg font-semibold text-white'>Total Packages</h6>
                    <p className='text-2xl 2xl:text-3xl font-semibold text-white text-center'>5</p>
                  </div>
                </div>

                <div className="relativ left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-re-500">
                  <Image
                    src="/dashboardImages/Ellipse.png"
                    alt="ellipseex"
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
              </div>
            </section>
        </>
    )
};
export default UpperDetailsSection;
