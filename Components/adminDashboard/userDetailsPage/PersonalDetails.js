import React,{ useState} from 'react'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from 'next/image';


function PersonalDetails() {
    const [dob, setDob] = useState('23/08/2021');
    const [nationality, setNationality] = useState('Hindu');
    const [phone, setPhone] = useState('6655448878');
    const [address, setAddress] = useState('');
  
   
    const handleInputChange = (e, setter) => {
      setter(e.target.value);
    };

    const [selectedPreference, setSelectedPreference] = useState(null);
    const [selectedSupport, setSelectedSupport] = useState(null);
    const [selectedTerms, setSelectedTerms] = useState(null);

    const handlePreferenceChange = (option) => {
      setSelectedPreference(option);
    };
    const handleSupportChange = (option) => {
        setSelectedSupport(option);
      };
      const handleTermsChange = (option) => {
        setSelectedTerms(option);
      };

    console.log(selectedPreference,selectedSupport,selectedTerms)

    return (
        <section className='w-full h-auto rounded-3xl  px-4 py-3 space-y-3 flex flex-row space-x-12'>
            <section className='w-[60%] flex flex-col space-y-6'>
                <h1 className='font-semibold text-lg pl-4'>Personal Details</h1>
                <section className='w-full space-y-6 text-[#6E737F] text-base'>
                    <section className='w-full flex flex-row justify-between items-center space-x-3'>
                        <section className=' flex flex-row px-6 justify-around items-center relative space-x-4 bg-white rounded-3xl shadow-custom'>
                            <p className='font-semibold'>DOB</p>
                            <input type="text" className=' h-[40px] w-[60%] 2xl:h-[50px] pl-12 pr-4 focus:outline-none text-[#BEBEBF] text-base  font-normal' placeholder='23/08/2021' 
                             value={dob}
                             onChange={(e) => handleInputChange(e, setDob)}/>
                            <Image className='cursor-pointer' src="/dashboardImages/edit.svg" alt="edit" width="14" height="15"></Image>
                        </section>
                        <section className=' flex flex-row px-6 justify-around items-center relative space-x-4 bg-white rounded-3xl shadow-custom'>
                            <p className='font-semibold'>Nationality</p>
                            <input type="text" className=' h-[40px] w-[60%] 2xl:h-[50px] pl-12 pr-4 focus:outline-none text-[#BEBEBF] text-base  font-normal' placeholder='Hindu' 
                                 value={nationality}
                                 onChange={(e) => handleInputChange(e, setNationality)}/>
                            <Image className='cursor-pointer' src="/dashboardImages/edit.svg" alt="edit" width="14" height="15"></Image>
                        </section>
                    </section>

                    <section className='w-[45%] flex flex-row px-6 justify-around items-center relative space-x-4 bg-white rounded-3xl shadow-custom'>
                        <p className='font-semibold'>Phone</p>
                        <input type="text" className=' h-[40px] w-[60%] 2xl:h-[50px]  pl-12 pr-4 focus:outline-none text-[#BEBEBF] text-base  font-normal' placeholder='6655448878'
                         value={phone}
                         onChange={(e) => handleInputChange(e, setPhone)} />
                        <Image className='cursor-pointer' src="/dashboardImages/edit.svg" alt="edit" width="14" height="15"></Image>
                    </section>
                    <section className='w-full flex flex-col p-4 justify-around items-start relative space-x-4 bg-white rounded-3xl shadow-custom'>
                        <p className='font-semibold'>Address</p>
                        <input type="text" className=' h-[40px] w-full 2xl:h-[50px]  pl-12 pr-4 focus:outline-none text-[#BEBEBF] text-base  font-normal' placeholder='Enter your address here...'
                           value={address}
                           onChange={(e) => handleInputChange(e, setAddress)} />

                    </section>
                </section>
                <h1 className='font-semibold text-lg pl-4'>Preferences / Settings</h1>
                <section className='bg-white flex flex-col space-y-8 rounded-xl w-[60%] shadow-custom px-6 py-4 text-[#6E737F] font-semibold cursor-pointer'>
                    <section className=' flex flex-row px-4  items-center justify-between space-x-4  rounded-3xl '>
                        <label><input type="radio" 
                        checked={selectedPreference === 'Notification'}
                        onChange={() => handlePreferenceChange('Notification')}/>Notification </label>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </section>
                    <section className=' flex flex-row px-4 items-center justify-between space-x-4  rounded-3xl'>
                        <label><input type="radio" 
                         checked={selectedPreference === 'Dark Mode'}
                         onChange={() => handlePreferenceChange('Dark Mode')} />Dark Mode </label>
                        <Image src="/dashboardImages/toggle.svg" alt="toggle" width="22" height="12"></Image>
                    </section>
                    <section className=' flex flex-row px-4 items-center justify-between space-x-4 rounded-3xl'>
                        <label><input type="radio" 
                          checked={selectedPreference === 'Settings'}
                          onChange={() => handlePreferenceChange('Settings')}/>Settings</label>
                        <Image src="/dashboardImages/toggle.svg" alt="toggle" width="22" height="12"></Image>
                    </section>
                    <section className=' flex flex-row px-4 items-center justify-between space-x-4 rounded-3xl'>
                        <label><input type="radio" 
                          checked={selectedPreference === 'More Details'}
                          onChange={() => handlePreferenceChange('More Details')} />More Details </label>

                    </section>
                </section>
                <h1 className='font-semibold text-lg pl-4'>Account</h1>
                <section className='bg-white flex flex-col px-6 py-4 space-y-8 rounded-xl w-[60%] shadow-custom text-[#6E737F] font-semibold cursor-pointer'>
                    <div className='flex flex-row space-x-6 items-center'>
                        <RiLogoutBoxRLine />
                        <p>Logout</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between space-x-6 items-center'>
                        <div className='flex flex-row items-center space-x-6'>
                            <RiDeleteBin6Line />
                            <p>Delete Account</p>
                        </div>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </div>
                </section>

            </section>
            <section className='w-[40%] flex flex-col space-y-6 pl-6'>
                <div className='w-full flex flex-col space-y-1 items-center justify-center relative'>
                <h1 className='text-[#2B5743] font-bold text-3xl'>Rahul Verma</h1>
                    <p className=''>rahulverma@gmail.com</p>
                    <p className='opacity-70 text-lg font-bold'>@rahulverma</p>
                    <Image src="/dashboardImages/Profile.svg" alt="profile pic" width="200" height="220"></Image>
                    <Image className="absolute bottom-0 right-[26%]" src="/dashboardImages/color-edit.svg" alt="color-edit" width="34" height="35"></Image>
                </div>
                <h1 className='font-semibold text-lg pl-4'>Help & Support</h1>
                <section className='bg-white flex flex-col space-y-8 rounded-xl w-full shadow-custom px-6 py-4 text-[#6E737F] font-semibold cursor-pointer '>
                    <section className=' flex flex-row px-4  items-center justify-between space-x-4  rounded-3xl '>
                        <label><input type="radio" 
                        checked={selectedSupport === 'Frequently asked questions'}
                        onChange={() => handleSupportChange('Frequently asked questions')}/>Frequently asked questions</label>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </section>
                    <section className=' flex flex-row px-4  items-center justify-between space-x-4  rounded-3xl '>
                        <label><input type="radio" 
                        checked={selectedSupport === 'Customer Support'}
                        onChange={() => handleSupportChange('Customer Support')}/>Customer Support </label>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </section>
                    <section className=' flex flex-row px-4  items-center justify-between space-x-4  rounded-3xl '>
                        <label><input type="radio" 
                        checked={selectedSupport === 'Help Center'}
                        onChange={() => handleSupportChange('Help Center')}/>Help Center </label>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </section>
                   
                </section>
                <h1 className='font-semibold text-lg pl-6'>Terms & Conditions</h1>
                <section className='bg-white flex flex-col space-y-8 rounded-xl w-full shadow-custom px-6 py-4 text-[#6E737F] font-semibold cursor-pointer'>
                <section className=' flex flex-row px-4  items-center justify-between space-x-4  rounded-3xl '>
                        <label><input type="radio" 
                          checked={selectedTerms === 'Terms & Conditions'}
                          onChange={() => handleTermsChange('Terms & Conditions')} />Terms & Conditions</label>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </section>
                    <section className=' flex flex-row px-4  items-center justify-between space-x-4  rounded-3xl '>
                        <label><input type="radio" 
                         checked={selectedTerms === 'Privacy Policies'}
                         onChange={() => handleTermsChange('Privacy Policies')} />Privacy Policies </label>
                        <Image src="/dashboardImages/arrow.svg" alt="arrow" width="8" height="12"></Image>
                    </section>
                    </section>
                   
                </section>

        </section>

    )
}

export default PersonalDetails