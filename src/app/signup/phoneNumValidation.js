import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../../Context/UserContext';
import { useSignupContext } from './signupContext';
import UserAuthApis from './userAuthApis';

const PhoneNumValidation = () =>
{
    const { userInfo, setUserInfo } = useContext(UserContext);
    const {
        setShowOtpField,
        setShowSendOtp,
        showResendOtp,
        setShowResendOtp,
        setResendOtpTiming,
        setOtpFieldVal,
        showOtpVerified,
        setShowOtpVerify,
        setphoneNumErrorMsg
    } = useSignupContext();

    const { getOtp_api, verifyOtp_api } = UserAuthApis();

    const phoneNumFieldHandleChange = (value, country, countryCode, e) =>
    {
        const numberDetails = e.split(' ');
        const country_code = numberDetails[0];
        const phone_num = value.slice(country_code.length-1);

        setUserInfo({
            ...userInfo,
            countryCode : country_code,
            phoneNumField : phone_num
        })

        if (value.length >= 12)
        {
            !showOtpVerified ? setShowSendOtp(true) : ''
            setphoneNumErrorMsg('');
        }
        else
        {
            setShowSendOtp(false)
        }
    }
    const otpFieldhandleChange = (event) =>
    {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let numericValue = fieldValue.replace(/\D/g, ''); // Remove non-numeric characters
            numericValue ? numericValue = numericValue : numericValue = '';

            setOtpFieldVal(numericValue);
            if (numericValue.length ==  6)
            {
                setShowOtpVerify(true);
            }
            else
            {
                setShowOtpVerify(false);
            }
    }

  useEffect(() => {
    let intervalId;

    if (showResendOtp)
    {
      intervalId = setInterval(() =>
      {
        setResendOtpTiming(prevTiming =>
        {
            if (prevTiming === 1)
                {
                    clearInterval(intervalId);
                    setShowResendOtp(false);
                    setShowSendOtp(true);
                    return 60;
                }
          return prevTiming - 1;
        });
      }, 1000);
    }

    // Clear the interval when the component unmounts
    return () => {
      if (intervalId)
      {
        clearInterval(intervalId);
      }
    };
  }, [showResendOtp]);

    const handleSendOtp = () =>
    {
        setShowSendOtp(false);
        setShowResendOtp(true);

        // Calling this function to fetch send otp api
        getOtp_api();
    }

    return {phoneNumFieldHandleChange, otpFieldhandleChange, handleSendOtp, verifyOtp_api}
};
export default PhoneNumValidation;