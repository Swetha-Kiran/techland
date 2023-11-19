import React from 'react';
import Image from 'next/image';
import styling from "../../Styles/color.module.css"

const Comp_6 = () => {
    return (
        <div className='w-full h-auto lg:h-[calc(100vh-82px)] mx-auto mt-16'>
            <div className='w-full h-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-center justify-center px-4 lg:px-0'>
                <div className={`h-full w-full lg:w-[22vw] pt-2 flex flex-col justify-around items-cente ${styling.button}`}>
                    <div className='w-full h-[50%] px-4 space-y-[1vh] flex flex-col mt-2 items-center justify-center'>
                        <h1 className='text-[40px] lg:text-lg xl:text-2xl 2xl:text-3xl font-[900] lg:font-bold xl:font-[900] text-white sm:text-center lg:text-left'>WHY INVEST IN TechLand?</h1>
                        <p className='text-[15px] xl:text-sm 2xl:text-base font-normal text-white sm:text-center lg:text-left'>Investing in Techland offers a unique opportunity with our sustainable subscription model, organic products sourced from advanced organic farming using IoT kits. We promise a remarkable 10x return to investors upon exchange listing. Our innovative approach ensures ethical investments, environmental consciousness, and high profitability</p>
                    </div>
                    <div className='w-full h-[50%] flex items-center justify-center'>
                        <Image src='/Home Page Images/Comp_6 Images/main_Image.svg' width='350' height='350' alt='image' className='h-full' />
                    </div>
                </div>

                {/* <div className={`h-full w-full lg:w-[22vw] pt-2 flex flex-col justify-center items-center ${styling.button}`}>
                <div className='w-full h-[50%] px-4 space-y-[1vh] flex flex-col mt-2'>
                    <h1 className='text-[40px] lg:text-lg xl:text-xl 2xl:text-2xl font-[900] lg:font-bold xl:font-[900]  text-white sm:text-center lg:text-left'>WHY INVEST IN TechLand?</h1>
                    <p className='text-[15px] 2xl:text-xl font-normal  text-white sm:text-center lg:text-left'>Liquidity and flexibility enable customers to convert assets into cash without loss. Transparency ensures clear information. 24/7 access and global reach provide uninterrupted worldwide availability. Asset collection builds diverse portfolios. Customer support offers guidance.</p>
                </div>
                <div className='w-full h-[50%] flex items-center justify-center object-cover'>
                    <Image src='/Home Page Images/Comp_6 Images/main_Image.svg' width='350' height='350' alt='image' className='h-full' />
                </div>
            </div> */}
                <div className=' w-full lg:w-[68vw] h-full flex flex-col  space-y-4'>
                    <div className='w-full h-[50%] flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4'>
                        <div className='h-[30vh] md:h-[25vh] lg:h-full w-full md:w-[33%] flex flex-col items-center justify-center space-y-2  shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                            <Image src='/Home Page Images/Comp_6 Images/img1.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                            <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Liquidity and flexibility</h3>
                            <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                                <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Quickly convert assets into cash flow without significant loss </p>
                            </div>
                        </div>
                        <div className='h-[30vh] md:h-[25vh] lg:h-full w-full md:w-[33%] flex flex-col items-center justify-center space-y-2 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                            <Image src='/Home Page Images/Comp_6 Images/img2.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                            <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Transparency</h3>
                            <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                                <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Clear and open information of operations and listings</p>
                            </div>
                        </div>
                        <div className='h-[30vh] md:h-[25vh] lg:h-full w-full md:w-[33%] flex flex-col items-center justify-center space-y-2 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                            <Image src='/Home Page Images/Comp_6 Images/img3.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                            <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>24/7 access</h3>
                            <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                                <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Uninterrupted availability and worldwide accessibility for customers</p>
                            </div>
                        </div>

                    </div>
                    <div className='w-full h-[50%] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4'>
                        <div className='h-[30vh] md:h-[25vh] lg:h-full w-full md:w-[33%] flex flex-col items-center justify-center space-y-2  shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                            <Image src='/Home Page Images/Comp_6 Images/img4.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                            <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Asset collection</h3>
                            <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                                <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Build a diversified portfolio of valuable assets </p>
                            </div>
                        </div>
                        <div className='h-[30vh] md:h-[25vh] lg:h-full w-full md:w-[33%] flex flex-col items-center justify-center space-y-2 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                            <Image src='/Home Page Images/Comp_6 Images/img5.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                            <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Customer Support</h3>
                            <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                                <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Assistance and guidance for customers inquiries and concerns</p>
                            </div>
                        </div>
                        <div className='h-[30vh] md:h-[25vh] lg:h-full w-full md:w-[33%] flex flex-col items-center justify-center space-y-2 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                            <Image src='/Home Page Images/Comp_6 Images/img6.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                            <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Insights and Analytics</h3>
                            <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                                <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Data driven information for informed decision making </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
{/* <>
        <section className='bg-yello-300 w-[94vw] md:w-[84vw] lg:w-[94vw]  mx-auto mt-10 flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0'>
            <div className={`w-full lg:w-[22vw] ${styling.button} pt-5 relative`}>
                <div className='px-6 space-y-4'>
                    <h1 className='text-[40px] lg:text-[30px] xl:text-[40px] 2xl:text-5xl font-[900] lg:font-bold xl:font-[900] leading-[48px] lg:leading-[32px] xl:leading-[48px] text-white sm:text-center lg:text-left'>WHY INVEST IN TechLand?</h1>
                    <p className='text-[15px] 2xl:text-2xl font-normal leading-[21px] text-white sm:text-center lg:text-left'>Liquidity and flexibility enable customers to convert assets into cash without loss. Transparency ensures clear information. 24/7 access and global reach provide uninterrupted worldwide availability. Asset collection builds diverse portfolios. Customer support offers guidance.</p>
                </div>
                <div className='lg:absolute md:bottom-0 w-full -mt-10 lg:-mt-0'>
                    <Image src='/Home Page Images/Comp_6 Images/main_Image.svg' width='400' height='400' alt='image' className='w-full h-[300px] md:h-[350px] lg:h-[200px] xl:h-[230px] 2xl:h-[350px]'/>
                </div>
            </div>

            <section className='bg-blu-200 w-full lg:w-[68vw] space-y-6 2xl:space-y-9'>
                <div className='bg-orang-300 flex flex-col sm:flex-row sm:justify-between space-x-0 md:space-x-6 space-y-6 sm:space-y-0'>
                    <div className='bg-re-300 w-full sm:w-[30vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[22vw] py-10 2xl:py-20 flex flex-col items-center space-y-4 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>

                        <Image src='/Home Page Images/Comp_6 Images/img1.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                        <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Liquidity and flexibility</h3>
                        <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                            <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Quickly convert assets into cash flow without significant loss. </p>
                        </div>
                    </div>
                    <div className='bg-re-300 w-full sm:w-[30vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[22vw] py-10 2xl:py-20 flex flex-col items-center space-y-4 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                        <Image src='/Home Page Images/Comp_6 Images/img2.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                        <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Transparency</h3>
                        <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                            <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Clear and open information of operations and listings.</p>
                        </div>
                    </div>
                    <div className='bg-re-300 w-full sm:w-[30vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[22vw] py-10 2xl:py-20 flex flex-col items-center space-y-4 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                        <Image src='/Home Page Images/Comp_6 Images/img3.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                        <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>24/7 access</h3>
                        <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                            <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Uninterrupted availability and worldwide accessibility for customers.</p>
                        </div>
                    </div>
                </div>

                <div className='bg-orang-300 flex flex-col sm:flex-row sm:justify-between space-x-0 md:space-x-6 space-y-6 sm:space-y-0'>
                    <div className='bg-re-300 w-full sm:w-[30vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[22vw] py-10 2xl:py-20 flex flex-col items-center space-y-4 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                        <Image src='/Home Page Images/Comp_6 Images/img4.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                        <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Asset collection</h3>
                        <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                            <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Build a diversified portfolio of valuable assets. </p>
                        </div>
                    </div>
                    <div className='bg-re-300 w-full sm:w-[30vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[22vw] py-10 2xl:py-20 flex flex-col items-center space-y-4 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                        <Image src='/Home Page Images/Comp_6 Images/img5.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                        <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Customer Support</h3>
                        <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                            <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Assistance and guidance for customers inquiries and concerns.</p>
                        </div>
                    </div>
                    <div className='bg-re-300 w-full sm:w-[30vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[22vw] py-10 2xl:py-20 flex flex-col items-center space-y-4 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]'>
                        <Image src='/Home Page Images/Comp_6 Images/img6.svg' width='80' height='80' alt='image' className='h-[80px] w-[80px] 2xl:h-[120px] 2xl:w-[120px]' />
                        <h3 className='text-[15px] sm:text-[18px] lg:text-[15px] 2xl:text-[22px] font-bold leading-[18px] text-[#1b1b1b] text-center capitalize'>Insights and Analytics</h3>
                        <div className='bg-yello-300 px-6 sm:px-2 lg:px-6 '>
                            <p className='text-sm sm:text-base lg:text-sm 2xl:text-lg font-normal text-center text-[#1b1b1b]'>Data driven information for informed decision making. </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
</>  */}

export default Comp_6;