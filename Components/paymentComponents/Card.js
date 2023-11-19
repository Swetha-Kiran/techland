import React, { useState } from 'react';

function Card() {

 
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleCardInputChange = (e, fieldName) => {
    const { value } = e.target;

 
    setCardData({
      ...cardData,
      [fieldName]: value,
    });
  };
  console.log(cardData)

  return (
    <>
      <p className='font-semibold text-lg text-[#6E737F]'>Enter the card details :</p>
      <div className='flex flex-col md:flex-row w-full h-full justify-between items-center space-y-4 md:space-x-4 '>
        <div className='flex flex-col space-y-3 text-[#6E737F]  font-semibold text-xs lg:text-sm w-full md:w-[45%]'>
          <label htmlFor='name'>Name on the card</label>
          <input
            id='name'
            className='h-10 focus:outline-none font-light border-2 border-[#D4D3D7] rounded-md px-3'
            type='text'
            value={cardData.cardName}
            onChange={(e) => handleCardInputChange(e, 'cardName')} />
        </div>

        <div className='flex flex-col space-y-3 text-[#6E737F]  font-semibold text-xs lg:text-sm w-full md:w-[45%]'>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            id='cardNumber'
            className='h-10 focus:outline-none font-light border-2 border-[#D4D3D7] rounded-md px-3'
            type='text'
            value={cardData.cardNumber}
            onChange={(e) => handleCardInputChange(e, 'cardNumber')}/>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-between items-center space-y-4 md:space-x-4'>
        <div className='flex flex-col space-y-3 text-[#6E737F]  font-semibold text-xs lg:text-sm w-full md:w-[45%]'>
          <label htmlFor='expirationDate'>Expiration Date</label>
          <input
            id='expirationDate'
            className='h-10 focus:outline-none font-light border-2 border-[#D4D3D7] rounded-md px-3'
            type='month'
            value={cardData.expirationDate}
            onChange={(e) => handleCardInputChange(e, 'expirationDate')}/>
        </div>
        <div className='flex flex-col space-y-3 text-[#6E737F]  font-semibold text-xs lg:text-sm w-full md:w-[45%]'>
          <label htmlFor='cvv'>CVV</label>
          <input
            id='cvv'
            className='h-10 focus:outline-none font-light border-2 border-[#D4D3D7] rounded-md px-3'
            type='text'
            value={cardData.cvv}
            onChange={(e) => handleCardInputChange(e, 'cvv')} />
        </div>
      </div>
    </>
  );
}

export default Card;
