"use client";
import React, { useEffect, useState } from "react";
import Comp1 from "../../../Components/Portfolio/comp1";
import Comp2 from "../../../Components/Portfolio/Comp2/Comp2";
import httptl from "../utils/httptl";
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";

const Portfolio = () => {
  const [portfoliodata, setPortfoliodata] = useState("");
  const [data, setHoldings] = useState([]);
  const[history,setHistory]=useState([])
  const[porfoliouserdetails,setPortfolioUserDetails]=useState("")

  const getData = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.PORTFOLIO}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });
        if (response.data.success === true) {
          setPortfoliodata(response.data.data.details);
        } else {
          console.log("getData failure ", response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const portfoliodetails = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.GET_USER_PORTFOLIO_DETAILS}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });
        if (response.data.success === true) {
          setPortfolioUserDetails(response.data.data.Details);
        } else {
          console.log("getData failure ", response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const HoldingsData = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.PORTFOLIO_HOLDINGS}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });

        if (response.data.success === true) {
          setHoldings(response.data.data.Holdings.reverse());

          // console.log(response.data.data.Holdings)
        } else {
          console.log("getData failure ", response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const PurchaseHistory = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.GET_PURCHASE_HISTORY}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });

        if (response.data.success === true) {
          setHistory(response.data.data.Transactions);

          // console.log(response.data.data.Holdings)
        } else {
          console.log("getData failure ", response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };


  useEffect(() => {
    getData();
    HoldingsData();
    PurchaseHistory();
    portfoliodetails();
  }, []);

  // console.log(porfoliouserdetails);
  return (
    <>
      <Comp1 portfoliodata={portfoliodata} porfoliouserdetails={porfoliouserdetails} />
      <Comp2 Holdings={data} history={history} />
      {/* <Comp4/>
      <Comp5/> */}
    </>
  );
};

export default Portfolio;
