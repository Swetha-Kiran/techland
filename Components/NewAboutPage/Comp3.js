import React from 'react'

function Comp3() {
    return (
        <div className='w-full h-auto bg-gradient-to-r from-[#c0E29A] to-[#82AB53] px-4 lg:px-8 py-8 flex flex-col justify-between items-center space-y-12'>
            <p className='text-center font-bold text-[#035016] text-3xl lg:text-5xl'>What we do?</p>
            <p className='font-semibold text-[#FFFFFF] text-2xl'>Experience a new era of investment possibilities at Tech-Land. Our meticulously crafted
                choices like Major Land and Mega Land suit every ambition. Rooted in transparency and
                sustainable progress, we unlock pathways to rewarding investments. Our mission is to elevate
                lives by delivering extraordinary value, empowering investors to architect their financial
                destiny. Embrace this transformative journey toward unrivalled investment triumph with us.</p>
            <div className='w-full flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0'>
                <div className='h-[250px] w-full lg:w-[25%] flex flex-col  p-4 items-center justify-start space-y-10 bg-[#FFFFFF] rounded-[20px] shadow-lg text-[#000000] relative'>
                <div className='bg-[#035016] w-[50px] h-[50px] rounded-full  text-[#FFFFFF] font-bold flex items-center justify-center absolute -top-6 left-[70%]'>1</div>
                    <p className='font-bold text-xl text-[#035016] text-center'>LAND INVESTMENT
                        OPPORTUNITIES</p>
                    <p className='text-center text-lg'>Explore diverse land
                        investments for short, mid,
                        and long-term growth
                        strategies</p>
                </div>
                <div className='h-[250px] w-full lg:w-[25%] flex flex-col  p-4 items-center justify-start space-y-10 bg-[#FFFFFF] rounded-[20px] shadow-lg text-[#000000] relative'>
                    <div className='bg-[#035016] w-[50px] h-[50px] rounded-full  text-[#FFFFFF] font-bold flex items-center justify-center absolute -top-6 left-[70%]'>2</div>
                    <p className='font-bold text-xl text-[#035016] text-center'>INNOVATIVE INVESTMENT
                        STRUCTURES</p>
                    <p className='text-center text-lg'>Unveiling imaginative
                        pathways to digital
                        investments for enduring
                        profitability</p>
                </div>
                <div className='h-[250px] w-full lg:w-[25%] flex flex-col  p-4 items-center justify-start space-y-10 bg-[#FFFFFF] rounded-[20px] shadow-lg text-[#000000] relative'>
                <div className='bg-[#035016] w-[50px] h-[50px] rounded-full  text-[#FFFFFF] font-bold flex items-center justify-center absolute -top-6 left-[70%]'>3</div>
                    <p className='font-bold text-xl text-[#035016] text-center'>TECHLAND<br/>
                        PLATFORM SERVICES</p>
                    <p className='text-center text-lg'>End-to-end solution for large
                        investors to build or scale
                        their portfolios</p>
                </div>
            </div>
        </div>
    )
}

export default Comp3