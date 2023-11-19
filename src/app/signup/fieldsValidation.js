import React, { useContext, useState } from 'react';
import UserContext from '../../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { useSignupContext } from './signupContext';
import UserAuthApis from './userAuthApis';

const FieldsValidation = () =>
{
    const { userInfo, setUserInfo } = useContext(UserContext);
    const router = useRouter();

    const {
        setfirstNameErrorMsg,
        setlastNameErrorMsg,
        setdateErrorMsg,
        setmonthErrorMsg,
        setyearErrorMsg,
        setphoneNumErrorMsg,
        setemailErrorMsg,
        setpasswordErrorMsg,
        setcnfrmpasswordErrorMsg,
        password_validation,
        setpassword_validation,
        showOtpVerified
    } = useSignupContext();

    const { signup_api } = UserAuthApis();

    const handleChange = (event) =>
    {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        if (fieldName === 'dateField' || fieldName === 'monthField' || fieldName === 'yearField')
        {
            let numericValue = fieldValue.replace(/\D/g, ''); // Remove non-numeric characters

            if (fieldName === 'dateField')
            {
                numericValue ? numericValue = Math.min(+numericValue, 31) : numericValue = '';
            }
            else if (fieldName === 'monthField')
            {
                numericValue ? numericValue = Math.min(+numericValue, 12) : numericValue = '';
            }
            else
            {
                numericValue ? numericValue = Math.min(+numericValue, 2023) : numericValue = '';
                if (numericValue && numericValue < 1900 && numericValue.toString().length == 4)
                {
                    numericValue = 1925;
                }
            }

            setUserInfo({
                ...userInfo,
                [fieldName] : numericValue
            })
        }
        else if(fieldName === 'passField')
        {
            const regexUpperCase = /[A-Z]/;
            const regexLowerCase = /[a-z]/;
            const regexSpecialSymbol = /[\W_]/; // Matches any non-word character (special symbol)
            const regexDigit = /\d/; // Matches any numerical digit

            let passCheck = fieldValue.length >= 8 && regexLowerCase.test(fieldValue) && regexUpperCase.test(fieldValue) &&  regexSpecialSymbol.test(fieldValue) && regexDigit.test(fieldValue) ? true : false
            setpassword_validation(passCheck);
            // console.log("Passss", password_validation);
            regexLowerCase.test(fieldValue) ?
            (document.getElementById('lowerCaseCircle').classList.add('border-none', 'bg-[#1f73b7]'), document.getElementById('lowerCaseCheckMark').classList.remove('hidden'))
            : (document.getElementById('lowerCaseCircle').classList.remove('border-none', 'bg-[#1f73b7]'), document.getElementById('lowerCaseCheckMark').classList.add('hidden'));

            regexUpperCase.test(fieldValue) ?
            (document.getElementById('upperCaseCircle').classList.add('border-none', 'bg-[#1f73b7]'), document.getElementById('upperCaseCheckMark').classList.remove('hidden'))
            : (document.getElementById('upperCaseCircle').classList.remove('border-none', 'bg-[#1f73b7]'), document.getElementById('upperCaseCheckMark').classList.add('hidden'));

            regexSpecialSymbol.test(fieldValue) ?
            (document.getElementById('specialCaseCircle').classList.add('border-none', 'bg-[#1f73b7]'), document.getElementById('specialCaseCheckMark').classList.remove('hidden'))
            : (document.getElementById('specialCaseCircle').classList.remove('border-none', 'bg-[#1f73b7]'), document.getElementById('specialCaseCheckMark').classList.add('hidden'));

            regexDigit.test(fieldValue) ?
            (document.getElementById('digitCircle').classList.add('border-none', 'bg-[#1f73b7]'), document.getElementById('digitCheckMark').classList.remove('hidden'))
            : (document.getElementById('digitCircle').classList.remove('border-none', 'bg-[#1f73b7]'), document.getElementById('digitCheckMark').classList.add('hidden'));

            fieldValue.length >= 8 ?
            (document.getElementById('lengthCircle').classList.add('border-none', 'bg-[#1f73b7]'), document.getElementById('lengthCheckMark').classList.remove('hidden'))
            : (document.getElementById('lengthCircle').classList.remove('border-none', 'bg-[#1f73b7]'), document.getElementById('lengthCheckMark').classList.add('hidden'));

            setUserInfo({
                ...userInfo,
                [fieldName] : fieldValue
            })
        }
        else
        {
            setUserInfo({
                ...userInfo,
                [fieldName] : fieldValue
            })
        }

    }

    const handleSubmit = (event) =>
    {
        event.preventDefault()

        let firstNameVerified = false;
        if (userInfo.firstNameField === '')
        {
            setfirstNameErrorMsg('this field can not be empty.');
        }
        else if (userInfo.firstNameField.length < 3)
        {
            setfirstNameErrorMsg('name must have atleast 3 characters.');
        }
        else if (userInfo.firstNameField.length > 15)
        {
            setfirstNameErrorMsg('name must not have more than 15 characters.');
        }
        else
        {
            setfirstNameErrorMsg('');
            firstNameVerified = true;
        }

        let lastNameVerified = false;
        if (userInfo.lastNameField === '')
        {
            setlastNameErrorMsg('this field can not be empty.');
        }
        else if (userInfo.lastNameField.length < 3)
        {
            setlastNameErrorMsg('name must have atleast 3 characters.');
        }
        else if (userInfo.lastNameField.length > 15)
        {
            setlastNameErrorMsg('name must not have more than 15 characters.');
        }
        else
        {
            setlastNameErrorMsg('');
            lastNameVerified = true;
        }

        let birthDateVerified = false;
        let dateValidation = false; let monthValidation = false; let yearValidation = false;

        userInfo.dateField.toString().length == 0 || userInfo.dateField == '0' ? setdateErrorMsg('invalid date.'): (setdateErrorMsg(''), dateValidation = true);
        userInfo.monthField.toString().length == 0 || userInfo.monthField == '0' ? setmonthErrorMsg('invalid month.') : (setmonthErrorMsg(''), monthValidation = true);
        userInfo.yearField.toString().length >= 0 && userInfo.yearField.toString().length < 4 ? setyearErrorMsg('invalid year.') : (setyearErrorMsg(''), yearValidation = true);

        if (dateValidation && monthValidation && yearValidation)
        {
            let date = `${userInfo.monthField.toString()}-${userInfo.dateField.toString()}-${userInfo.yearField.toString()}`

            // User's birth date
            let birthDate = new Date(date);
            // Current date
            let currentDate = new Date();

            // Get the birth date components
            var birthYear = birthDate.getFullYear();
            var birthMonth = birthDate.getMonth() + 1; // January is month 0
            var birthDay = birthDate.getDate();

            // Get the current date components
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth() + 1;
            var currentDay = currentDate.getDate();

            // Compare the dates
            if (currentYear - birthYear > 18)
            {
                birthDateVerified = true;
            }
            else if (currentYear - birthYear === 18)
            {
                if (currentMonth > birthMonth)
                {
                    birthDateVerified = true;
                }
                else if (currentMonth === birthMonth)
                {
                    if (currentDay >= birthDay)
                    {
                        birthDateVerified = true;
                    }
                    else
                    {
                        setdateErrorMsg("you're below 18");
                    }
                }
                else
                {
                    setdateErrorMsg("you're below 18");
                }
            }
            else
            {
                setdateErrorMsg("you're below 18");
            }
        }

        let phoneNumVerified = false;
        userInfo.phoneNumField.length == 0 ? setphoneNumErrorMsg('this field can not be empty') : userInfo.phoneNumField.length < 10 ? setphoneNumErrorMsg('phone number is too short in indian standard') : (setphoneNumErrorMsg(''), phoneNumVerified = true);

        let emailVerified = false;
       // Regular expression pattern for validating email addresses
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Use the test() method to check if the email matches the pattern
        let mail_validation = pattern.test(userInfo.emailField);

        !userInfo.emailField.length ? setemailErrorMsg('this field can not be empty') : !mail_validation ? setemailErrorMsg('invalid email id') : (setemailErrorMsg(''), emailVerified = true)

        let passwordVerified = false;
       if (!password_validation && userInfo.passField.length > 0)
       {
        setpasswordErrorMsg("password doesn't full fill all requirements")
       }
       else if (userInfo.passField.length == 0)
       {
        setpasswordErrorMsg("this field can not be empty")
       }
       else if (userInfo.passField.length > 15)
       {
        setpasswordErrorMsg("password is too long: max character 15")
       }
       else
       {
        setpasswordErrorMsg("");
        passwordVerified = true;
       }

       let cnfrmPasswordVerified = false;
        userInfo.passField != userInfo.cnfrmpassField ? setcnfrmpasswordErrorMsg("passwords do not match") : (setcnfrmpasswordErrorMsg(""), cnfrmPasswordVerified = true)
        console.log(userInfo);

        if (firstNameVerified && lastNameVerified && birthDateVerified && phoneNumVerified && showOtpVerified && emailVerified && passwordVerified && cnfrmPasswordVerified)
        {
            signup_api();
            toast.success('Account Created Successfully. Please Login', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                router.push('/login');
        }
        else
        {
            toast.error('Please fill all fields and verify phone number', {
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

    };

    return { handleChange, handleSubmit };
}

export default FieldsValidation;