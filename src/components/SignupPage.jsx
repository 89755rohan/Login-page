import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (/\d/.test(formData.fullName)) newErrors.fullName = "Name can't contain numbers";
    if (/[a-zA-Z]/.test(formData.phone)) newErrors.phone = "Phone number must be digits only";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password))
      newErrors.password = "Password must have 1 uppercase, 1 lowercase, 1 number & 1 special character";
    if (/[^a-zA-Z0-9 ]/.test(formData.company)) newErrors.company = "Company name can't have special characters";
    if (!formData.isAgency) newErrors.isAgency = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) alert("Account Created Successfully!");
  };

  return (
    <div className="w-80 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900">Create your PopX account</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {["fullName", "phone", "email", "password", "company"].map((field, idx) => (
          <div key={idx} className="mb-3">
            <label className="block text-sm font-semibold">{field.replace(/([A-Z])/g, " $1")}</label>
            <input
              type={field === "password" ? "password" : "text"}
              className="w-full border px-3 py-2 rounded mt-1"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            />
            {errors[field] && <p className="text-red-500 text-xs">{errors[field]}</p>}
          </div>
        ))}

        <div className="mb-3">
          <label className="block text-sm font-semibold">Are you an Agency?*</label>
          <div className="flex space-x-4">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="isAgency"
                  value={option}
                  onChange={(e) => setFormData({ ...formData, isAgency: e.target.value })}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.isAgency && <p className="text-red-500 text-xs">{errors.isAgency}</p>}
        </div>

        <button className="w-full bg-purple-600 text-white py-2 rounded mt-3">Create Account</button>
      </form>
      <button className="text-sm text-blue-500 mt-2" onClick={() => navigate('/')}>Back</button>
    </div>
  );
};

export default SignupPage;
