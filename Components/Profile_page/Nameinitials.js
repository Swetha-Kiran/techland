"use client"
import { API_ENDPOINTS_TL } from "@/app/utils/api-endpoints-TL";
import httptl from "@/app/utils/httptl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NameInitialsAvatar } from "react-name-initials-avatar";


const getUser = async () => {
  try {
    const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
    const api_url = `${base_url}${API_ENDPOINTS_TL.GET_USER_DETAILS}`;
    const response = await httptl.get(api_url, {
      headers: {
        includeAuthorizationToken: true,
      },
    });

    if (response.data.success === true) {
      return response.data.data; // Return the user data
    } else {
      console.log('getData failure ', response.message);
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const Nameinitials = ({ onClick }) => {
  const [userDetails, setDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser(); // Call the getUser function when the component mounts
      if (userData) {
        setDetails(userData);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div onClick={onClick} className="name-initials text-re-500">
    {userDetails ? (
      <NameInitialsAvatar
        name={`${userDetails.firstname.toUpperCase()} ${userDetails.lastname.toUpperCase()}`}
        bgColor="#68BF7B"
        textColor="white"
        borderColor="none"
      />
    ) : (
      <Image
        src="/Home Page Images/NavBar Images/user_dp.avif"
        alt="user DP"
        width="50"
        height="50"
        className="rounded-2xl"
        
      />
    )}
  </div>
  );
};

export default Nameinitials;
