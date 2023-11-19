import React from 'react';
import Link from 'next/link';

const Construction_Page = () =>
{
    return(
        <>
            {/* <div className="w-[96] h-[100vh] bg-cover pt-32 flex flex-col items-center bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.pexels.com/photos/4491918/pexels-photo-4491918.jpeg?auto=compress&cs=tinysrgb&w=1300')] ">
                <h6 className='text-[60px] text-white text-center font-extrabold'>This webpage is under construction</h6>
                <Link href='/' className='w-[12vw] px-4 py-2 bg-[#2a364f] text-white text-base rounded-2xl outline-none text-center'>Go To Home</Link>
            </div> */}
            <div className="bg-white h-[calc(100vh-82px)] flex flex-col items-center justify-center space-y-8">
                <img src="https://i.pinimg.com/564x/5f/4a/f5/5f4af51d721932fe5a79c4a6d2f302cb.jpg" alt="miniIndia" height="500" width="500"/>
                <Link href='/' className='w-[50vw] sm:w-[12vw] px-4 py-2 bg-[#2a364f] text-white text-base rounded-2xl outline-none text-center lg:ml-10'>Go To Home</Link>
            </div>
        </>
    )
}
export default Construction_Page;