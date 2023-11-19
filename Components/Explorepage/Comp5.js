"use client";
import React, { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
  MdHistory,
} from "react-icons/md";
import Comp6 from "./Comp6/Comp6";
import History from "./History";
import Link from "next/link";
import { GoX } from "react-icons/go";

const Comp5 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

  const openModal = (buttonName) => {
    setIsModalOpen(true);
    setClickedButton(buttonName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedButton(""); // Clear the button name when closing the modal
  };

  return (
    <div className="lg:w-[60vw] bg-rd-300 w-[60vw] mx-auto flex lg:flex-row flex-col lg:justify-between mt-10 mb-10 px-5">
      <div
        className="flex justify-center items-center bg-re-400 rounded-[18px] px-1 py-2 lg:px-6 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] cursor-pointer"
        onClick={() => openModal("Deposit")} // Pass "Deposit" as the button name
      >
        <MdOutlineKeyboardDoubleArrowUp className="transform rotate-[40deg] text-[#68BF7B] text-[25px] mr-2" />
        <Link href="/my_wallet">
          <p className="text-[24px] font-medium text-[#6E737F]">Deposit</p>
        </Link>
      </div>

      <div
        className="flex justify-center items-center bg-re-400 rounded-[18px] px-1 lg:px-6 mt-5 lg:mt-0 py-2 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] cursor-pointer"
        onClick={() => openModal("Claim")} // Pass "Withdraw" as the button name
      >
        <MdOutlineKeyboardDoubleArrowDown className="transform text-[#68BF7B] text-[25px] mr-2" />
        <p className="text-[24px] font-medium text-[#6E737F]">Claim</p>
      </div>
      <div
        className="flex justify-center items-center bg-re-400 rounded-[18px] px-1 lg:px-6 mt-5 lg:mt-0 py-2 shadow-[0_0_5px_0_rgba(0,0,0,0.2)]"
        onClick={() => openModal("History")} // Pass "History" as the button name
        style={{ cursor: "pointer" }} // Add this style
      >
        <MdHistory className="transform rotate-[20deg] text-[#68BF7B] text-[25px] mr-2 " />
        <p className="text-[24px] font-medium text-[#6E737F]">History</p>
      </div>
      {/* {isModalOpen && clickedButton === "Deposit" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white w-[90%] h-[90%] rounded-lg shadow-lg p-6">
            <Comp6 closeModal={closeModal} buttonName={clickedButton} />
          </div>
        </div>
      )} */}
      {isModalOpen && clickedButton === "Claim" && (
        <div className="fixed inset-0 flex items-center justify-center  z-50 bg-black bg-opacity-20">
          <div className="bg-white flex lg:w-[20%] w-[92vw] h-[20%] rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-800">
            You cannot claim TLT until presale time period
            </p>
            <GoX className="text-5xl font-bold" onClick={closeModal} />
          </div>
        </div>
      )}
      {isModalOpen && clickedButton === "History" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white w-[90%] h-[90%] rounded-lg shadow-lg p-6">
            <History closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Comp5;
