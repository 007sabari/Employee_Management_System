import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginImage from "../../public/image1.jpg";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
      <div>
        <Image
          src={loginImage}
          alt="Login"
          width={0}
          height={0}
          className="w-[70%] h-[60%] mx-auto lg:w-[60%] lg:h-[50%]"
        />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-8   border w-full sm:max-w-screen-md rounded-xl bg-white shadow-xl lg:mr-[10%] mr-[10%]">
        <h1 className="text-3xl text-blue-800 text-center p-4 rounded-xl font-black font-sans mb-6 ">
          Login to your account
        </h1>
        <form className="p-4">
          <div className="mb-4 shadow-xl">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Type Your Username..."
              className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 rounded-md py-2"
            />
          </div>

          <div className="mb-5 shadow-xl">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type Your Password..."
              className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 rounded-md py-2"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Forgot Password?</p>
            <Link
              href="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              Register here
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/managerdashboard"
              className="transition ease-in-out delay-50 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
