import React, { useState } from 'react';

function Form() {
  // State for the inputs and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue = e.target.value;
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    
    setName(nameValue);

    // Validate name
    if (!nameRegex.test(nameValue)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    setEmail(emailValue);

    // Validate email
    if (!emailRegex.test(emailValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id="main-container">
      <div className="flex items-center justify-center w-full max-w-sm">
        <form noValidate className="bg-white p-6 shadow-lg rounded-xl w-full">
          <p className="text-xl font-bold text-gray-800 pb-4 text-center">Sign Up</p>
          <p className="text-gray-500 font-bold pb-5 text-sm text-center">Welcome To Craft!</p>

          {/* Full Name */}
          <div className="flex flex-col mb-3 pb-2">
            <label htmlFor="name" className="text-gray-700 pb-1 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`p-2 rounded-md bg-gray-50 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${nameError ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your full name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <span id="name-error" className="text-red-500 text-sm mt-1">Please enter a valid full name</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-3 pb-2">
            <label htmlFor="email" className="text-gray-700 pb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`p-2 rounded-md bg-gray-50 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <span id="email-error" className="text-red-500 text-sm mt-1">Please enter a valid email address.</span>}
          </div>

          {/* Country */}
          <div className="flex flex-col mb-3 pb-2">
            <label htmlFor="country" className="text-gray-700 pb-1 text-sm font-semibold">Country</label>
            <select
              id="country"
              name="country"
              required
              className="p-2 rounded-md bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select your country</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
            </select>
          </div>

          {/* Password */}
          <div className="flex flex-col mb-3 pb-2">
            <label htmlFor="password" className="text-gray-700 pb-1 text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 rounded-md bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col mb-4 pb-2">
            <label htmlFor="confirmPassword" className="text-gray-700 pb-1 text-sm font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="p-2 rounded-md bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="w-full py-2 text-white text-sm font-semibold bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
