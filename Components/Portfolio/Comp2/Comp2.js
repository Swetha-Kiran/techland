import Image from "next/image";
import React, { useState } from "react";
import Comp7 from "../Comp7/Comp7";

const Comp2 = ({ Holdings,history }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    };

  return (
    <>

      <section className="w-[92vw] mx-auto lg:mt-32 mt-10 flex lg:flex-row flex-col-reverse  justify-between  lg:px-10">



        <section className="bg-ble-600 lg:w-[70vw] 2xl:w-[65vw] md:w-[92vw]   ">
          <h2 className="text-black text-3xl font-semibold mb-5">Holdings</h2>
          {Holdings.length === 0 ? (
            <p className="text-center lg:text-4xl w-[70vw] text-gray-500 ">No holdings for the user</p>
          ) : (
            <div className=" table-container overflow-x-auto max-h-[390px] scrollbar-hide shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-[24px] lg:px-10">
              <table className="w-[270vw] lg:w-[63vw] 2xl:w-[60vw] sm:w-[150vw] ">
                <thead>
                  <tr>
                    <th className="py-2 text-center text-[#428358] font-medium opacity-50">
                      Land Type (5/5)
                    </th>
                    <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                      Investment
                    </th>
                    <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                      Annual Percentage Rate
                    </th>
                    <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                      Time
                    </th>
                    <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                      Returns
                    </th>
                    <th className="py-2 px-4 text-center text-[#428358] font-medium opacity-50">
                      Total
                    </th>
                    <th className="py-2 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {Holdings.map((item, index) => {
                    const dateObject = new Date(item.createdAt);
                    const formattedDate = dateObject.toLocaleDateString(undefined, options);

                    return (
                      <tr key={index}>
                      <td className="py-2 flex items-center">
                        <div className="space-x-10 flex items-center">
                          <Image
                            src="/Home Page Images/NavBar Images/TLT_logo.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-[12px]"
                          />
                          <div>
                            <p className="text-[#2B5743] font-medium text-base ml-2">
                              {item.land_type}
                            </p>
                            <p className="text-[#2B5743] font-medium text-left text-xs ml-2">
                              {formattedDate}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
                        {item.Invested_amount}
                      </td>
                      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
                        {item.InterestRate}
                      </td>
                      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
                        {item.Time_period}
                      </td>
                      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
                        {item.totalReturns}
                      </td>
                      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
                        {item.totalAmount}
                      </td>
                    </tr>
                    )
                  }
                    )}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <Comp7 history={history}/>
      </section>
    </>
  );
};

export default Comp2;
