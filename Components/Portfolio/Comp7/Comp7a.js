import Image from "next/image";
import React from "react";

const Comp7a = ({item}) => {
  // console.log(item)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };

    const dateObject = new Date(item.createdAt);
    const formattedDate = dateObject.toLocaleDateString(undefined, options);
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            src="/Home Page Images/NavBar Images/TLT_logo.jpeg"
            alt=""
            width={40}
            height={40}
            className="rounded-[12px]"
          />
        </div>
        <div>
          <h2 className="font-medium text-[12px] md:text-[16px] text-[#2A2B39]">{item.land_type}</h2>
          <p className="font-medium text-[8px] md:text-[12px] text-[#2A2B39]">Intrest {item.InterestRate}%</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-[18px] font-medium text-[#2A2B39]">TLT {item.Invested_amount}</h2>
        <p className="text-[14px] font-normal text-[#68BF7B] text-xs">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Comp7a;
