import React from "react";
import Link from "next/link";

const AddTm = () => {
  return (
    <div className="p-5">
      <h1 className="text-blue-800  text-center my-1 rounded-xl w-full sm:w-[96%] mx-auto font-black font-sans text-2xl">
        Add Team Member
      </h1>
      <div className="container mx-auto w-full sm:w-[70%] px-2 border drop-shadow-2xl shadow-2xl mt-5 rounded-xl">
        <form>
          <input
            type="text"
            placeholder="Name.."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <input
            type="email"
            required
            placeholder="Email.."
            className="peer w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>

          <input
            type="date"
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <input
            type="number"
            placeholder="Mobile No..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <label htmlFor="Gender" className="block my-1 text-sm mt-4 lg:mt-4">
            Gender:
          </label>
          <div className="flex items-center mt-4 lg:mt-4">
            <input
              className="mr-2"
              required
              type="radio"
              id="male"
              name="Gender"
            />
            <label className="text-sm" htmlFor="male">
              Male
            </label>

            <input
              className="ml-4 mr-2"
              type="radio"
              id="female"
              name="Gender"
            />
            <label className="text-sm" htmlFor="female">
              Female
            </label>
          </div>

          <textarea
            placeholder="Address..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <input
            type="password"
            placeholder="New Password..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />

          <input
            type="password"
            placeholder="Confirm Password..."
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />
          <button
            type="submit"
            className="transition duration-100 ease-in-out delay-50 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 text-white px-4 py-2 rounded-xl mt-4 lg:mt-4 mb-4 lg:mb-4 block mx-auto"
          >
            <Link href={"/managerdashboard"}>ADD</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTm;
