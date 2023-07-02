import React from "react";
import Navbar from "../components/Navbar";
import Ellipse from "../components/Ellipse";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-white bg-black h-full w-full">
      <Navbar />
      <div className="grid grid-cols-2">
        <Ellipse />
        <div className="flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Login
            </h2>
            <div className="flex flex-col text-gray-500 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-500 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-900 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <button className="w-full my-5 py-2 bg-[#FF3465] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-white font-bold rounded-lg">
              Login
            </button>
            <Link to="/register">
              <button className="w-full my-5 py-2 mt-1 bg-[#FF3465] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-white font-bold rounded-lg">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
