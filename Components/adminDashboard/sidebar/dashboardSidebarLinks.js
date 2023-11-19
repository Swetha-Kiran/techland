import Image from 'next/image';

export const dashboardSidebarLinks = [
    {
        title : 'User Management',
        icon : <Image src='/dashboardImages/sidebarImages/user.png' height='30' width='30'  alt='image' className='w-[25px] 2xl:w-[35px]' />,
        link : '/admin/dashboard/user-management'
    },
    {
        title : 'Investment Management',
        icon :  <Image src='/dashboardImages/sidebarImages/investment.png' height='30' width='30'  alt='image' className='w-[25px] 2xl:w-[35px]' />,
        link : '/admin/dashboard/investment'
    },
    {
        title : 'Stages',
        icon : <Image src='/dashboardImages/sidebarImages/stage.png' height='30' width='30'  alt='image' className='w-[25px] 2xl:w-[35px]' />,
        link : '/admin/dashboard/stages'
    },
    {
        title : 'Payment Details',
        icon : <Image src='/dashboardImages/sidebarImages/payment.png' height='30' width='30'  alt='image' className='w-[25px] 2xl:w-[35px]' />,
        link : '/admin/dashboard/payment'
    },
    {
        title : 'Our Staff',
        icon : <Image src='/dashboardImages/sidebarImages/staff.png' height='30' width='30'  alt='image' className='w-[25px] 2xl:w-[35px]' />,
        link : '/admin/dashboard/staff'
    },
];