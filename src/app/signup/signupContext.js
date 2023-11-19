import React, { createContext, useContext, useState } from 'react';

const signupContext = createContext();

export const useSignupContext = () => {
    return useContext(signupContext);
};

export const SignupContextProvider = ({ children }) => {
    const [firstNameErrorMsg, setfirstNameErrorMsg] = useState('');
    const [lastNameErrorMsg, setlastNameErrorMsg] = useState('');
    const [dateErrorMsg, setdateErrorMsg] = useState('');
    const [monthErrorMsg, setmonthErrorMsg] = useState('');
    const [yearErrorMsg, setyearErrorMsg] = useState('');
    const [phoneNumErrorMsg, setphoneNumErrorMsg] = useState('');
    const [emailErrorMsg, setemailErrorMsg] = useState('');
    const [passwordErrorMsg, setpasswordErrorMsg] = useState('');
    const [cnfrmpasswordErrorMsg, setcnfrmpasswordErrorMsg] = useState('');
    const [password_validation, setpassword_validation] = useState(false);
    const [showOtpField, setShowOtpField] = useState(false);
    const [showSendOtp, setShowSendOtp] = useState(false);
    const [showResendOtp, setShowResendOtp] = useState(false);
    const [resendOtpTiming, setResendOtpTiming] = useState(60);
    const [otpFieldVal, setOtpFieldVal] = useState('');
    const [showOtpVerify, setShowOtpVerify] = useState(false);
    const [showOtpVerified, setShowOtpVerified] = useState(false);
    const [otpErrorMsg, setOtpErrorMsg] = useState('');

    const contextValue = {
        firstNameErrorMsg,
        setfirstNameErrorMsg,
        lastNameErrorMsg,
        setlastNameErrorMsg,
        dateErrorMsg,
        setdateErrorMsg,
        monthErrorMsg,
        setmonthErrorMsg,
        yearErrorMsg,
        setyearErrorMsg,
        phoneNumErrorMsg,
        setphoneNumErrorMsg,
        emailErrorMsg,
        setemailErrorMsg,
        passwordErrorMsg,
        setpasswordErrorMsg,
        cnfrmpasswordErrorMsg,
        setcnfrmpasswordErrorMsg,
        password_validation,
        setpassword_validation,
        showOtpField,
        setShowOtpField,
        showSendOtp,
        setShowSendOtp,
        showResendOtp,
        setShowResendOtp,
        resendOtpTiming,
        setResendOtpTiming,
        otpFieldVal,
        setOtpFieldVal,
        showOtpVerify,
        setShowOtpVerify,
        otpErrorMsg,
        setOtpErrorMsg,
        showOtpVerified,
        setShowOtpVerified
    };

    return (
        <signupContext.Provider value={contextValue}>
            {children}
        </signupContext.Provider>
    );
};
