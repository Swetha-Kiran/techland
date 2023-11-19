import Image from "next/image"



function Section1() {


  return (
    <div className='w-full h-auto md:h-[50vh] lg:h-[86vh] space-x-6 relative overflow-hidden  grid md:grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 mt-12 lg:mt-4 md:gap-x-6 xs:gap-x-4 xl:px-[10.5vw] lg:px-[9.7vw] md:px-[1.6vw] sm:px-0 '>
      {/* <div className='absolute -left-80 -top-10 md:top-16 -z-10 '>
        <Image className="w-[400px]  sm:w-[450px]  lg:w-[490px] lg:h-[470px] xl:w-[530px] xl:h-[480px]"src="/Home Page Images/newCompImages/Blob1.svg" alt="" width="530" height="500"></Image>
      </div>
      <div className='absolute -right-20 top-[20vh]  sm:top-[300px] md:top-[2vh] lg:top-[5.4vh] -z-10 '>
        <Image className="w-[350px] h-[480px]  sm:w-[400px] sm:h-[600px] lg:w-[500px] lg:h-[550px] xl:w-[560px] xl:h-[630px]"src="/Home Page Images/newCompImages/Blob2.svg" alt="" width="600" height="754"></Image>
      </div>  */}

      <div className='h-full col-span-4 sm:col-span-8 md:col-span-6 pb-8 pt-6 md:pt-0 flex flex-col items-center justify-center'>
      <div className='space-y-[60px]'>
            <div className='space-y-8 px-4  text-left '>
              <p className='text-[#2A2B39]  font-bold text-xl sm:text-4xl md:text-5xl leading-none'>{`Invest in India’s Culture Future`}</p>
              <p className='text-[#6E737F]  font-medium text-sm sm:text-base'>{`Join us in creating immersive cultural experiences in our unique Home Vacations Property, featuring distinct districts each representing a different aspect of India's rich cultural heritage`}</p>
            </div>

          </div>
      </div>
      <div className='h-full col-span-4 sm:col-span-8 md:col-span-6 py-auto flex justify-center items-center'>
      <Image  className=" w-full object-cover" src="/Home Page Images/newCompImages/Section1.svg" alt="" width="400" height="450"></Image>
      </div>

    </div>
  )
}

export default Section1