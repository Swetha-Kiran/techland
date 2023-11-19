import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaymentMethod from '@/app/utils/paymentMethod';
import UserContext from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import PaymentContext from '../../Context/paymentContext';

const Wallet = ( {walletBalance, tltValue} ) =>
{
    const [amountValue, setAmountValue] = useState(null);
    const [totalTLT, setTotalTLT] = useState(0);
    const { isAuthenticated } = useContext(UserContext);
    const { setPaymentDetailsFun } = useContext(PaymentContext);

    const router = useRouter();
    console.log("Amount value", amountValue);

    const toggleToolTip = () =>
    {
        const toolTipDivRef = document.getElementById('claimTltTooltip');

        toolTipDivRef.classList.toggle('hidden');
    }

    const {
    handlePay,
  } = PaymentMethod();

  const handlePayment = () =>
  {
    if (isAuthenticated)
    {
        if (amountValue)
        {
          if (amountValue >= 1 && amountValue <= 25000)
          {
            const amountObj = {
              totalAmount: amountValue,
              totalTLT: totalTLT,
              couponCode:'',
            };

            console.log("amount object on wallet page",  amountObj);

            // handlePay(amountObj, 'buyTlt');
            // let encodedAmount = btoa(encodeURIComponent(amountValue));
            // encodedAmount = encodedAmount.replace(/={1,2}$/, '');
            // router.push(`/paynow/${encodedAmount}`);

            setPaymentDetailsFun(amountObj);
            router.push("/paynow");
          }
          else if(amountValue > 25000)
          {
            toast.warning("Maximum amount limit 25,000 exceeded", {
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
          else
          {
            toast.warning("Minimum amount can be 1 Rupee", {
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
        else {
          toast.warning("Please enter amount to make payment", {
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
    else
    {
      toast.warning('Please login to make a payment', {
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
  }

    return (
        <>
            <section className='bg-yello-300 w-full md:w-[35%] lg:w-[20%] h-auto space-y-4'>
                    <div className='w-full bg-[#428358] rounded-[32px] px-4 2xl:px-6 py-6 2xl:py-8 space-y-6 2xl:space-y-8'>
                        <div className='relative'>
                            <div>
                                <h5 className='text-white text-xl 2xl:text-2xl font-semibold'>Wallet balance</h5>
                                <h3 className='text-white text-3xl 2xl:text-4xl font-semibold'>TLT {walletBalance}</h3>
                            </div>
                            <div id='claimTltTooltip' className='w-[60%] bg-white rounded-lg px-1 py-2 -mt-[72px] absolute right-2 -bottom-2 hidden'>
                                <p className='text-sm'>You cannot claim TLT until presale time period</p>
                            </div>
                        </div>
                        <div className='bg-yello-300 flex justify-around'>
                            <Link href='/' className='bg-[#90BE6D] w-[40%] rounded-3xl flex items-center flex-col py-3'>
                                <Image src='/myWalletImages/addMoney.svg' alt='add money' width={20} height={20} className='w-[16vw] md:w-[4vw] h-auto' />
                                <p className='text-sm 2xl:text-base font-semibold text-center'>ADD <br /> TLT</p>
                            </Link>
                            <div id='claimTltDiv' onMouseEnter={toggleToolTip} onMouseLeave={toggleToolTip} className='bg-[#768C65] w-[40%] rounded-3xl flex items-center flex-col py-3 opacity-60 cursor-pointer'>
                                <Image src='/myWalletImages/transferMoney.svg' alt='add money' width={20} height={20} className='w-[16vw] md:w-[4vw] h-auto' />
                                <p className='text-sm 2xl:text-base font-semibold text-center'>Claim <br /> TLT</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-full py-4 px-3 rounded-md'>
                        <h5 className='text-lg 2xl:text-xl text-[#6E737F]'>Spend</h5>
                        <div className='flex justify-between'>
                            <input type="text" onChange={(e) => {setAmountValue(+e.target.value); setTotalTLT(e.target.value * tltValue)}} className='text-lg 2xl:text-xl focus:outline-none w-2/3' placeholder='Enter Amount' />
                            <select name="currencyDropdown" id="currencyDropdown" className='text-[#6F6F6F] text-xl 2xl:text-2xl font-semibold focus:outline-none'>
                                <option value="INR">INR</option>
                                {/* <option value="USD" disabled>USD</option> */}
                            </select>
                        </div>
                    </div>
                    <div className='bg-white w-full py-4 px-3 rounded-md'>
                        <h5 className='text-lg 2xl:text-xl text-[#6E737F]'>Receive</h5>
                        <div className='flex'>
                            <p className='text-lg 2xl:text-xl flex-1'>{totalTLT}</p>
                            <p className='text-[#6F6F6F] text-xl 2xl:text-2xl font-semibold'>TLT</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handlePayment} className='bg-[#68bf7b] w-[60%] py-4 lg:py-2 rounded-2xl text-xl md:text-lg 2xl:text-xl font-semibold text-white'>
                            Buy Now
                        </button>
                    </div>
            </section>
        </>
    )
};
export default Wallet;