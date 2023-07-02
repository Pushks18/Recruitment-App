import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <Link to="/">
        <h1 className="w-full text-4xl font-bold text-[#FF3465]">Rekrut</h1>
      </Link>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="text-xl p-5">Home</li>
        </Link>
        <Link to="/login">
          <li className="text-xl p-5">Login</li>
        </Link>
        <Link to="/candidates">
          <li className="text-xl p-5">Candidates</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl m-4 font-bold text-[#FF3465]">Rekrut</h1>
        <li className="p-5 border-b border-gray-600">Home</li>
        <li className="p-5 border-b border-gray-600">Login</li>
        <li className="p-5 border-b border-gray-600">Candidates</li>
      </ul>
    </div>
  );
};

export default Navbar;
