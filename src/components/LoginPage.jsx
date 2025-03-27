import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-80 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900">Signin to your PopX account</h2>
      <form className="mt-4">
        <label className="block text-sm font-semibold">Email Address</label>
        <input className="w-full border px-3 py-2 rounded mb-3" type="email" placeholder="Enter email" />
        
        <label className="block text-sm font-semibold">Password</label>
        <input className="w-full border px-3 py-2 rounded mb-3" type="password" placeholder="Enter password" />
        
        <button className="w-full bg-gray-400 text-white py-2 rounded">Login</button>
      </form>
      <button className="text-sm text-blue-500 mt-2" onClick={() => navigate('/')}>Back</button>
    </div>
  );
};

export default LoginPage;
