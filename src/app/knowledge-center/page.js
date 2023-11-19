import React from 'react';
import { GoSearch } from 'react-icons/go';
import Image from 'next/image';
import { RxCaretRight } from "react-icons/rx";
import Link from 'next/link';

const knowledge_center = () =>
{
    return (
        <>
            <section className='  bg-re-300 pb-6'>
                <section className='h-[18vh] lg:h-[20vh]   bg-[#e5f1ff] flex items-center flex-col space-y-5 py-6'>
                    <h3 className='text-3xl font-extrabold text-[#282c3f] text-center'>FAQs</h3>
                    
                    <div className='flex w-[84vw] md:w-[60vw] lg:w-[40vw]    items-center'>
                        <GoSearch className='text-2xl absolute translate-x-2 text-[#9ca3c1]' />
                        <input type="text" name="searchField" id="searchField" placeholder='Search' className='w-[84vw] min-h-[6vh] rounded-xl border-[1px] border-solid border-[#555770] px-10 text-lg' />
                    </div>
                </section>

                <section className="bg-blu-300 w-[84vw] mx-auto mt-12 py-3">
                    <h5 className='text-base font-medium text-[#282c3f] text-center'>Techland Basics</h5>

                    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[84vw]  bg-re-300 mx-auto mt-5'>

                        <Link href={`/knowledge-center/techland-basics/general-questions`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img1.svg' height='15' width='15' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>General Questions</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/pre-investment`} >
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img2.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Pre Investment</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/post-investment`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img3.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Post Investment</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/tax-&-filing`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img4.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Tax and Filing</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/grip-vault`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img5.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Grip Vault</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/KYC-&-signing`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img6.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>KYC & Signing</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/GID-related`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img7.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>GID Related</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/AIF-related`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img8.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>AIF Related</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/refer-&-earn`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img9.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Refer and Earn</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/data-security-&-privacy`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img10.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Data Security & Privacy</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </section>
              </section>

              <section className="bg-blu-300 w-[84vw] mx-auto mt-12 py-3">
                    <h5 className='text-base font-medium text-[#282c3f] text-center'>Asset Types</h5>

                    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[84vw] bg-re-300 mx-auto mt-5'>

                        <Link href={`/knowledge-center/techland-basics/leaseX`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img11.svg' height='15' width='15' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>LeaseX</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/corporate-bonds`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img12.svg' height='15' width='15' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Corporate Bonds</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/startup-equity`} >
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img13.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Startup Equity</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/knowledge-center/techland-basics/commercial-property`}>
                            <div className='w-[84vw] md:w-[42vw] lg:w-[24vw] h-[10vh] bg-yello-300 inline-flex mr-11 pl-8 rounded-md mb-6 shadow-lg'>
                                <div className='flex gap-8'>
                                    <Image src='/knowledgeCenterImages/Comp_1_Images/img14.svg' height='20' width='20' alt='Image' />
                                    <div className='flex w-[60vw] md:w-[30vw] lg:w-[18vw] justify-between items-center bg-yello-300'>
                                        <p className='text-sm font-semibold text-[#282c3f]'>Commercial Property</p>
                                        <RxCaretRight className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </section>
              </section>

              <section className='bg-yello-300 w-[84vw] h-[25vh] mx-auto flex flex-col justify-center items-center space-y-4 mt-5'>
                    <h5 className='text-lg font-bold text-[#282c3f]'>Still have doubts?</h5>
                    <p className='text-sm font-light text-[#282c3f]'>No worries contact us directly</p>
                    <Link href='/#inquiryForm'>
                        <button className='bg-[#07ae4d] text-white py-3 px-5 rounded-md outline-none'>Chat With Us</button>
                    </Link>
                </section>
                
            </section>
        </>
    )
};
export default knowledge_center;