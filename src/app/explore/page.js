"use client";
import React, { useEffect, useState } from 'react'
import Comp1 from '../../../Components/Explorepage/Comp1'
import Comp2 from '../../../Components/Explorepage/Comp2'
import Comp5 from '../../../Components/Explorepage/Comp5'
import httptl from "../utils/httptl";
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";

const Explore = () => {
  const[details,setDetails]=useState("")
  const[packages,setPackages]=useState([])
  const[porfoliouserdetails,setPortfolioUserDetails]=useState("");

  const getPackagesdata = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.GET_ALL_PACKAGES}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : false,
          },
        });

        if (response.data.success === true) {

          setPackages(response.data.data.userPackages);
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

  const getUser = async () => {
    {
      try {
        const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
        const api_url = `${base_url}${API_ENDPOINTS_TL.GET_USER_DETAILS}`;
        const response = await httptl.get(api_url,{
          headers: {
            includeAuthorizationToken : true,
          },
        });

        if (response.data.success === true) {

          setDetails(response.data.data);
        } else {
          console.log("getData failure ", response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(()=>{
    getUser();
    portfoliodetails();
    getPackagesdata();
  },[])

  console.log(details )
  return (
    <>
        <Comp1 porfoliouserdetails={porfoliouserdetails} details={details}/>
        <Comp2 packages={packages}/>
        <Comp5 packages={packages}/>
        {/* <Comp6/> */}
        {/* <History/> */}
    </>
  )
}

export default Explore