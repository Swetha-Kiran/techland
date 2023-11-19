import React from'react';

const HeroNav = ({activeButtonIndex, setActiveButtonIndex}) =>
{
    const buttons = [
        "Micro Land",
        "Mini Land",
        "Medium Land",
        "Major Land",
        "Mega Land"
      ];

      const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
      };

return (
    <>
        <div className='bg-yello-300 space-y-4'>
            <h5 className='text-base font-semibold text-[#6E737F] text-center'>Select a Package</h5>
            <div className='overflow-x-auto scrollbar-hide'>
                <ul className='flex  justify-between '>
                    {buttons.map((buttonText, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleButtonClick(index)}
                            className={`w-[33vw] md:w-[15vw] lg:w-[10vw] px-1 py-2 2xl:px-8 2xl:py-3 gap-x-3 mr-4 lg:mr-0 lg:gap-x-0 ${
                            activeButtonIndex === index
                            ? 'bg-[#2a2b39] text-white'
                            : 'bg-[#ebebeb] text-[#6E737F]'
                            } font-normal rounded-2xl`}
                            >
                        {buttonText}
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
)
};
export default HeroNav;