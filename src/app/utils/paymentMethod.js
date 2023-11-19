import React from 'react';
import httptl from '@/app/utils/httptl';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const PaymentMethod = () =>
{
    const router = useRouter();

    const initializeRazorpay = async () => {
        // Implementation of initializeRazorpay function
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
              resolve(true);
            };

            script.onerror = () => {
              resolve(false);
            };

            document.body.appendChild(script);
          });

      };

  const handlePay = async (amountInfo, paymentType) => {

    console.log("Payment has been proccessing, amountInfo, paymentType", amountInfo, paymentType);

    await initializeRazorpay();

    const base_url = process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;

    if (paymentType === 'buyTlt')
    {
      console.log("amount obj in buy tlt", amountInfo);
      try {
        const api_url = `${base_url}${API_ENDPOINTS_TL.BUY_TLT_PAYMENT}`;

         // Make a POST request to the specified API endpoint
         const response = await httptl.post(api_url, amountInfo, {
           headers: {
               includeAuthorizationToken : true,
               },
         });

         const gatewayresponse = response.data.data;
         console.log('razorpay buy tlt payment gateway api response', gatewayresponse);

         const options = {
            // key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
             key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
             name: "Techland",
             currency: gatewayresponse.currency,
             amount: gatewayresponse.amount,
             order_id: gatewayresponse.id,
             description: "Payment for your order",
             image: "https://tech-land.in/_next/image?url=%2FHome%20Page%20Images%2FNavBar%20Images%2FTech_Logo.png&w=256&q=75",
             handler: function (response) {
                 console.log('Response from razorpay buy tlt payment gateway', response);

                 // Send user to order page with order data
               toast.success('Payment done successfully', {
                               position: "top-right",
                               autoClose: 3000,
                               hideProgressBar: false,
                               closeOnClick: true,
                               pauseOnHover: true,
                               draggable: true,
                               progress: undefined,
                               theme: "dark",
                               });
                               router.push('/');
             },
             prefill: {},
         };

         // Create Razorpay payment object and open the payment modal
         const paymentObject = new window.Razorpay(options);
         paymentObject.open();
     }
     catch (error)
     {
         console.log("error in buy tlt payment gateway api", error);
     }

     }
    else if (paymentType === 'buyPackage')
    {
      console.log("amount obj in buy package", amountInfo)
      try {
        const api_url = `${base_url}${API_ENDPOINTS_TL.BUY_PACKAGE}`;

         // Make a POST request to the specified API endpoint
         const response = await httptl.post(api_url, amountInfo, {
           headers: {
               includeAuthorizationToken : true,
               },
         });

         console.log('buy package api response', response);

         if(response.data.success === true)
         {
          toast.success('Package purchased successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            router.push('/my_wallet');
         }
      }
      catch (error)
      {
          console.log("error in buy package payment gateway api", error);
      }
     };

    }

  return {
    handlePay,
  }
}
export default PaymentMethod;