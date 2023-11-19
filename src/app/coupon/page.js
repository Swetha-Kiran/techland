"use client"
import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";

function page() {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        code: '',
        date: '',
        discount: '',
        minimum: '',
        type: 'Select Type',
      });
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };

      const handleSelectChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          type: e.target.value,
        }));
      };
    
      const handleCancelClick = () => {
        console.log('Cancel button clicked');
      };
    
      const handleAddCouponClick = () => {
    
        console.log('Add Coupon button clicked');
        console.log('Form Data:', formData);
      };
    return (
        <div className='w-full h-full flex items-center justify-center my-10'>
            <div className='w-[50%] h-[60%] border border-gray-300 bg-white shadow-custom'>
                <div className='bg-[#F6F7F9] flex flex-row justify-between items-center px-6 py-4'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-lg font-semibold'>Add Coupon</p>
                        <p className='text-base'>Add your coupon and necessary information here</p>
                    </div>
                    <CgClose />
                </div>
                <div className='p-6 space-y-6'>
                    <div className='flex flex-row items-center '>
                        <label for="fileInput" className='w-[40%]'>Coupon Image</label>
                        <input id="fileInput" className="w-[60%]" type="file"
                         onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-row items-center '>
                        <label for="name" className='w-[40%]' >Campaign Name</label>
                        <input id="name" className="w-[60%] h-[40px] px-4 border border-gray-200 bg-[#F6F7F9] rounded-md focus:outline-none" type="text" placeholder='Campaign Title' 
                         onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-row items-center '>
                        <label for="code" className='w-[40%]' >Campaign Code</label>
                        <input id="code" className="w-[60%] h-[40px] px-4 border border-gray-200 bg-[#F6F7F9] rounded-md focus:outline-none" type="text" placeholder='Campaign Code' 
                         onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-row items-center '>
                        <label for="date" className='w-[40%]' >Coupon Validity Time</label>
                        <input id="date" className="w-[60%] h-[40px] px-4 border border-gray-200 bg-[#F6F7F9] rounded-md focus:outline-none" type="date" placeholder='' 
                         onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-row items-center '>
                        <label for="discount" className='w-[40%]' >Discount Percentage</label>
                        <input id="discount" className="w-[60%] h-[40px] px-4 border border-gray-200 bg-[#F6F7F9] rounded-md focus:outline-none" type="text" placeholder='Discount Percentage'
                         onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-row items-center '>
                        <label for="minimum" className='w-[40%]' >Minimum Amount</label>
                        <input id="minimum" className="w-[60%] h-[40px] px-4 border border-gray-200 bg-[#F6F7F9] rounded-md focus:outline-none" type="text" placeholder='Minimum amount required' 
                         onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-row items-center '>
                        <label for="type" className='w-[40%]' >Product Type</label>
                        <select id="type" className="w-[60%] h-[40px] px-4 border border-gray-200 bg-[#F6F7F9] rounded-md focus:outline-none">
                            <option>Select Type</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                        </select>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <button className='text-red-400 h-[40px] w-[40%] rounded-md bg-gray-200'
                         onClick={handleCancelClick}>Cancel</button>
                        <button className='bg-green-500 h-[40px] w-[40%] rounded-md text-white'
                        onClick={handleAddCouponClick}>Add Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page