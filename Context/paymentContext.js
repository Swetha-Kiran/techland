'use client';
import React, { createContext, useState } from 'react';

const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {

  const [paymentDetails, setPaymentDetails] = useState(
    {
      totalAmount:'',
      totalTLT:'',
      couponCode:'',
    }
  );

  const setPaymentDetailsFun = ( item ) =>
  {
    setPaymentDetails(item);
  }

  return (
    <PaymentContext.Provider value={{ paymentDetails, setPaymentDetailsFun  }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
