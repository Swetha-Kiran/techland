import React from 'react';
import PrivacyPolicy from '../../../../Components/LegalRightsComp/PrivacyPolicy';
import TermsAndConditions from '../../../../Components/LegalRightsComp/TermsAndConditions';
import EndUserLicenseAgreement from '../../../../Components/LegalRightsComp/endUserLicenseAgreement.js';
import CookiePolicy from '../../../../Components/LegalRightsComp/CookiePolicy';
import RefundAndCancellation from '../../../../Components/LegalRightsComp/refundAndCancellation';
import ShippingPolicy from '../../../../Components/LegalRightsComp/shippingPolicy';

import Link from 'next/link';
import { HiDownload } from "react-icons/hi"

const Page = ({params}) =>
{
    var pageId = params.elementId;

    if( pageId.includes('%26'))
    {
        pageId = pageId.replace('%26', '&')
    }
    var pageTitle = pageId.split('-')
    pageTitle = pageTitle.join(' ')

    return (
        <>
            <section className='bg-re-300 py-6'>
                <div className='bg-blu-300 h-[35vh] flex flex-col mt-5 justify-center space-y-5 pl-[8vw] border-y-2 border-solid border-[#ebebf0]'>
                    <div className='flex justify-between w-[90%] items-center'>
                        <p className='text-sm font-medium text-[#282c3f]'>Legal Rights</p>
                        <Link href={`/legalRightsPDF/${pageId}.pdf`} target='_blank' className='text-sm font-light flex items-center gap-2 text-white bg-green-500 py-3 px-3 rounded-lg'>
                        Download PDF <HiDownload className='inline-block text-xl' />
                        </Link>
                    </div>
                    <h1 className='text-5xl font-extrabold text-[#282c3f] capitalize'>{pageTitle}</h1>
                </div>

                <section className='bg-pin-300 w-[84vw] mx-auto py-6'>
                    {pageId === 'privacy-policy' &&(
                        <PrivacyPolicy />
                    )}
                    {pageId === 'terms-&-conditions' &&(
                        <TermsAndConditions />
                    )}
                    {pageId === 'end-user-license-agreement' &&(
                        <EndUserLicenseAgreement />
                    )}
                    {pageId === 'cookie-policy' &&(
                        <CookiePolicy />
                    )}
                    {pageId === 'refund-&-cancellation-policy' &&(
                        <RefundAndCancellation />
                    )}
                    {pageId === 'shipping-policy' &&(
                        <ShippingPolicy />
                    )}
                </section>
            </section>
        </>
    )
};
export default Page;