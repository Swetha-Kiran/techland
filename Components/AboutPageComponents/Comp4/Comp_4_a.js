import Image from 'next/image'
import React from 'react'

const Comp_4_a = () => {
  return (
    <div className="relative lg:w-[20vw] md:w-[35vw] inline-block mx-2">
          <Image
            src="/aboutPageImages/gary-beasley.png"
            alt="Team Member 1"
            width={300}
            height={300}
          />
          <div className="absolute  bottom-0 left-0 right-0 bg-[#3b3759] opacity-90 px-4 py-2 ">
            <span className="text-xs leading-3 font-normal text-white">
              CEO & Co-Founder
            </span>
            <div className="text-sm font-bold leading-4 text-white">
              Gary Beasley
            </div>
          </div>
        </div>
  )
}

export default Comp_4_a;