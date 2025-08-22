
import React, { useState } from "react";

export default function SignupForm() {
  const [isAgency, setIsAgency] = useState("yes");

  return (
    <div className="flex justify-center items-center w-[375px] h-[812px] bg-gray-50">
      <div className="bg-gray-50 p-6 w-96 flex flex-col relative top-[-90px]">
        <h2 className="text-2xl font-bold text-gray-800">
          Create your <br /> PopX account
        </h2>

        <form className="mt-6 flex flex-col space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="h-[15px] w-[75px] relative top-[8px] left-[12px] text-sm bg-gray-50 font-medium text-purple-600 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="h-[15px] w-[105px] relative top-[8px] left-[12px] text-sm bg-gray-50 font-medium text-purple-600 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Marry Doe"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="h-[15px] w-[95px] relative top-[8px] left-[12px] text-sm bg-gray-50 font-medium text-purple-600 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="h-[15px] w-[65px] relative top-[8px] left-[12px] text-sm bg-gray-50 font-medium text-purple-600 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="h-[15px] w-[110px] relative top-[8px] left-[14px] text-sm bg-gray-50 font-medium text-purple-600 mb-1">
              Company name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Agency Radio */}
          <div>
            <label className="h-[15px] relative top-[]left-[12px] text-sm bg-gray-50 font-medium text-purple-600">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                  className="form-radio text-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                  className="form-radio text-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md mt-4 hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
