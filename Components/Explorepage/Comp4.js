import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Invest = ({ selectedItem }) => {
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [selectedInvestTypeIndex, setSelectedInvestTypeIndex] = useState(0); // Default to the first invest_type
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSelectedItemData(selectedItem);
    // Simulate loading for 2 seconds (adjust the time as needed)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [selectedItem]);

  if (isLoading) {
    return (
      <div className="lg:w-[30vw] bg-grey-200 md:translate-x-4 lg:translate-x-0 lg:mt-10 p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-grey-200 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="bg-grey-200 h-4 w-24 rounded"></div>
            <div className="bg-grey-200 h-4 w-36 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedItemData) {
    return (
      <div className="lg:w-[30vw] bg-yelow-200 md:translate-x-4 lg:translate-x-0 lg:mt-10">
        <p className="font-bold text-4xl">No package found</p>
      </div>
    );
  }

  const selectedType = selectedItemData.invest_types[selectedInvestTypeIndex];

  const handleInvestTypeChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setSelectedInvestTypeIndex(newIndex);
  };
  return (
    <div className="lg:w-[30vw] bg-yelow-200  lg:translate-x-0 lg:mt-10">
      <section className="bg-[#c9e5d2] rounded-[20px] px-3 space-y-7 2xl:space-y-6 py-4">
        <section className="space-y-2 2xl:space-y-3">
          <h6 className="text-xs font-medium text-[#6E737F] tracking-wider">
            Investment
          </h6>
          <div className="bg-re-300 mx-auto flex justify-center items-center 2xl:px-32 lg:px-20 md:px-40 px-14">
            <span className="w-[32px] h-[32px] rounded-xl bg-[#428358] inline-grid place-items-center">
              <AiOutlinePlus className="text-white text-lg 2xl:text-xl font-medium" />
            </span>
            <p className="text-base font-semibold flex-1 text-center">
            TLT {selectedItemData.amount}
            </p>
            <span className="w-[32px] h-[32px] rounded-xl bg-[#428358] inline-grid place-items-center">
              <AiOutlineMinus className="text-white text-lg 2xl:text-xl font-medium" />
            </span>
          </div>
          <p className="text-[10px] md:text-[14px] lg:text-[10px] lg:w-[12vw] md:w-[25vw] w-[40vw] bg-rd-300 lg:translate-x-[15vw] translate-x-44 md:translate-x-[60vw] ">
            Minimum Investment of TLT {selectedItemData.minInvestment}
          </p>
        </section>
        <section className="space-y-2 2xl:space-y-3">
          <h6 className="text-[12px] font-medium text-[#6E737F] tracking-wider">
            Investment Type
          </h6>
          <div className="w-full py-1">
            <select
              className="w-full h-[5vh] px-3 rounded-[12px] text-[#68BF7B]"
              value={selectedInvestTypeIndex}
              onChange={handleInvestTypeChange}
            >
              {selectedItemData.invest_types.map((type, index) => (
                <option key={type._id} value={index}>
                  {type.title}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className="space-y-2 2xl:space-y-3">
          <h6 className="text-[12px] font-medium text-[#6E737F] tracking-wider">
            Number Of Months
          </h6>
          <div className="w-full bg-[#e6e0e9] h-1 rounded flex items-center">
            <div
              className={`
                            ${
                              selectedType.title === "Short Term"
                                ? "w-[calc(0%-5px)]"
                                : selectedType.title === "Mid Term"
                                ? "w-[calc(50%-5px)]"
                                : "w-[calc(100%-5px)]"
                            }
                            h-full bg-[#428358] rounded`}
            ></div>
            <div className={`w-[10px] h-[10px] bg-red-800 rounded-full`}></div>
          </div>
          <div className="text-[10px] text-[#bebebf] flex justify-between">
            <span className="text-[12px] font-medium text-[#2B5743">12</span>
            <span className="text-[12px] font-medium text-[#2B5743">36</span>
            <span className="text-[12px] font-medium text-[#2B5743">60</span>
          </div>
          <div className="w-full space-y-2">
            <div className="w-full flex justify-between">
              <span className="text-[12px]  text-[#6E737F]">Annual Percentage Rate(APR)</span>
              <span className="text-base font-semibold text-[#2B5743]">
                {selectedType.interestRate}%
              </span>
            </div>
            <div className="w-full flex justify-between">
              <span className="text-[12px]  text-[#6E737F]">
                Estimated APR Returns
              </span>
              <span className="text-base font-semibold text-[#2B5743]">
                {selectedType.estimatedReturns} TLT
              </span>
            </div>
            <div className="w-full flex justify-between">
              <span className="text-[12px]  text-[#6E737F]">TLT Square cm</span>
              <span className="text-base font-semibold text-[#2B5743]">
                {selectedType.area}
              </span>
            </div>
          </div>
        </section>

      </section>
      <Link href="/invest_now" className="flex justify-center">
        <button className="px-8 py-3 2xl:px-12 2xl:py-5 rounded-[44px] bg-[#2A2B39] text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold mt-5 mb-5">
          Invest Now
        </button>
      </Link>
    </div>
  );
};

export default Invest;
