import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const WelcomePage = () => {

  return (
    <div className="bg-[#F7F8F9] ">
        <Link to='/settings' className='cursor-pointer'>
            <FiSettings
            className="relative top-[24px] left-[339px] text-gray-700 text-xl cursor-pointer"/>
        </Link>
        <div className=" p-6 h-[812px] w-[375px] bg-[#F7F8F9] flex flex-col justify-end shadow-lg text-center">
            <h2 className="text-[28px] font-semibold text-gray-900 text-left">Welcome to PopX</h2>
            <p className="w-[232px] h-[48px ]text-gray-600 text-lg my-2 text-left  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link
                className="w-full bg-[#6C25FF] text-white py-2  rounded mt-4"
                to='/signup'
                >
                Create Account
            </Link>
            <Link
                className="w-full bg-[#6C25FF4B] text-gray-900 py-2 rounded mt-2"
                to='/login'
                >
                Already Registered? Login
            </Link>
        </div>
    </div>
          
  );
};

export default WelcomePage;
