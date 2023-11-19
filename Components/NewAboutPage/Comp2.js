import React from 'react'
import Image from 'next/image'

function Comp2() {
    return (
        <div className='w-full h-auto bg-[#E7F8D4] px-4 md:px-8 py-8 space-y-6'>
            <p className='text-center font-bold text-[#035016] text-3xl lg:text-5xl'>Our Story</p>
            <p className='font-normal text-[#1C1F1A] text-xl'>TechLands story began in 2023, born from a collective vision to address the modern-day challenges of investments. Not limited to just an investment
                platform, TechLand has been meticulously crafted to meet the demands of this generation, integrating cutting-edge IoT technology into the realm of
                sustainable agriculture.</p>
            <p className='font-normal text-[#1C1F1A]] text-xl'>
                Our founding team, with a diverse blend of expertise in finance, technology, and property development, envisioned a platform that would not only
                bridge the gap between traditional and digital investments but also revolutionize the agricultural landscape.
            </p>
            <p className='font-normal text-[#1C1F1A]] text-xl'>
                By seamlessly integrating smart and sustainable agricultural practices with the latest IoT technology, we have created a powerful synergy that
                ensures accurate crop monitoring, predictions, and real-time analysis. Fuelled by the foresight of our team, we founded TechLand and introduced our
                revolutionary Crypto Token, TLT (TechLand Token), promising high returns and risk-free investment opportunities.
            </p>
            <p className='font-normal text-[#1C1F1A]] text-xl'>
                Join us as we pave the way for a future where technology and agriculture unite, creating a sustainable and prosperous tomorrow. Welcome to
                TechLand, where innovation meets sustainable growth.
            </p>
            <div className='w-full flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0'>
                <div className='h-[350px] w-full lg:w-[25%] flex flex-col space-y-3 p-4  items-center justify-center bg-[#80A951] rounded-[40px] shadow-lg text-[#FFFFFF]'>
                <Image src="/aboutPageImages/image-2.png" height="96" width="106" alt="img1"></Image>
                    <p className='font-bold text-xl'>Our Vision</p>
                    <p className='font-normal text-lg'>To revolutionize the
                        traditional approach to
                        investment by introducing
                        virtual land investment and
                        advancing sustainable and
                        smarta riculture ractices.</p>
                </div>
                <div className='h-[350px] w-full lg:w-[25%] flex flex-col space-y-3 p-4 items-center justify-center bg-[#80A951] rounded-[40px] shadow-lg text-[#FFFFFF]'>
                    <Image src="/aboutPageImages/image-1.svg" height="96" width="106" alt="img1"></Image>
                    <p className='font-bold text-xl'> Our Mission</p>
                    <p className='font-normal text-lg'>Empowering individuals to <br/>
                        strengthen and build their
                        wealth through our
                        revolutionary investment
                        system.</p>
                </div>
                <div className='h-[350px] w-full lg:w-[25%] flex flex-col space-y-3 p-4 items-center justify-center bg-[#80A951] rounded-[40px] shadow-lg text-[#FFFFFF]'>
                <Image src="/aboutPageImages/image-3.png" height="96" width="106" alt="img1"></Image>
                    <p className='font-bold text-xl'>What Drives Us?</p>
                    <p className='font-normal text-lg'>
                        Innovation, a sustainable
                        future, advancements in
                        agriculture, smart IoT,
                        intelligent Al, and the
                        revolution of investment
                        strate ies.</p>
                </div>
            </div>
        </div>
    )
}

export default Comp2