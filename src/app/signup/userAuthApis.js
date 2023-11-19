import React, {useContext} from 'react';
import { useSignupContext } from './signupContext';
import UserContext from '../../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS_TL } from '../utils/api-endpoints-TL';
import httptl from '../utils/httptl';

const UserAuthApis = () =>
{
    const { userInfo, login } = useContext(UserContext);
    const router = useRouter();
    const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;

    const {
        setShowOtpField,
        setShowSendOtp,
        setShowResendOtp,
        setOtpErrorMsg,
        otpFieldVal,
        setShowOtpVerified,
    } = useSignupContext();

    const getOtp_api = async () =>
        {
            console.log("Syed mobile number value in get otp fun: ", userInfo.phoneNumField, userInfo.countryCode);
            const api_url = `${base_url}${API_ENDPOINTS_TL.GET_OTP}`;
            const item = {
                "countryCode": userInfo.countryCode,
                "phone":  userInfo.phoneNumField,
                "type": "VERIFICATION"
            }
            console.log("Phone details obj", item);

            try {
                const result = await fetch(api_url, {
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })

                  const response = await result.json();

                if (response.Status === 'Success') {

                    setShowOtpField(true);

                        toast.success(response.Details.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                        console.log("Syed send otp api success result: ", response);

                  return response;
                }
                else
                {
                    console.log("Syed send otp api failure result: ", response);
                    toast.error(response.response, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                    router.push('/login')
                }
              }
              catch (error)
              {
              console.log("Syed send otp api error: ", error);
              toast.error("Something is unexpected", {
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

    const verifyOtp_api = async () =>
    {
        const api_url = `${base_url}${API_ENDPOINTS_TL.VERIFY_OTP}`;
        const item = {
            "countryCode": userInfo.countryCode,
            "phone": userInfo.phoneNumField,
            "otp": otpFieldVal
        }
        console.log("otp details obj", item);
        try
        {
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })

            const result = await response.json()
            console.log("Syed verify otp api success result: ", result);
            setOtpErrorMsg(result.Details);
            if (result.success === true)
            {
                console.log("Hasan otp matched");
                setShowOtpField(false);
                setShowSendOtp(false);
                setShowOtpVerified(true);
                setShowResendOtp(false);
            }
            else
            {
                toast.error(result.response.Details, {
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
        catch (error)
        {
            console.log("Syed verify otp api error: ", error);
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

    const signup_api = async () =>
    {
        const api_url = `${base_url}${API_ENDPOINTS_TL.USER_SIGNUP}`;
            const item = {
                "firstname": userInfo.firstNameField,
                "lastname": userInfo.lastNameField,
                "date": userInfo.dateField,
                "month": userInfo.monthField,
                "year": userInfo.yearField,
                "email": userInfo.emailField,
                "countryCode": userInfo.countryCode,
                "phone": userInfo.phoneNumField,
                "password": userInfo.passField,
                "password_confirmation": userInfo.cnfrmpassField
            }

        try
        {
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            const result = await response.json();
            console.log("Syed signup api success result: ", result);
        }
        catch (error)
        {
            console.log("Syed signup api error: ", error);
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

    const login_api = async (userData) =>
            {
                const api_url = `${base_url}${API_ENDPOINTS_TL.USER_LOGIN}`;
                const item = {
                    "email": userData.emailField,
                    "password": userData.passField
                }

                try
                {
                    const response = await fetch (api_url, {
                        method: 'POST',
                        headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(item)
                    })
                    const result = await response.json();
                    console.log("Login api success result: ", result);

                    if (result.success === true)
                    {
                        toast.success('Logged in Successfully', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                            login(result.data.token);
                            router.push('/');
                    }
                    else
                    {
                        toast.warning(result.data, {
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
                catch (error)
                {
                    console.log("Login api error: ", error);
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

    return {getOtp_api, verifyOtp_api, signup_api, login_api};
};
export default UserAuthApis;