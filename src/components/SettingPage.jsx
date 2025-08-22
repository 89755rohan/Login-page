import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'; // Import home icon
import profile from '../assets/profile.jpg'

const SettingsPage = () => {

  return (
    <div className="relative w-[375px] h-[812px] p-6 bg-[#F7F8F9] shadow-lg ">
      {/* Home Icon (Top Right) */}
      <div className='bg-white  w-[375px] h-[68px] relative top-[-24px] left-[-24px] '>
        <Link to='/' className='cursor-pointer'><FiHome
          className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"/></Link>
        <h2 className="w-[146px] h-[22px] relative top-[19px] left-[20px] text-lg font-semibold text-gray-900 bg-white">Account Settings</h2>
      </div>


      <div className="mt-4 flex items-center bg-[#F7F8F9] space-x-3">
        <img
          src={profile} // Placeholder image
          alt="Profile"
          className="w-[76px] h-[76px] rounded-full"
        />
        <div>
          <h3 className="text-md font-semibold">Rohan pathriya</h3>
          <p className="text-gray-600 text-sm">rohanpathriya@Gmail.Com</p>
        </div>
      </div>
      <p className="mt-3 w-[337px] h-[63px] text-gray-600 text-sm">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
      </p>
    </div>
  );
};

export default SettingsPage;
