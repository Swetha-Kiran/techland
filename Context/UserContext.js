'use client';
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getToken } from '@/app/utils/get_auth_token';
import { getAdminToken } from '@/app/utils/get_admin_auth_token';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import httptl from '@/app/utils/httptl';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    firstNameField: '',
    lastNameField: '',
    dateField: '',
    monthField: '',
    yearField: '',
    countryCode: '',
    phoneNumField: '',
    emailField: '',
    passField: '',
    cnfrmpassField: '',
  });

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);

    const googleAuth = async () => {
      {
          const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
          const api_url = `${base_url}${API_ENDPOINTS_TL.LOGIN_WITH_GOOGLE_SUCCESS}`;
          try {
              const response = await fetch(api_url, {withCredentials : true}, {
                  method: 'GET',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                  },
              });

              // const result = await response.json();
              console.log("google signin api success result: ", response);

              // if (result.success === true) {
              //     toast.success("google signin api successfully", {
              //         position: "top-right",
              //         autoClose: 3000,
              //         hideProgressBar: false,
              //         closeOnClick: true,
              //         pauseOnHover: true,
              //         draggable: true,
              //         progress: undefined,
              //         theme: "dark",
              //     });
              //     // admin_login(result.data.token);
              //     // router.push('/admin/dashboard');
              // }
              // else {
              //     toast.warning("google signin api success false", {
              //         position: "top-right",
              //         autoClose: 3000,
              //         hideProgressBar: false,
              //         closeOnClick: true,
              //         pauseOnHover: true,
              //         draggable: true,
              //         progress: undefined,
              //         theme: "dark",
              //     });
              // }
          }
          catch (error)
          {
              console.log("google signin api error: ", error);
              toast.error("Something is wrong", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
              });
          }
      }
    };

  useEffect(() =>
  {
    const userAlreadyAuthorized = getToken();
    if (userAlreadyAuthorized)
    {
      setIsAuthenticated(true)
    }

    const adminAlreadyAuthorized = getAdminToken();
    if (adminAlreadyAuthorized)
    {
      setAdminAuthenticated(true)
    }
    // console.log("syed getauth token value", alreadyAuthorized);

    // googleAuth();
  }, []);

  const login = (token) => {
    // Cookies.set('authToken', token, { expires: 7 })
    Cookies.set('authToken', token)
    // console.log("set token in cookies", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove('authToken');
    router.push('/');
  };

  const admin_login = (token) => {
    // Cookies.set('authToken', token, { expires: 7 })
    Cookies.set('adminAuthToken', token)
    // console.log("set token in cookies", token);
    setAdminAuthenticated(true);
  };

  const admin_logout = () => {
    setAdminAuthenticated(false);
    Cookies.remove('adminAuthToken');
    router.push('/');
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, isAuthenticated, login, logout, admin_login, admin_logout  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
