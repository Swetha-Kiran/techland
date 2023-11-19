import React from 'react'
import { useState } from 'react';
import { GoSearch } from "react-icons/go";
import Image from 'next/image';
import data from "../paymentPage/paymentData"
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';


function PaymentTable() {
    
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = data.length;
    const itemsPerPage = 8;
    const firstItemIndex = (currentPage-1) * itemsPerPage;
    const lastItemIndex = (currentPage * itemsPerPage) - 1;
    const totalPages = Math.ceil(totalItems/itemsPerPage);
    const filteredItems = data.slice(firstItemIndex, lastItemIndex+1)
    const pagesNumber =  Array.from({ length: totalPages }, (_, index) => index + 1);


    const pageDecrease = () =>
    {
        if (currentPage > 1)
        {
            setCurrentPage(currentPage-1);
        }
    }
    const pageIncrease = () =>
    {
        if (currentPage < totalPages)
        {
            setCurrentPage(currentPage+1);
        }
    }

    return (
        <>
            <section className='bg-white rounded-3xl h-[450px px-4 py-3 space-y-3'>
                <section className='w-full flex justify-between items-center relative space-x-4'>
                    <GoSearch className='absolute left-8 text-[#6E737F] text-lg 2xl:text-2xl ' />
                    <input type="text" className='w-[85%]  h-[40px] 2xl:h-[50px] pl-12 pr-4  text-[#BEBEBF] text-base 2xl:text-xl font-normal border border-solid border-gray-300' placeholder='Search' />
                    <button className='text-[#FFFFFF] bg-[#90BE6D] w-auto h-[40px] px-6 rounded-[32px] font-bold'>Add</button>
                    <button className='text-[#FFFFFF] bg-[#90BE6D] w-auto h-[40px] px-6 rounded-[32px] font-bold'>Modify</button>
                </section>
                <section >
                    <table className='bg-re-300 w-full'>
                        <thead className='bg-yello-300 pb-10' >
                            <tr className='mb-4 text-base 2xl:text-lg text-[#428358] font-normal flex opacity-70  justify-between gap-x-2'>
                                <th className='bg-blu-300 w-[7vw] text-center' >Order No</th>
                                <th className='bg-blu-300 w-[10vw] text-center'>User Name</th>
                                <th className='bg-blu-300 w-[14vw] text-center'>User UPI ID</th>
                                <th className='bg-blu-300 w-[6vw] text-center'>Amount</th>
                                <th className='bg-blu-300 w-[10vw] text-center'>TLT Granted</th>
                                <th className='bg-blu-300 w-[14vw] text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {isLoading ?
                    <div className='flex ml-20'>
                      <Image src='/paymentPageImages/loader.svg' width={100} height={100} alt='qr code loader image' className='w-[30%] lg:w-[15%]' />
                    </div>
                    :
                                filteredItems.map((curItem, index, array) => {
                                    return (
                                        <tr key={index} className='mb-4 text-sm 2xl:text-lg text-[#000000] font-normal flex opacity-80  justify-between gap-x-2'>

                                            <td className='bg-blu-300 w-[7vw] text-center'>{curItem.orderNo}</td>
                                            <td className='bg-blu-300 w-[10vw] text-center'>{curItem.name}</td>
                                            <td className='bg-blu-300 w-[14vw] text-center'>{curItem.upi}</td>
                                            <td className='bg-blu-300 w-[6vw] text-center'>{curItem.amount}</td>
                                            <td className='bg-blu-300 w-[10vw] text-center'>{curItem.TLTgranted}</td>
                                            <td className='bg-blu-300 w-[14vw] flex flex-row space-x-2'>
                                                <button className='text-[#000000] bg-[#90BE6D] w-auto h-[40px] px-6 rounded-[32px] font-semibold'>Confirm</button>
                                                <button className='text-[#000000] bg-[#768C65] w-auto h-[40px] px-6 rounded-[32px] font-semibold'>Deny</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </section>
                <section className='bg-yello-300 flex justify-between items-center'>
                <div>
                    <p className='text-xs 2xl:text-lg leading-[18px] font-semibold text-[#4c4f52]'>Showing {firstItemIndex+1}-{lastItemIndex+1} of {totalItems}</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <span>
                        <FaLessThan onClick={pageDecrease} className={`text-[#428358] ${currentPage > 1 ? 'cursor-pointer' : 'cursor-not-allowed'} `} />
                    </span>
                    <div>
                        {pagesNumber.map((pageNum, index) =>
                        (
                            <button key={index} onClick={() => setCurrentPage(pageNum)} className={` ${currentPage === index+1 ? 'bg-[#428358] text-white' : 'text-[#4c4f52] hover:bg-gray-200' } px-3 py-1 rounded-md text-xs 2xl:text-base font-medium`}>{pageNum}</button>
                        ))}
                    </div>
                    <span>
                        <FaGreaterThan onClick={pageIncrease} className={`text-[#428358] ${currentPage < totalPages ? 'cursor-pointer' : 'cursor-not-allowed'} `} />
                    </span>
                </div>
              </section>
            </section>
        </>
    )
}

export default PaymentTable