"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";


const gradientColors = {
    default: ['#8750f7', '#0f0715'],
    hover: ['#0f0715', '#8750f7']
  };

const SignupPage = () => {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="your-fullName"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your-email@gmail.com"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          

          <div>
          <motion.button
          className="bg-gradient-to-r p-2 px-4 rounded-xl text-white border-primary border"
          initial={{ backgroundImage: `linear-gradient(to right, ${gradientColors.default[0]}, ${gradientColors.default[1]})` }}
          whileHover={{ backgroundImage: `linear-gradient(to right, ${gradientColors.hover[0]}, ${gradientColors.hover[1]})` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          SIGNUP
        </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
