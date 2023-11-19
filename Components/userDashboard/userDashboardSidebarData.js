import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { VscReferences } from 'react-icons/vsc';
import { PiCalculatorBold, PiIdentificationCardLight, PiIdentificationBadgeThin } from "react-icons/pi";
import { SlWallet } from "react-icons/sl"

export const userDashboardSidebarData = [
    {
        title : 'My Investment',
        icon : <BiMoneyWithdraw className='text-lg'/>,
        link : '/dashboard'
    },
    {
        title : 'Wallet',
        icon : <SlWallet className='text-lg'/>,
        link : '/dashboard/wallet'
    },
    {
        title : 'Calculator',
        icon : <PiCalculatorBold className='text-lg'/>,
        link : '/dashboard/calculator'
    },
    {
        title : 'eKYC',
        icon : <PiIdentificationCardLight className='text-lg'/>,
        link : '/dashboard/kyc'
    },
    {
        title : 'Portfolio',
        icon : <PiIdentificationBadgeThin className='text-lg'/>,
        link : '/dashboard/portfolio'
    },
    {
        title : 'Income Certificate',
        icon : <AiOutlineSafetyCertificate className='text-lg'/>,
        link : '/dashboard/income-certificate'
    },
    {
        title : 'My Referals',
        icon : <VscReferences className='text-lg'/>,
        link : '/dashboard/my-referals'
    },
];