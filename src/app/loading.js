import React from 'react';
import Image from 'next/image';

const Loading = () =>
{
    return (
        <>
            <div className='bg-white w-full h-[calc(100vh-40px)] flex justify-center items-center'>
                <Image src='/paymentPageImages/loader.svg' width={100} height={100} alt='qr code loader image' className='w-[30%] lg:w-[15%]' />
            </div>
        </>
    )
};
export default Loading;