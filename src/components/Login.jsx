import React from "react";

import loginImg from "../assets/login.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-komatsu-blue-light flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-komatsu-blue p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Login
          </h2>
          <div className="flex flex-col text-white py-2">
            <label>Email</label>
            <input
              className="text-black rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-white py-2">
            <label>Password</label>
            <input
              className="p-2 text-black rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between text-white py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <Link to={"/"}>
            <button className="w-full my-5 py-2 bg-komatsu-blue-light hover:shadow-lg text-white font-semibold rounded-lg">
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
