"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import httptl from "@/app/utils/httptl";
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";

const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Comp1 = ({ details, porfoliouserdetails }) => {
  const [greeting, setGreeting] = useState("");
  const [capitalizedFirstName, setCapitalizedFirstName] = useState("");
  const [capitalizedLastName, setCapitalizedLastName] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime >= 12 && currentTime < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    if (details) {
      setCapitalizedFirstName(capitalizeFirstLetter(details.firstname));
      setCapitalizedLastName(capitalizeFirstLetter(details.lastname));
    }
  }, [details]);

    useEffect(() => {
        const getWalletBalance = async () =>
        {
            const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
            const api_url = `${base_url}${API_ENDPOINTS_TL.GET_WALLET_BALANCE}`;

            try
            {
            const response = await httptl.get(api_url, {
                headers: {
                    includeAuthorizationToken : true,
                    },
            });
            // console.log("get wallet balance api response", response);
            if(response.data.success == true)
            {
                setWalletBalance(response.data.data.balance)
                // console.log("get wallet balance api success response", response.data.data);
            }
            }
            catch (error)
            {
            console.log("get wallet balance api error", error);
            }
        };

    getWalletBalance();
    }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 mb-10 mt-10">
      <div className="lg:w-[30vw]">
        <h2 className="lg:text-xl 2xl:text-2xl md:text-4xl text-base font-bold text-[#428358]">
          {`${greeting}, ${capitalizedFirstName} ${capitalizedLastName}`}
        </h2>
        <p className="lg:text-[20px] 2xl:text-[25px] md:text-2xl font-bold text-[#428358]">
          Welcome back, nice to see you again!
        </p>
      </div>
      <div className=" lg:w-[70vw] flex flex-col lg:flex-row justify-around items-center mt-10 lg:mt-0 bg-re-500">
        <div className="bg-[#428358] flex lg:w-[19vw] w-[92vw] rounded-[32px] px-6 py-4 items-center">
          <div className="bg-rd-300 lg:w-[15vw] w-[60vw]">
            <p className="font-semibold lg:text-base md:text-2xl text-lg text-white">
              Networth
            </p>
            <h2 className="2xl:text-3xl lg:text-xl md:text-6xl  text-3xl font-semibold text-white">
              TLT {porfoliouserdetails.netWorth}
            </h2>
          </div>
          <div className="relative left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-re-500">
            <Image
              src="/explorepageimages/Ellipse.png"
              alt="ellipseex"
              width={140}
              height={150}
              className=""
            />
          </div>
        </div>

        <div className="bg-[#428358] flex lg:w-[19vw] w-[92vw] rounded-[32px] px-6 py-4 items-center mt-10 lg:mt-0">
          <div className="bg-yello-300 lg:w-[15vw] w-[60vw]">
            <p className="font-semibold lg:text-base md:text-2xl text-lg text-white">
              Wallet Balance
            </p>
            <h2 className="2xl:text-3xl lg:text-xl text-3xl md:text-6xl  font-semibold text-white">
              TLT {walletBalance}
            </h2>
          </div>
          <div className="relative left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-red-00">
            <Image
              src="/explorepageimages/Ellipse.png"
              alt="ellipseex"
              width={140}
              height={150}
              className=""
            />
          </div>
        </div>

        <div className="bg-[#428358] flex lg:w-[19vw] w-[92vw] rounded-[32px] px-6 py-4 items-center mt-10 lg:mt-0">
          <div className="bg-yello-300 lg:w-[15vw] w-[60vw]">
            <p className="font-semibold lg:text-base md:text-2xl text-lg text-white">
              Total Profit
            </p>
            <h2 className="2xl:text-3xl lg:text-xl text-3xl md:text-6xl  font-semibold text-white">
              TLT {porfoliouserdetails.totalProfitAmount}
            </h2>
          </div>
          <div className="relative left-6 lg:bottom-4 md:left-28 lg:left-6 bottom-4 bg-red-00">
            <Image
              src="/explorepageimages/Ellipse.png"
              alt="ellipseex"
              width={140}
              height={150}
              className=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Comp1;
