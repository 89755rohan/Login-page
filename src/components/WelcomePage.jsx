import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const WelcomePage = () => {

  return (
    <div className="">
        <Link to='/settings' className='cursor-pointer'>
            <FiSettings
            className="relative top-7 left-73 text-gray-700 text-xl cursor-pointer"            />
        </Link>
        <div className="w-80 p-6 h-[612px] flex flex-col justify-end bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Welcome to PopX</h2>
            <p className="text-gray-600 text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link
                className="w-full bg-purple-600 text-white py-2 rounded mt-4"
                to='/signup'
                >
                Create Account
            </Link>
            <Link
                className="w-full bg-purple-300 text-gray-900 py-2 rounded mt-2"
                to='/login'
                >
                Already Registered? Login
            </Link>
        </div>
    </div>
          
  );
};

export default WelcomePage;
