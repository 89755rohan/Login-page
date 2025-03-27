import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="">
            <FiSettings
            className="relative top-7 left-73 text-gray-700 text-xl cursor-pointer"
            onClick={() => navigate('/settings')}
            />
        <div className="w-80 p-6 h-[612px] flex flex-col justify-end bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Welcome to PopX</h2>
            <p className="text-gray-600 text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
                className="w-full bg-purple-600 text-white py-2 rounded mt-4"
                onClick={() => navigate('/signup')}
                >
                Create Account
            </button>
            <button
                className="w-full bg-purple-300 text-gray-900 py-2 rounded mt-2"
                onClick={() => navigate('/login')}
                >
                Already Registered? Login
            </button>
        </div>
    </div>
          
  );
};

export default WelcomePage;
