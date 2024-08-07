import React from "react";
import Link from "next/link";
import Image from "next/image";
import resetImage from "../../public/image1.jpg";

const page = () => {
  return (
    <div className="p-3">
      <div className="container mx-auto w-full sm:w-[96%] px-6 border drop-shadow-2xl shadow-2xl mt-5 rounded-xl">
        <h1 className="text-blue-800  text-center p-6 my-2 rounded-xl w-full sm:w-[96%] mx-auto font-black font-sans text-2xl">
          Reset Password!
        </h1>
        <form>
          <input
            type="text"
            placeholder="Old Password..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <input
            type="password"
            placeholder="New Password..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <input
            type="text"
            placeholder="Confirm Password..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <button
            type="submit"
            className="transition duration-100 ease-in-out delay-50 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 text-white px-4 py-2 rounded-xl mt-8 lg:mt-4 block mx-auto mb-4"
          >
            <Link
              href="/login"
              className="transition duration-300 hover:text-indigo-500 text-white hover:-translate-y-1 hover:scale-110"
            >
              Reset
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
