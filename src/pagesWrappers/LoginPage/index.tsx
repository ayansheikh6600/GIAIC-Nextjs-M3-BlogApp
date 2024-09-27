"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import Cookies from 'js-cookie';

const gradientColors = {
  default: ['#8750f7', '#0f0715'],
  hover: ['#0f0715', '#8750f7']
};

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      console.log(res);
      const token = res.data.token;
      Cookies.set('authToken', token, { expires: rememberMe ? 7 : 1 });
      console.log('Login successful, token saved in cookies');

    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="email"
              placeholder="your-email@gmail.com"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
                className="form-checkbox h-4 w-4 text-orange-500 rounded focus:ring-0"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#8750f7] hover:underline">
              Forgot Password
            </a>
          </div>

          <div>
            <motion.button
              type="submit" // Ensure the button is a submit button
              className="bg-gradient-to-r p-2 px-4 rounded-xl text-white border-primary border"
              initial={{ backgroundImage: `linear-gradient(to right, ${gradientColors.default[0]}, ${gradientColors.default[1]})` }}
              whileHover={{ backgroundImage: `linear-gradient(to right, ${gradientColors.hover[0]}, ${gradientColors.hover[1]})` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              LOGIN
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
