import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Validation_Comp = () =>
{
return (
    <>
        <section className='space-y-2 mx-auto'>
            <div className='flex justify-between'>
                <div className='flex w-[45%] gap-3 items-center'>
                    <span id='lowerCaseCircle' className='w-[14px] h-[14px] border-2 border-solid border-[#c7c7c7] rounded-full flex justify-center items-center'>
                    <BsCheck id='lowerCaseCheckMark' className='text-white hidden'/>
                    </span>
                    <p className='text-[11px] font-medium text-[#9a9a9a] tracking-wider'>One lowercase character</p>
                </div>
                <div className='flex w-[45%] gap-3 items-center'>
                    <span id='upperCaseCircle' className='w-[14px] h-[14px] border-2 border-solid border-[#c7c7c7] rounded-full flex justify-center items-center'>
                    <BsCheck id='upperCaseCheckMark' className='text-white hidden'/>
                    </span>
                    <p className='text-[11px] font-medium text-[#9a9a9a] tracking-wider'>One uppercase character</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex w-[45%] gap-3 items-center'>
                    <span id='digitCircle' className='w-[14px] h-[14px] border-2 border-solid border-[#c7c7c7] rounded-full flex justify-center items-center'>
                    <BsCheck id='digitCheckMark' className='text-white hidden'/>
                    </span>
                    <p className='text-[11px] font-medium text-[#9a9a9a] tracking-wider'>one numerical digit</p>
                </div>
                <div className='flex w-[45%] gap-3 items-center'>
                    <span id='specialCaseCircle' className='w-[14px] h-[14px] border-2 border-solid border-[#c7c7c7] rounded-full flex justify-center items-center'>
                    <BsCheck id='specialCaseCheckMark' className='text-white hidden'/>
                    </span>
                    <p className='text-[11px] font-medium text-[#9a9a9a] tracking-wider'>one special symbol</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex w-[45%] gap-3 items-center'>
                    <span id='lengthCircle' className='w-[14px] h-[14px] border-2 border-solid border-[#c7c7c7] rounded-full flex justify-center items-center'>
                    <BsCheck id='lengthCheckMark' className='text-white hidden'/>
                    </span>
                    <p className='text-[11px] font-medium text-[#9a9a9a] tracking-wider'>Atleast 8 characters long</p>
                </div>
            </div>
        </section>
    </>
)
};
export default Validation_Comp;