import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'; // Import home icon
import profile from '../assets/profile.jpg'

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-80 h-[612px] p-6 bg-white shadow-lg rounded-lg">
      {/* Home Icon (Top Right) */}
      <FiHome
        className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
        onClick={() => navigate('/')}
      />

      <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
      <div className="mt-4 flex items-center space-x-3">
        <img
          src={profile} // Placeholder image
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-md font-semibold">Rohan pathriya</h3>
          <p className="text-gray-600 text-sm">rohanpathriya@Gmail.Com</p>
        </div>
      </div>
      <p className="mt-3 text-gray-600 text-sm">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
      </p>
    </div>
  );
};

export default SettingsPage;
