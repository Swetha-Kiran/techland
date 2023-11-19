import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';
import { getAdminToken } from '@/app/utils/get_admin_auth_token';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';

const DetailsTable = () =>
{
    const [detailsArray, setDetailsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const isAdminAuthorized = getAdminToken();

    useEffect(() =>
    {
      const getUserDetails = async () =>
      {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.ADMIN_PANEL_ALL_USERS}`;

          try {
            const response = await fetch(api_url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${isAdminAuthorized}`,
                },
            });

            const result = await response.json();
            console.log("admin get all users api success result: ", result);

            if (result.success === true) {
              console.log("admin get all users api success true result: ", result);
              setDetailsArray(result.message);
              setIsLoading(false);
            }
            else
            {
              console.log("admin get all users api success false result: ", result);
              toast.warning(result.message, {
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
            console.log("admin get all users api error: ", error);
            toast.warning("Something is unexpected", {
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
      };

      getUserDetails();
    }, []);

    const totalItems = detailsArray.length;
    const itemsPerPage = 10;
    const firstItemIndex = (currentPage-1) * itemsPerPage;
    const lastItemIndex = (currentPage * itemsPerPage) - 1;
    const totalPages = Math.ceil(totalItems/itemsPerPage);
    const filteredItems = detailsArray.slice(firstItemIndex, lastItemIndex+1);
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
              <section className='w-full flex items-center relative'>
                <GoSearch className='absolute left-4 text-[#6E737F] text-lg 2xl:text-2xl' />
                <input type="text" className='w-full h-[40px] 2xl:h-[50px] pl-12 pr-4 rounded-2xl text-[#BEBEBF] text-base 2xl:text-xl font-normal border border-solid border-gray-300' placeholder='Search' />
              </section>
              <section className='overflow-x-scroll'>
                <table className='bg-re-300 w-full'>
                  <thead className='bg-yello-300 pb-10' >
                    <tr className='mb-4 text-base 2xl:text-xl text-[#428358] font-medium flex opacity-70 justify-between gap-x-2'>
                      <th className='bg-blu-300 w-[7vw] text-center' >User ID</th>
                      <th className='bg-blu-300 w-[10vw] text-center'>Name</th>
                      <th className='bg-blu-300 w-[16vw] text-center'>Email ID</th>
                      <th className='bg-blu-300 w-[9vw] text-center'>Phone No</th>
                      <th className='bg-blu-300 w-[10vw] text-center'>Wallet Balance</th>
                      <th className='bg-blu-300 w-[8vw] text-center'>Total Area</th>
                      <th className='bg-blu-300 w-[8vw] text-center'>Net Worth</th>
                      <th className='bg-blu-300 w-[12vw] text-center'>Invested Amount</th>
                      <th className='bg-blu-300 w-[12vw] text-center'>Total Profit Amount</th>
                      <th className='bg-blu-300 w-[12vw] text-center'>Total Profit Percent</th>
                      <th className='bg-blu-300 w-[7vw] text-center'>Phone Verify</th>
                      <th className='bg-blu-300 w-[7vw] text-center'>email Verify</th>
                    </tr>
                  </thead>
                  <tbody >
                    {isLoading ?
                    <div className='flex ml-20'>
                      <Image src='/paymentPageImages/loader.svg' width={100} height={100} alt='qr code loader image' className='w-[30%] lg:w-[15%]' />
                    </div>
                    :
                    filteredItems.map((curItem, index, array) =>
                    {
                      return (
                        <tr key={index} className='text-sm 2xl:text-lg text-[#428358] font-medium flex opacity-70 justify-between gap-x-2'>
                          <td className='bg-blu-300 w-[7vw] text-center'>{firstItemIndex+index+1}</td>
                          <td className='bg-blu-300 w-[10vw] text-center'>{curItem.name}</td>
                          <td className='bg-blu-300 w-[16vw] text-center'>{curItem.email}</td>
                          <td className='bg-blu-300 w-[9vw] text-center'>{curItem.phone}</td>
                          <td className='bg-blu-300 w-[10vw] text-center'>{curItem.wallet_balance}</td>
                          <td className='bg-blu-300 w-[8vw] text-center'>{curItem.total_area}</td>
                          <td className='bg-blu-300 w-[8vw] text-center'>{curItem.netWorth}</td>
                          <td className='bg-blu-300 w-[12vw] text-center'>{curItem.investedAmount}</td>
                          <td className='bg-blu-300 w-[12vw] text-center'>{curItem.totalProfitAmount}</td>
                          <td className='bg-blu-300 w-[12vw] text-center'>{curItem.totalProfitPercent}</td>
                          <td className='bg-blu-300 w-[7vw] flex justify-center'>
                          {curItem.isPhoneVerified ?
                            <BsToggleOn className="text-green-500 text-2xl 2xl:text-3xl" />
                            : <BsToggleOff className="text-green-500 text-2xl 2xl:text-3xl" />
                          }
                          </td>
                          <td className='bg-blu-300 w-[7vw] flex justify-center'>
                          {curItem.isEmailVerified ?
                            <BsToggleOn className="text-green-500 text-2xl 2xl:text-3xl" />
                            : <BsToggleOff className="text-green-500 text-2xl 2xl:text-3xl" />
                          }
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
};
export default DetailsTable;