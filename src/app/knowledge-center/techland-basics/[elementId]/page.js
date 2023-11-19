'use client';
import React from 'react'
import { useRouter } from 'next/navigation';  //debugging
import { RxCaretLeft, RxCaretUp } from "react-icons/rx";
import Link from 'next/link';
import dataobj from '../../../../../Components/KnowledgeCenterPage/Faq_Questions';

const Page = ({params}) => 
{ 
  var FaqElementPageId = params.elementId;
  var str = FaqElementPageId;
  str = str.split('-');

  var FaqElementPageTitle = str.join(' ');

  if (FaqElementPageId.includes('%26') )
  {
    const replacedTitle = FaqElementPageTitle.replace('%26', '&');
    FaqElementPageTitle = replacedTitle;

    const replacedId = FaqElementPageId.replace('%26', '&');
    FaqElementPageId = replacedId;
    console.log("Syed", FaqElementPageId)
  }
  const router = useRouter()

  const handleDivAction = (summaryDivId, upArrowIconId) =>
  {
    const divref = document.getElementById(summaryDivId);
    const iconref = document.getElementById(upArrowIconId);

    divref.classList.toggle('hidden');
    iconref.classList.toggle('rotate-180');
  }

  return (
    <>
        <section className='bg-re-300 w-[84vw] mx-auto py-6 flex lg:flex-row flex-col lg:justify-between  lg:items-start'>

          <section className='bg-yello-300 lg:w-[25vw] py-2 h-fit'>
            <button onClick={() => router.back() } className='lg:text-sm md:text-lg font-semibold text-[#282c3f] underline flex items-center' > <RxCaretLeft className='lg:text-xl md:text-2xl' /> Back to FAQ </button>
            <h5 className='text-[32px] font-semibold leading-[42px] text-[#282c3f] mt-5 capitalize'>{FaqElementPageTitle}</h5>

            <section className='bg-pin-300 lg:w-[30vw] h-[25vh] mx-auto flex flex-col justify-center space-y-4 mt-14'>
                    <h5 className='lg:text-lg md:text-xl font-bold text-[#282c3f]'>Still have doubts?</h5>
                    <p className='lg:text-sm font-light text-[#282c3f]'>No worries contact us directly</p>
                    <Link href='/#inquiryForm'>
                        <button className='bg-[#07ae4d] text-white py-2 px-4 rounded-md outline-none'>Chat With Us</button>
                    </Link>
            </section>
          </section>

          <section className='bg-pin-300 lg:w-[50vw] h-fit rounded-xl border-[1px] mt-5 lg:mt-0 border-solid border-[#efefef]'>
          
            {
              dataobj.map((curItem, index, array) =>
                {
                  if (FaqElementPageId === curItem.FaqSectionId)
                    { 
                        return curItem.FaqSectionDetails.map((item) => (

                                  <div key = {`${curItem.FaqSectionId}_${item.id}`} onClick={() => handleDivAction(`moreDetailsDiv_${item.id}`, `upArrowIcon_${item.id}`)} className='w-full bg-white px-4 border-b-[1px] border-solid border-[#efefef] overflow-hidden cursor-pointer'>
                                    <div className='flex items-center justify-between min-h-[10vh]'>
                                      <h5 className='text-base font-semibold text-[#212121]'>{item.title}</h5>
                                      <span className='w-[22px] h-[22px] rounded-full border-2 border-[#81878c] border-solid'>
                                        <RxCaretUp id={`upArrowIcon_${item.id}`} className='lg:text-lg md:text-xl text-[#81878c] font-bold rotate-180' />
                                      </span>
                                    </div>
                                    <div id={`moreDetailsDiv_${item.id}`} className='hidden pb-2'>
                                      <p className='lg:text-sm md:text-base text-justify'>{item.summary}</p>
                                    </div>
                                  </div>  
                                ))
                      }
                })
            }

          </section>
        </section>
    </>
  )
}

export default Page;
