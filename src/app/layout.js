'use client';
import '../../Styles/globals.css'
import { Inter } from 'next/font/google'
import Script from "next/script";
import { Suspense } from 'react';
import Loading from './loading';
import Nav from '../../Components/Home Page Components/Header Components/Navbar';
import ConstructionComp from '../../Components/Home Page Components/UnderConstruction';
import Footer from '../../Components/Home Page Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '../../Context/UserContext';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SignupContextProvider } from './signup/signupContext';
import PaymentPageHeader from '../../Components/paymentComponents/Header';
import { PaymentContextProvider } from '../../Context/paymentContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const router = useRouter();
  const urlFlag = pathname.startsWith('/admin') || pathname.startsWith('/dashboard') || pathname.startsWith('/payment') || pathname.startsWith('/coupon') ? false : true;
  const paymentpath= pathname.startsWith('/payment') ||  pathname.startsWith('/admin') || pathname.startsWith('/dashboard') ? true : false;

  return (
    <html lang="en">
    <head>
      {/* Google analytics script */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-MJ548NBNLD" />
      <Script
        id = "google-analytics"
        strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MJ548NBNLD');
        `}
      </Script>

       {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11394544672" />
      <Script id = "google-ads">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'AW-11394544672');
        `}
      </Script>

      {/* Script for chatbot */}
      {/* <Script
       type="application/javascript"
       id = "chatbot"
       >
      {`
            window.tiledeskSettings=
            {
                projectid: "64e9cf811f22bc0019878f9c"
            };
            (function(d, s, id) {
                var w=window; var d=document; var i=function(){i.c(arguments);};
                i.q=[]; i.c=function(args){i.q.push(args);}; w.Tiledesk=i;
                var js, fjs=d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js=d.createElement(s);
                js.id=id; js.async=true; js.src="https://chatbot.snsilos.com/widget/launch.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document,'script','tiledesk-jssdk'));
        `}
      </Script> */}
    </head>

    <body className={`inter.className bg-[#f7f9fc]`}>
      <UserProvider >
      <SignupContextProvider>
      <PaymentContextProvider>
        {urlFlag && (<Nav />)}
       {paymentpath && <PaymentPageHeader />}
        <ToastContainer />
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense>
        {urlFlag && (<Footer />)}
      </PaymentContextProvider>
      </SignupContextProvider>
      </UserProvider>
    </body>
    </html>
  )
}