import React from 'react';

const LoginPage = () => {

  return (
    <div className="w-[375px] p-6 h-[812px] bg-white shadow-lg ">
      <div className = "h-[330px] justify-center flex flex-col">
        <h2 className="w-[200px] h-[167px] text-3xl font-bold text-gray-900 relative">Signin to your PopX account</h2>
        <p className="w-[232px] h-[48px] text-lg text-gray-600 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="flex flex-col mt-4">
          <label className="block text-sm font-semibold bg-white relative top-1 w-[90px] h-[15px] left-[13px] text-[#6c25ff]">Email Address
          </label>
          <input className="w-[335px] h-[40px] text-sm p-2 text-gray-400 border border-gray-400 px-3 py-2 rounded-md mb-3" type="email" placeholder="Enter email" />
          
          <label className="block w-[65px] h-[15] text-sm font-semibold text-[#6c25ff] relative top-[8px] left-[13px] bg-white ">Password</label>
          <input className="text-sm w-[335px] h-[40px] top- text-gray-400 border border-gray-400 px-3 py-2 rounded-md mb-3" type="password" placeholder="Enter password" />
          
          <button className="w-[335px] bg-gray-300 text-white py-2 rounded">Login</button>
        </form>
        </div>
    </div>
  );
};

export default LoginPage;
