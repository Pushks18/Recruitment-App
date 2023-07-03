import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Ellipse from "../components/Ellipse";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-white bg-black h-full w-full">
      <Navbar />
      <div className="grid grid-cols-2">
        <Ellipse />
        <div className="flex flex-col justify-center items-center">
          <form
            className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 items-center"
            onSubmit={registerHandler}
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Register
            </h2>
            <div className="flex flex-col text-gray-500 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-500 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-900 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="w-full my-5 py-2 bg-[#FF3465] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-white font-bold rounded-lg"
              type="submit"
            >
              Register
            </button>
            <AuthDetails />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
