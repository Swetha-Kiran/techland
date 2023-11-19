import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Comp3 = ({ item }) => {
  const [selectedInvestType, setSelectedInvestType] = useState("Short Term");

  const handleChange = (e) => {
    setSelectedInvestType(e.target.value);
  };

  // Find the selected invest type object
  const selectedInvestTypeObj = item.invest_types.find(
    (type) => type.title === selectedInvestType
  );

  return (
    <>
      <td className="py-2 px-4 flex items-center">
        <Link href='/invest_now' className="bg-[#BCFBFF] px-4 py-1 text-xs rounded-lg font-medium text-[#0071A1]">
          BUY
        </Link>
        <Image src="/portfolioimages/tlticon.png" alt="" width={40} height={40} />
        <p className="text-[#2B5743] font-medium text-base ml-2">{item.title}</p>
      </td>
      <td className="py-2 text-[#2B5743] font-medium text-base text-center">
        <select onChange={handleChange} value={selectedInvestType}>
          {item.invest_types.map((type) => (
            <option key={type.title} value={type.title}>
              {type.title}
            </option>
          ))}
        </select>
      </td>
      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
        {item.recom_Invest}
      </td>
      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
        {selectedInvestTypeObj.interestRate} %
      </td>
      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
        {selectedInvestTypeObj.timePeriod}
      </td>
      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
        {selectedInvestTypeObj.estimatedReturns}
      </td>

      <td className="py-2 px-4 text-center text-[#2B5743] font-medium text-base">
        Low
      </td>
    </>
  );
};

export default Comp3;
