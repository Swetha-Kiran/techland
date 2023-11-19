"use client";
import React, {useState, useEffect, useContext} from 'react';
import PackageDetails from '../packagesDetails';
import LeftSection from './leftSection';
import InvestmentCard from './investmentCard';
import BenefitCard from './BenefitsCard';
import HeroNav from './heroNav';
import PaymentMethod from '@/app/utils/paymentMethod';
import UserContext from '../../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Hero = () =>
{
    const { isAuthenticated } = useContext(UserContext);
    const router = useRouter();
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [activeTermIndex, setActiveTermIndex] = useState(0);

    const { getPackages, packageDetails } = PackageDetails();

    const [amountInfo, setAmountInfo] = useState({
        "package_id":"",
        "package_plan_id":"",
        "quantity":1
    });
    console.log("amountInfo", amountInfo);
    console.log("package details array", packageDetails);

    const {
      handlePay,
    } = PaymentMethod();

    useEffect(() =>
    {
      getPackages();
    }, []);

    // Update amountInfo when activeButtonIndex changes
    useEffect(() => {
      const curItem = packageDetails.find((item, index) => index == activeButtonIndex);

      console.log("curitem obj", curItem);
      if (curItem) {
          setAmountInfo(prevState => ({
            "package_id":curItem._id,
            "package_plan_id":curItem.invest_types[activeTermIndex]._id,
            "quantity":1
          }));
      }
  }, [packageDetails, activeButtonIndex, activeTermIndex]);

  const handlePayment = () =>
  {
    if (isAuthenticated)
    {
      if (amountInfo.total >= 100000)
      {
        toast.error('Maximum Amount limit exceeded', {
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
        handlePay(amountInfo, "buyPackage");
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
        <section className='bg-re-30 w-full flex  flex-col lg:items-center'>

            {/* Left part of hero section */}
            <LeftSection />

            {/* Right part of hero section */}
            <section className='bg-blu-300 bg-[#fcfdff] lg:w-4/5 flex flex-col justify-center px-4 py-4 2xl:px-6 space-y-4 rounded-[40px]'>
                {/* navbar */}
                <HeroNav
                activeButtonIndex = {activeButtonIndex}
                setActiveButtonIndex = {setActiveButtonIndex}
                 />

                {/* Investment and benefits cards */}
                {packageDetails.map((curItem, index) =>
                {
                    if (index ==  activeButtonIndex)
                    {
                        return (
                        <div key={curItem.id} className='overflow-x-auto scrollbar-hide px-2'>
                           <section className='flex bg-gree-500 w-[170vw]  sm:w-full sm:justify-between space-x-4 lg:space-x-0 lg:justify-around py-1 '>
                             <>
                               {/* Investment card */}
                            <InvestmentCard
                            curItem = {curItem}
                            activeTermIndex = {activeTermIndex}
                            setActiveTermIndex = {setActiveTermIndex}
                             />
                            {/* Benefits card */}
                            <BenefitCard
                            curItem = {curItem}
                            activeTermIndex = {activeTermIndex}
                            />
                             </>
                           </section>
                        </div>
                    )
                    }
                })}
                <div className='flex justify-center'>
                  <button onClick={handlePayment} className='px-8 py-3 2xl:px-12 2xl:py-5 rounded-[44px] bg-[#2A2B39] text-[#ffffff] text-[20px] 2xl:text-[22px] font-semibold'>Invest Now</button>
                </div>
            </section>
        </section>
    )
};
export default Hero;