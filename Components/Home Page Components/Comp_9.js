import React from 'react';

const Comp_9 = () =>
{
    return (
        <>
            <div className='w-[70vw]  mx-auto mt-16'>
                <section className='space-y-3'>
                    <h1 className='text-4xl font-semibold text-center text-[#202222]'>Have a doubt? Write Us</h1>
                    <p className='text-base font-normal text-[#252929] text-center'>We will respond at the earliest</p>
                </section>
                <section className='h-[60vh] w-[70vw] mx-auto mt-10 border-[2px] px-10 shadow-md flex flex-col justify-around rounded-xl'>
                    <div className='flex justify-between'>
                        <section className='bg-re-200 w-[30vw] h-full space-y-8 flex flex-col justify-center'>
                            <div className='bg-yello-200 space-y-3'>
                                <p className='text-sm font-normal leading-[21px] text-[#878787]'>Name *</p>
                                <input type="text" name="nameField" id="field1" className='bg-[#f8f8f8] text-[#495057] text-base font-normal border-[1px] w-full h-14 rounded-3xl border-[#bfbfbf] border-solid px-3 outline-green-400'/>
                            </div>
                            <div className='bg-yello-200 space-y-3'>
                                <p className='text-sm font-normal leading-[21px] text-[#878787]'>Email *</p>
                                <input type="mail" name="mailField" id="field2" className='bg-[#f8f8f8] text-[#495057] text-base font-normal border-[1px] w-full h-14 rounded-3xl border-[#bfbfbf] border-solid px-3 outline-green-400'/>
                            </div>
                        </section>

                        <section className='bg-re-200 w-[30vw] h-full space-y-8 flex flex-col justify-center'>
                            <div className='bg-yello-200 space-y-3'>
                                <p className='text-sm font-normal leading-[21px] text-[#878787]'>Any Message for us? 0/1000*</p>
                                <textarea name="messageField" id="field3" placeholder='Write Here...' className='bg-[#f8f8f8] text-[#495057] text-sm w-full h-[27vh] font-normal border-[1px] rounded-2xl border-[#bfbfbf] border-solid px-3 py-3 outline-green-400'></textarea>
                            </div>
                        </section>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-600 cursor-pointer px-10 py-[10px] outline-none text-white text-lg font-semibold rounded-3xl mt-4'>SUBMIT</button>
                    </div>
                </section>
            </div>
        </>
    )
};
export default Comp_9;