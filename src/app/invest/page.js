"use client"
import React, { useEffect, useState } from 'react'
import Comp1 from '../../../Components/Invest/Comp1'
import Comp2 from '../../../Components/Invest/Comp2'
import httptl from "../utils/httptl";
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";
const Page = () => {
 const[packages,setPackages]=useState([])
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
  useEffect(()=>{
    getPackagesdata()
  },[])
  // console.log(packages)
  return (
    <>
    <Comp1 packages={packages}/>
    {/* <Comp2/> */}
    </>
  )
}

export default Page