import React, { useState } from 'react';
import Image from 'next/image';
import styling from '../../../Styles/Navbar.module.css';

const PopupMessage = ({popUpClose}) => {

    const handlePopUpClose = (e) =>
    {
      if(e.target.id === 'outerDiv')
      {
        popUpClose();
      }
    };

  return (
    <>
        <div onClick={handlePopUpClose} id='outerDiv' className="fixed top-0 left-0 w-screen h-screen bg-opacity-75 bg-black flex items-center justify-center z-10">
          <div id='innerDiv' className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-3">
              <p className="flex-1 text-gray-800 text-lg font-semibold text-center" style={{fontFamily: 'sans-serif'}}>Stay Tuned</p>
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none text-xl" onClick={() => popUpClose()} >X</button>
            </div>
            <div>
              <Image id={styling.comingSoonImage} src='/Home Page Images/NavBar Images/popUp_img.png' alt='image' width='300' height='200' />
            </div>
          </div>
        </div>
    </>
  );
};

export default PopupMessage;
